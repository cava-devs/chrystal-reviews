DROP DATABASE IF EXISTS cava;

CREATE DATABASE cava;

USE cava;

CREATE TABLE reviews (
  id int auto_increment,
  restaurant_id int,
  username varchar(50),
  date varchar(50),
  overall_rating int,
  food_rating int,
  service_rating int,
  ambiance_rating int,
  value_rating int,
  noise_level int,
  recommended boolean,
  body varchar (1000),
  PRIMARY KEY (id)
);

CREATE TABLE categories (
  id INT auto_increment,
  category varchar (50),
  PRIMARY KEY (id)
);

INSERT INTO categories (category) VALUES
  ('Special Occasion'),
  ('Business Meals'),
  ('Live Music'),
  ('Good for Groups'),
  ('Waterfront'),
  ('Scenic View'),
  ('Kid-friendly'),
  ('Afternoon Coffee'),
  ('Romantic'),
  ('Good for Anniversaries'),
  ('Casual'),
  ('Seasonal'),
  ('Great for Outdoor Dining'),
  ('Neighborhood Gem'),
  ('Late-night Find'),
  ('Handcrafted Cocktails'),
  ('Vegan'),
  ('Healthy'),
  ('Comfort Food'),
  ('Disabled Access'),
  ('Fun'),
  ('Happy Hour'),
  ('Bar Seating'),
  ('Tasting Menu'),
  ('Quiet Conversation'),
  ('Authentic'),
  ('Vibrant Bar Scene'),
  ('Fit for Foodies'),
  ('Worth the Drive'),
  ('Notable Wine List'),
  ('Quick Bite'),
  ('Organic'),
  ('Great for Lunch'),
  ('Afternoon Tea'),
  ('Good for Birthdays'),
  ('Hot Spot'),
  ('Great for Brunch'),
  ('Pre/post Theatre'),
  ('Cozy'),
  ('Gluten Free Options'),
  ('Live Sports'),
  ('People Watching'),
  ('Creative Cuisine'),
  ('Spicy'),
  ('Paleo Friendly'),
  ('Good for a Date'),
  ('Local Ingredients'),
  ('Good Vegetarian Options'),
  ('Tapas'),
  ('Sunday Lunch'),
  ('Great Beer')
  ;

CREATE TABLE review_categories (
  id INT auto_increment,
  review_id int,
  category varchar (50),
  selected boolean,
  PRIMARY KEY (id)
);