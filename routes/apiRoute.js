const fs = require('fs');
const db = require("../db/db.json");
const UUID = require("uuid");

module.exports = function (app) {
    app.get('/api/notes', (req, res) => {
        fs.readFile(__dirname, + "\db\db.json", (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });
    app.post('api/notes', (req, res) => {
        let noteTotal = [];
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: UUID.v4(),
        }
        fs.readFile(__dirname + '/../db/db.json', (err, data) => {
            if (error) throw err;
            noteTotal = JSON.parse(data);
            noteTotal.push(newNote);
            fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(noteTotal), "utf-8", err => {
                if (err) throw err;
                console.log("good job")
                res.end();
            })
        })
        console.log(created)
    });

    app.delete('/api/notes/:id', (req, res) => {
        let noteId = req.params.id;
        fs.readFile(__dirname + '../db/db.json', (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            const filterNote = notes.filter(values => values.id != noteId);
            fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(filterNote), "utf-8", err => {
                if (err) throw err;
                res.end();
            });
        });
    });
};