
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(bodyParser.json());

const port = process.env.PORT || 4433;

app.listen(port, () => console.log('Listening on 4433....'));