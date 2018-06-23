DROP KEYSPACE IF EXISTS able_table;

CREATE KEYSPACE able_table WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE able_table;

CREATE TYPE reviewtype (
  review_id int,
  restaurant_name text,
  username text,
  overall_rating int,
  food_rating int,
  service_rating int,
  value_rating int,
  noise_level int,
  body text,
  recommended int,
  date text,
);

CREATE TABLE IF NOT EXISTS restaurants(
  restaurant_id int PRIMARY KEY,
  restaurant_name text,
  review list <frozen<reviewtype>>
);