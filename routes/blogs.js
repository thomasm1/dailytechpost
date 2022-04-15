var express = require('express');
var fs = require('fs');
var datafile = 'server/data/blogs.json';
var router = express.Router();

/* GET all blogs and POST new blogs */
router.route('/')
    .get(function(req, res) {
        var data = getBlogData();
        res.send(data);
    })

    .post(function(req, res) {

        var data = getBlogData();
        var nextID = getNextAvailableID(data);

        var newBlog = {  
            id: nextID,
            did: req.body.did,
            date: req.body.date,
            author: req.body.author,
            cat3: req.body.cat3,
            title: req.body.title,
            post: req.body.post,
            blogcite: req.body.blogcite
        };

        data.push(newBlog);

        saveBlogData(data);

//        res.set('Content-Type', 'application/json');
        res.status(201).send(newBlog);
    });


/* GET, PUT and DELETE individual blogs */
router.route('/:id')

    .get(function(req, res) {

        //console.log('Retrieving blog id: ' + req.params.id);

        var data = getBlogData();

        var matchingBlogs = data.filter(function(item) {
            return item.id == req.params.id;
        });

        if(matchingBlogs.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingBlogs[0]);
        }
    })

    .delete(function(req, res) {

        var data = getBlogData();

        var pos = data.map(function(e) {
            return e.id;
        }).indexOf(parseInt(req.params.id, 10));

        if (pos > -1) {
            data.splice(pos, 1);
        } else {
            res.sendStatus(404);
        }

        saveBlogData(data);
        res.sendStatus(204);

    })

    .put(function(req, res) {

        var data = getBlogData();

        var matchingBlogs = data.filter(function(item) {
            return item.id == req.params.id;
        });

        if(matchingBlogs.length === 0) {
            res.sendStatus(404);
        } else {

            var blogToUpdate = matchingBlogs[0];
            blogToUpdate.id =  req.body.id,
            blogToUpdate.title = req.body.title;
            blogToUpdate.author = req.body.author;
            blogToUpdate.date = req.body.date;
            blogToUpdate.cat3 = req.body.cat3;
            blogToUpdate.blogcite = req.body.blogcite; 

            saveBlogData(data);
            res.sendStatus(204);

        }
    });

function getNextAvailableID(allBlogs) {

    var maxID = 0;

    allBlogs.forEach(function(element, index, array) {

        if(element.id > maxID) {
            maxID = element.id;
        }

    });

    return ++maxID;

}

function getBlogData() {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
}

function saveBlogData(data) {
    fs.writeFile(datafile, JSON.stringify(data, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = router;
