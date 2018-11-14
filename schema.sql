
-- USERs
-- name
-- username
-- password
-- phone #s
-- avatar (maybe?)

create table users
(
    id serial primary key,
    name text,
    password text,
    username varchar(200) unique not null,
    phone_number varchar(20) unique not null,
);

-- REMINDERS
-- user_id
-- reminder
-- public/priv

create table reminders
(
    id serial primary key,
    reminder text,
    is_public boolean,
    user_id integer references users (id) on delete cascade,
    location_id integer references locations (id) on delete cascade
);

-- LOCATIONS
-- latitude
-- longitude

create table locations
(
    id serial primary key,
    latitude integer,
    longitude integer,
);