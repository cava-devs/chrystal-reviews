const express = require('express');
const app = express();
const port = 3002;
const bodyParser = require('body-parser');
const db = require('../../database/index.js');

app.get('/', (req, res) => res.send('CavaTable reviews module server is working!'));

app.use(bodyParser.json());

app.listen(port, () => console.log(`CavaTable is listening on port ${port}`));

app.get('/reviews', (req, res) => {
  db.getAllReviews();
  res.status(200).send('Successfully sent back a response to the get request!');
});