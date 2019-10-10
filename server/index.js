
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const file = json => {
  fs.writeFile("zoom.json", json, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
};

const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(bodyParser.json());

app.post('/d3', (req, res) => {
  // file(req.body.name);
});

app.get('/*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '/../dist/index.html'), 
    err => { if (err) res.status(500).send(err) }
  );
});

const port = process.env.PORT || 4433;

app.listen(port, () => console.log('Listening on 4433....'));