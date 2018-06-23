\connect reviewsdatabase;

-- \copy restaurants(restaurant_name) FROM './dataFiles/restaurantNameEntries.csv' CSV;

-- \copy users(username) FROM './dataFiles/usernameEntries.csv' CSV;

-- \copy categories(category_name) FROM './dataFiles/categoryNameEntries.csv' CSV;


\copy reviews(restaurant_id,username_id,overall_rating,food_rating,service_rating,value_rating,noise_level,body,recommended,date) FROM './dataFiles/reviewsEntries.csv' DELIMITER '|' CSV;

