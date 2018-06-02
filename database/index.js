const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function generateUsername() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 1; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

for (var i = 1; i < 10; i++) {
  let restaurantId = getRandomInt(1001, 1100);
  let username = generateUsername();
  let date = JSON.stringify(new Date);
  let overallRating = getRandomInt(1, 5);
  let foodRating = getRandomInt(1, 5);
  let serviceRating = getRandomInt(1, 5);
  let ambianceRating = getRandomInt(1, 5);
  let valueRating = getRandomInt(1, 5);
  let noiseLevel = getRandomInt(1, 4);
  let recommended = Math.random() >= 0.5;
  let body = 'Lorem ipsum dolor sit amet, pri id vide homero alienum, nibh nusquam mel no. Pro perfecto atomorum sapientem cu, elit natum ex eum. Est probo qualisque ut. Quo at congue iriure.';
  // need to add date back into this query
  let insertNewReview = `INSERT INTO cava.reviews (restaurant_id, username, date, overall_rating, food_rating, service_rating, ambiance_rating, value_rating, noise_level, recommended, body) VALUES (${restaurantId}, '${username}', ${date}, ${overallRating}, ${foodRating}, ${serviceRating}, ${ambianceRating}, ${valueRating}, ${noiseLevel}, ${recommended}, '${body}');`

  connection.query(insertNewReview, function(err, results, fields) {
    if (err) { throw err; }
  });
  
  let numberOfCategoriesSelected = getRandomInt(1, 51);
  for (var k = 0; k < numberOfCategoriesSelected; k++) {
    let categoryCopy = categories.slice(0);
    let rowCategory = categoryCopy.splice(getRandomInt(0, categoryCopy.length), 1)
    connection.query(`INSERT INTO cava.review_categories (review_id, category, selected) VALUES (${i}, '${rowCategory}', true)`);
  }
}

const getAllReviews = function() {
  console.log('response being sent from reviews endpoint');
  connection.query('SELECT * FROM cava.reviews', function(error, results, field) {
    if (error) {throw error;}
  });
};

getAllReviews();

module.exports = {
  getAllReviews
};