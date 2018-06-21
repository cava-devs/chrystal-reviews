const faker = require('faker');
const fs = require('fs');

const getRandomInteger = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

const generateNumberForAllEntries = (min, max, numberOfOutputEntries) => {
  const allValues = [];
  for (let i = 0; i < numberOfOutputEntries; i++) {
    allValues.push(getRandomInteger(min, max));
  }
  return allValues;
};

const generateUsernames = (numberOfOutputEntries) => {
  const usernames = [];
  for (let i = 0; i < numberOfOutputEntries; i += 1) {
    usernames.push(faker.internet.userName());
  }
  return usernames;
};

const generateReviewBodies = (numberOfOutputEntries) => {
  const reviewBodies = [];
  for (let i = 0; i < numberOfOutputEntries; i += 1) {
    const numberOfParagraphs = getRandomInteger(1, 3);
    reviewBodies.push(faker.lorem.paragraphs(numberOfParagraphs));
  }
  return reviewBodies;
};

const generateRestaurantNames = (numberOfOutputEntries) => {
  const restaurantNames = [];
  for (let i = 0; i < numberOfOutputEntries; i += 1) {
    const numberOfWords = getRandomInteger(1, 4);
    restaurantNames.push(faker.lorem.words(numberOfWords));
  }
  return restaurantNames;
};

const generateReviewDates = (numberOfOutputEntries) => {
  const reviewDates = [];
  for (let i = 0; i < numberOfOutputEntries; i += 1) {
    reviewDates.push(faker.date.past(5));
  }
};

const saveDataToFile = (filename, data) => {
  fs.writeFile(`./${filename}`, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};

// DATA FOR REVIEWS
const overallRatingEntries = generateNumberForAllEntries(0, 5, 100);
saveDataToFile('overallRatingEntries.csv', overallRatingEntries);

const foodRatingEntries = generateNumberForAllEntries(0, 5, 100);
saveDataToFile('foodRatingEntries.csv', foodRatingEntries);

const serviceRatingEntries = generateNumberForAllEntries(0, 5, 100);
saveDataToFile('serviceRatingEntries.csv', serviceRatingEntries);

const valueRatingEntries = generateNumberForAllEntries(0, 5, 100);
saveDataToFile('valueRatingEntries.csv', valueRatingEntries);

const noiseLevel = generateNumberForAllEntries(1, 4, 100);
saveDataToFile('noiseLevel.csv', noiseLevel);

const recommendedEntries = generateNumberForAllEntries(0, 1, 100);
saveDataToFile('recommendedEntries.csv', recommendedEntries);

const reviewBodyEntries = generateReviewBodies(100);
saveDataToFile('reviewBodyEntries.csv', JSON.stringify(reviewBodyEntries));

const reviewDateEntries = generateReviewDates(100);
saveDataToFile('reviewDateEntries.csv', reviewDateEntries);


// DATA FOR USERS
const usernameEntries = generateUsernames(100);
saveDataToFile('usernameEntries.csv', usernameEntries);


// DATA FOR RESTAURANTS
const restaurantNameEntries = generateRestaurantNames(100);
saveDataToFile('restaurantNameEntries.csv', restaurantNameEntries);

// categories

