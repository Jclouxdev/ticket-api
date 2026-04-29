-- This file contains the starting schema for the database. Database is a PostgreSQL database.
CREATE TABLE event_type (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL);

CREATE TABLE event (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  ticket_price NUMERIC(10, 2) NOT NULL,
  available_enrolled_quantity INTEGER NOT NULL,
  creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  sale_start_at TIMESTAMP NOT NULL,
  sale_end_at TIMESTAMP NOT NULL,
  event_starting_date TIMESTAMP NOT NULL,
  event_ending_date TIMESTAMP NOT NULL,
  location VARCHAR(255) NOT NULL,
  event_status ENUM (
    'not confirmed',
    'ticket office open',
    'full',
    'canceled',
    'closed',
    'ongoing'
  ) NOT NULL,
  event_type_id INTEGER NOT NULL,
  FOREIGN KEY (event_type_id) REFERENCES event_type (id)
);

CREATE TABLE enrolled (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE ticket (
  id SERIAL PRIMARY KEY,
  event_id INTEGER NOT NULL,
  enrolled_id INTEGER NOT NULL,
  purchase_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (event_id) REFERENCES event (id),
  FOREIGN KEY (enrolled_id) REFERENCES enrolled (id)
);