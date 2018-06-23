const faker = require('faker');
const fs = require('fs');

const numberOfEntriesPerFile = 100000;
const numberOfRestaurants = 10000000;
const numberOfCategories = 10000000;
const numberOfUsers = 10000000;
const numberOfReviews = 10000000;
const maxRating = 5;
const minNoiseLevel = 1;
const maxNoiseLevel = 4;

const getRandomInteger = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

const generateUsernames = (numberOfOutputEntries) => {
  let usernames = '';
  for (var i = 0; i < numberOfOutputEntries; i += 1) {
    usernames += (`${faker.internet.userName()}\n`);
  }
  return usernames;
};

const generateRestaurantNames = (numberOfOutputEntries) => {
  let restaurantNames = '';
  for (let i = 0; i < numberOfOutputEntries; i += 1) {
    const numberOfWords = getRandomInteger(1, 4);
    restaurantNames += (`${faker.lorem.words(numberOfWords)}\n`);
  }
  return restaurantNames;
};

const generateReviewBody = () => {
  return faker.lorem.sentences();
};

const generateReviewDates = (yearsOld) => {
  return faker.date.past(yearsOld);
};

const generateReviews = (numberOfOutputEntries) => {
  let reviewData = '';
  for (let i = 0; i < numberOfOutputEntries; i += 1) {
    reviewData += (`${getRandomInteger(1, numberOfRestaurants)}|${getRandomInteger(1, numberOfUsers)}|${getRandomInteger(0, maxRating)}|${getRandomInteger(0, maxRating)}|${getRandomInteger(0, maxRating)}|${getRandomInteger(0, maxRating)}|${getRandomInteger(minNoiseLevel, maxNoiseLevel)}|${generateReviewBody()}|${getRandomInteger(0, 1)}|${generateReviewDates(5)}\n`);
  }
  return reviewData;
};

// const generateNumberForAllEntries = (min, max, numberOfOutputEntries) => {
//   const allValues = [];
//   for (let i = 0; i < numberOfOutputEntries; i++) {
//     allValues.push(getRandomInteger(min, max));
//   }
//   return allValues;
// };

const generateCategoryNames = (numberOfOutputEntries) => {
  const categoriesList = [
    'Special Occasion',
    'Business Meals',
    'Live Music',
    'Good for Groups',
    'Waterfront',
    'Scenic View',
    'Kid-friendly',
    'Afternoon Coffee',
    'Romantic',
    'Good for Anniversaries',
    'Casual',
    'Seasonal',
    'Great for Outdoor Dining',
    'Neighborhood Gem',
    'Late-night Find',
    'Handcrafted Cocktails',
    'Vegan',
    'Healthy',
    'Comfort Food',
    'Disabled Access',
    'Fun',
    'Happy Hour',
    'Bar Seating',
    'Tasting Menu',
    'Quiet Conversation',
    'Authentic',
    'Vibrant Bar Scene',
    'Fit for Foodies',
    'Worth the Drive',
    'Notable Wine List',
    'Quick Bite',
    'Organic',
    'Great for Lunch',
    'Afternoon Tea',
    'Good for Birthdays',
    'Hot Spot',
    'Great for Brunch',
    'Pre/post Theatre',
    'Cozy',
    'Gluten Free Options',
    'Live Sports',
    'People Watching',
    'Creative Cuisine',
    'Spicy',
    'Paleo Friendly',
    'Good for a Date',
    'Local Ingredients',
    'Good Vegetarian Options',
    'Tapas',
    'Sunday Lunch',
    'Great Beer',
  ];
  let categoryNames = '';
  for (let i = 0; i < numberOfOutputEntries; i += 1) {
    const randomIndex = getRandomInteger(0, categoriesList.length);
    categoryNames += (`${categoriesList[randomIndex]}\n`);
  }
  return categoryNames;
};

// const saveDataToFile = (filename, generateDataFunc, totalNumberOfEntries, entriesPerFile) => {
//   for (var i = 0; i < (totalNumberOfEntries / entriesPerFile); i += 1) {
//     const data = generateDataFunc(entriesPerFile);
//     fs.appendFileSync(`./${filename}.csv`, data, (err) => {
//       if (err) throw err;
//       console.log('The file has been saved!');
//     });
//   }
//   console.log(i)
// };

const saveDataToFile = (filename, generateDataFunc, totalNumberOfEntries, entriesPerFile) => {
  const writeStream = fs.createWriteStream(`./${filename}.csv`);
  for (let i = 0; i < (totalNumberOfEntries / entriesPerFile); i += 1) {
    const data = generateDataFunc(entriesPerFile);
    writeStream.write(data);
  }
  writeStream.on('finish', () => {
    console.log('wrote all data to file');
  });
  writeStream.end();
};

// DATA FOR REVIEWS
console.time('10M-reviewEntries split into 10 files');
saveDataToFile('./dataFiles/reviewsEntries', generateReviews, numberOfReviews, numberOfEntriesPerFile);
console.timeEnd('10M-reviewEntries split into 10 files');

// const overallRatingEntries = generateNumberForAllEntries(0, 5, numberOfOutputs);
// saveDataToFile('./dataFiles/overallRatingEntries.csv', overallRatingEntries);

// const foodRatingEntries = generateNumberForAllEntries(0, 5, numberOfOutputs);
// saveDataToFile('./dataFiles/foodRatingEntries.csv', foodRatingEntries);

// const serviceRatingEntries = generateNumberForAllEntries(0, 5, numberOfOutputs);
// saveDataToFile('./dataFiles/serviceRatingEntries.csv', serviceRatingEntries);

// const valueRatingEntries = generateNumberForAllEntries(0, 5, numberOfOutputs);
// saveDataToFile('./dataFiles/valueRatingEntries.csv', valueRatingEntries);

// const noiseLevel = generateNumberForAllEntries(1, 4, numberOfOutputs);
// saveDataToFile('./dataFiles/noiseLevel.csv', noiseLevel);

// const recommendedEntries = generateNumberForAllEntries(0, 1, numberOfOutputs);
// saveDataToFile('./dataFiles/recommendedEntries.csv', recommendedEntries);

// const reviewBodyEntries = generateReviewBodies(numberOfOutputs);
// saveDataToFile('./dataFiles/reviewBodyEntries.csv', JSON.stringify(reviewBodyEntries));

// const reviewDateEntries = generateReviewDates(5, numberOfOutputs);
// saveDataToFile('./dataFiles/reviewDateEntries.csv', reviewDateEntries);


// DATA FOR USERS
// console.time('10M-usernames split into 10 files');
// saveDataToFile('./dataFiles/usernameEntries', generateUsernames, numberOfUsers, numberOfEntriesPerFile);
// console.timeEnd('10M-usernames split into 10 files');

// DATA FOR RESTAURANTS
// console.time('10M-restaurantNames split into 10 files');
// saveDataToFile('./dataFiles/restaurantNameEntries', generateRestaurantNames, numberOfRestaurants, numberOfEntriesPerFile);
// console.timeEnd('10M-restaurantNames split into 10 files');

// DATA FOR CATEGORIES
// console.time('10M-categoryNames split into 10 files');
// saveDataToFile('./dataFiles/categoryNameEntries', generateCategoryNames, numberOfCategories, numberOfEntriesPerFile);
// console.timeEnd('10M-categoryNames split into 10 files');
