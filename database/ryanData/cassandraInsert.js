const cassandra = require('cassandra-driver');
const faker = require('faker');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'] });

const numberOfEntriesPerFile = 100000;
const numberOfRestaurants = 10000000;
const numberOfCategories = 10000000;
const numberOfUsers = 10000000;
const numberOfReviews = 10000000;
const maxRating = 5;
const minNoiseLevel = 1;
const maxNoiseLevel = 4;

const getRandomInteger = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

const insertIntoCassandra = () => {
  for (let i = 1; i < 1000000; i++) {
    const restaurant_id = i;
    const numberOfWords = getRandomInteger(1, 4);
    const restaurant_name = faker.lorem.words(numberOfWords);
    const review_id = getRandomInteger(1, numberOfReviews);
    const username = faker.internet.userName();
    const overall_rating = getRandomInteger(0, maxRating);
    const food_rating = getRandomInteger(0, maxRating);
    const service_rating = getRandomInteger(0, maxRating);
    const value_rating = getRandomInteger(0, maxRating);
    const noise_level = getRandomInteger(minNoiseLevel, maxNoiseLevel);
    const body = faker.lorem.sentences();
    const recommended = getRandomInteger(0, 1);
    const date = JSON.stringify(faker.date.past(5));

    const query = 'INSERT INTO able_table.restaurants (restaurant_id,restaurant_name, review) VALUES (?,?,?)';
    const params = [restaurant_id, restaurant_name, [{
      review_id: review_id, restaurant_name: restaurant_name, username: username, overall_rating: overall_rating, food_rating: food_rating, service_rating: service_rating, value_rating: value_rating, noise_level:noise_level, body: body, recommended: recommended, date: date
    }]];
    client.execute(query, params, { prepare: true }, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log('inserted');
    });
  }
};

insertIntoCassandra();
