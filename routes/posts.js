import express from 'express';
import fs from 'fs';
const datafile = 'server/data/posts.json';
export const postsRouter = express.Router();

/* GET all posts and POST new posts */
postsRouter.route('/posts')
    .get(function(req, res) {
        var data = getPostData();
        res.send(data);
    })

    .post(function(req, res) {

        var data = getPostData();
        var nextID = getNextAvailableID(data);

        var newPost = {  
            id: nextID,
            did: req.body.did,
            date: req.body.date,
            author: req.body.author,
            cat3: req.body.cat3,
            title: req.body.title,
            post: req.body.post,
            postcite: req.body.postcite
        };

        data.push(newPost);

        savePostData(data);

//        res.set('Content-Type', 'application/json');
        res.status(201).send(newPost);
    });


/* GET, PUT and DELETE individual posts */
postsRouter.route('/:id')

    .get(function(req, res) {

        //console.log('Retrieving post id: ' + req.params.id);

        var data = getPostData();

        var matchingPosts = data.filter(function(item) {
            return item.id == req.params.id;
        });

        if(matchingPosts.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingPosts[0]);
        }
    })

    .delete(function(req, res) {

        var data = getPostData();

        var pos = data.map(function(e) {
            return e.id;
        }).indexOf(parseInt(req.params.id, 10));

        if (pos > -1) {
            data.splice(pos, 1);
        } else {
            res.sendStatus(404);
        }

        savePostData(data);
        res.sendStatus(204);

    })

    .put(function(req, res) {

        var data = getPostData();

        var matchingPosts = data.filter(function(item) {
            return item.id == req.params.id;
        });

        if(matchingPosts.length === 0) {
            res.sendStatus(404);
        } else {

            var postToUpdate = matchingPosts[0];
            postToUpdate.id =  req.body.id,
            postToUpdate.title = req.body.title;
            postToUpdate.author = req.body.author;
            postToUpdate.date = req.body.date;
            postToUpdate.cat3 = req.body.cat3;
            postToUpdate.blogcite = req.body.blogcite; 

            savePostData(data);
            res.sendStatus(204);

        }
    });

function getNextAvailableID(allPosts) {

    var maxID = 0;

    allPosts.forEach(function(element, index, array) {

        if(element.id > maxID) {
            maxID = element.id;
        }

    });

    return ++maxID;

}

function getPostData() {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
}

function savePostData(data) {
    fs.writeFile(datafile, JSON.stringify(data, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });
}

  