
const path = require("path");
const router = require("express").Router();
const fs = require("fs");
const db = require("../../db/db.json");
const { resolve } = require("path");

const dbPath = "db/db.json";

router.get("/notes", (req, res) => {
  const notes = db;
  res.json(notes);
});

router.post("/notes", (req, res) => {
  console.log("post note");
  console.log(req.body);
  const savedNotes = db;
  let newNote = {
    title: req.body.title,
    text: req.body.text,
  };
  savedNotes.push(newNote);
  console.log(savedNotes);
  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify(savedNotes),
    (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    }
  );
  res.json(savedNotes);
});

module.exports = router;