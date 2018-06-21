const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const db = require('../../database/index.js');

const app = express();
const port = 8081;
app.use(bodyParser.json());

app.use('/restaurant/:restaurantId', express.static(path.join(__dirname, '/../../client/dist/')));

app.get('/restaurant/:restaurantId/reviews', (req, res) => {
  db.getAllReviews(req.params.restaurantId, (err, results) => {
    if (err) {res.status(500).send(err)}
    else {
      res.status(200).send(results);
    }
  });
});

// app.post('/restaurant/:restaurantId/reviews'), (req, res) => {
//   if (!req.body.name) {
//     res.status(400).send('Error, a name is required')
//   }
//   //insert into database
// }

app.listen(port, () => console.log(`CavaTable is listening on port ${port}`));
