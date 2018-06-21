const faker = require('faker');
const fs = require('fs');

const numberOfOutputsPerFile = 1000000;

const getRandomInteger = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

const generateUsernames = (numberOfOutputEntries) => {
  let usernames = '';
  for (let i = 0; i < numberOfOutputEntries; i += 1) {
    if (i === 0) {
      usernames += faker.internet.userName();
    } else {
      usernames += (`\n${faker.internet.userName()}`);
    }
  }
  return usernames;
};

const generateRestaurantNames = (numberOfOutputEntries) => {
  let restaurantNames = '';
  for (let i = 0; i < numberOfOutputEntries; i += 1) {
    const numberOfWords = getRandomInteger(1, 4);
    if (i === 0) {
      restaurantNames += faker.lorem.words(numberOfWords);
    } else {
      restaurantNames += (`\n${faker.lorem.words(numberOfWords)}`);
    }
  }
  return restaurantNames;
};

// const generateNumberForAllEntries = (min, max, numberOfOutputEntries) => {
//   const allValues = [];
//   for (let i = 0; i < numberOfOutputEntries; i++) {
//     allValues.push(getRandomInteger(min, max));
//   }
//   return allValues;
// };

// const generateReviewBodies = (numberOfOutputEntries) => {
//   const reviewBodies = [];
//   for (let i = 0; i < numberOfOutputEntries; i += 1) {
//     const numberOfParagraphs = getRandomInteger(1, 3);
//     reviewBodies.push(faker.lorem.paragraphs(numberOfParagraphs));
//   }
//   return reviewBodies;
// };

// const generateReviewDates = (yearsOld, numberOfOutputEntries) => {
//   const reviewDates = [];
//   for (let i = 0; i < numberOfOutputEntries; i += 1) {
//     reviewDates.push(faker.date.past(yearsOld));
//   }
//   return reviewDates;
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
    if (i === 0) {
      categoryNames += categoriesList[randomIndex];
    } else {
      categoryNames += (`\n${categoriesList[randomIndex]}`);
    }
  }
  return categoryNames;
};

const saveDataToFile = (filename, generateDataFunc, numberInEachFile) => {
  for (let i = 0; i < 10; i += 1) {
    const data = generateDataFunc(numberInEachFile);
    fs.writeFile(`./${filename}_${i}.txt`, data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }
};

// DATA FOR REVIEWS
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
// saveDataToFile('./dataFiles/usernameEntries', generateUsernames, numberOfOutputsPerFile);
// console.timeEnd('10M-usernames split into 10 files');

// DATA FOR RESTAURANTS
// console.time('10M-restaurantNames split into 10 files');
// saveDataToFile('./dataFiles/restaurantNameEntries', generateRestaurantNames, numberOfOutputsPerFile);
// console.timeEnd('10M-restaurantNames split into 10 files');

// DATA FOR CATEGORIES
// console.time('10M-categoryNames split into 10 files');
// saveDataToFile('./dataFiles/categoryNameEntries', generateCategoryNames, numberOfOutputsPerFile);
// console.timeEnd('10M-categoryNames split into 10 files');
