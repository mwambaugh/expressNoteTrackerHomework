const express = require('express');
const path = require("path");
const htmlRoute = require('./routes/htmlRoute.js');
//set up listening PORT
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});