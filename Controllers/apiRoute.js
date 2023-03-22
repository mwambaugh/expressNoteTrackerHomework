const fs = require('fs');
const UUID = require("uuid");
const db = require("./../db/db.json");


module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        fs.readFile(__dirname + "./../db/db.json", (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });
    app.post('/api/notes', function (req, res) {
        let noteTotal = [];
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: UUID.v4(),
        }
        fs.readFile(__dirname + './../db/db.json', JSON.stringify(allNotes), "utf-8", (err) => {
            if (error) throw err;
            noteTotal = JSON.parse(data);
            noteTotal.push(newNote);
            fs.writeFile(__dirname + './../db/db.json', JSON.stringify(noteTotal), "utf-8", err => {
                if (err) throw err;
                console.log("saved")
                res.end();
            })
        })
        console.log("Note created");
    });

    app.delete('/api/notes/:id', (req, res) => {
        let noteId = req.params.id;
        fs.readFile(__dirname + './../db/db.json', (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            const filterNote = notes.filter(values => values.id != noteId);
            fs.writeFile(__dirname + './../db/db.json', JSON.stringify(filterNote), "utf-8", err => {
                if (err) throw err;
                console.log("The note has been deleted.")
                res.end();
            });
        });
    });
};