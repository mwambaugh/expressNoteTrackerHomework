const path = require("path");
// const fs = require("fs");
// const express = require("express");
// const router = express.Router();

//Routes 
module.exports = function (app) {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '/../public/notes.html'))
    });

    //catch all
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });
};