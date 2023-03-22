const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const db = require("./db/db.json");

const uuid = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
  const notes = db;
  res.json(notes);
});

app.post("/api/notes", (req, res) => {
  console.log("post note");
  console.log(req.body);
  const savedNotes = db;
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid(),
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


app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});