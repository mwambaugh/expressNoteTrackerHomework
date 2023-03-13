const express = require('express');
const path = require("path");
//set up listening PORT
const app = express();
const PORT = process.env.PORT || 3033;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(require("./routes/htmlRoute"));
let notes = require('./db/db.json');

require("./routes/apiRoute.js")(app);
require("./routes/htmlRoute.js")(app);

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});