DROP DATABASE IF EXISTS reviewsdatabase;

CREATE DATABASE reviewsdatabase;

\c reviewsdatabase;

CREATE TABLE restaurants (
    id integer PRIMARY KEY,
    restaurant_name character varying(55) NOT NULL
);

CREATE TABLE reviews (
    id integer PRIMARY KEY,
    restaurant_id integer NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE ON UPDATE CASCADE,
    username_id integer NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    overall_rating integer NOT NULL,
    food_rating integer NOT NULL,
    service_rating integer NOT NULL,
    value_rating integer NOT NULL,
    noise_level integer NOT NULL,
    body character varying(255) NOT NULL,
    recommended integer NOT NULL
);

CREATE TABLE users (
    id integer PRIMARY KEY,
    username character varying(55) NOT NULL
);
