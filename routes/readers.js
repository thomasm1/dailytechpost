import express from 'express';
import fs from 'fs';
const datafile = 'server/data/posts.json';

function tagsMatcher(text, searchTags){
    let textArr = text.split(' ');
    let searchTagArr = searchTags.split(' ')
    let searchTagObject = {}

    searchTagArr.forEach(word => {
    if(!searchTagObject[word]) searchTagObject[word]=0;
    searchTagObject[word]++
    })
    let searchSuccess = true;
    textArr.forEach(word => {
        if(searchTagObject[word]) {
            searchTagObject[word]--
            if(searchTagObject[word]<0) searchSuccess=false; // not necessary here
        }
        else searchSuccess = false
    })
    return searchSuccess
}
export const readersRouter = express.Router();

/* GET all books and POST new readers */
readersRouter.route('/readers')
    .get(function(req, res) {
        var data = getReaderData();
        res.send(data);
    })

    .post(function(req, res) { 
        var data = getReaderData();
        var nextID = getNextAvailableID(data);

        var newReader = {
            reader_id: nextID,
            name: req.body.name,
            weeklyReadingGoal: req.body.weeklyReadingGoal,
            totalMinutesRead: req.body.totalMinutesRead
        };

        data.push(newReader);

        saveReaderData(data);

//        res.set('Content-Type', 'application/json');
        res.status(201).send(newReader);
    });


/* GET, PUT and DELETE individual readers */
readersRouter.route('/:id')

    .get(function(req, res) {

        //console.log('Retrieving reader id: ' + req.params.id);

        var data = getReaderData();

        var matchingReaders = data.filter(function(item) {
            return item.reader_id == req.params.id;
        });

        if(matchingReaders.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingReaders[0]);
        }
    })

    .delete(function(req, res) {

        var data = getReaderData();

        var pos = data.map(function(e) {
            return e.reader_id;
        }).indexOf(parseInt(req.params.id, 10));

        if (pos > -1) {
            data.splice(pos, 1);
        } else {
            res.sendStatus(404);
        }

        saveReaderData(data);
        res.sendStatus(204);

    })

    .put(function(req, res) {

        var data = getReaderData();

        var matchingReaders = data.filter(function(item) {
            return item.reader_id == req.params.id;
        });

        if(matchingReaders.length === 0) {
            res.sendStatus(404);
        } else {

            var readerToUpdate = matchingReaders[0];
            readerToUpdate.name = req.body.name;
            readerToUpdate.weeklyReadingGoal = req.body.weeklyReadingGoal;
            readerToUpdate.totalMinutesRead = req.body.totalMinutesRead;

            saveReaderData(data);
            res.sendStatus(204);

        }
    });

function getNextAvailableID(allReaders) {

    var maxID = 0;

    allReaders.forEach(function(element, index, array) {

        if(element.reader_id > maxID) {
            maxID = element.reader_id;
        }

    });

    return ++maxID;

}

function getReaderData() {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
}

function saveReaderData(data) {
    fs.writeFile(datafile, JSON.stringify(data, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });
}

 
