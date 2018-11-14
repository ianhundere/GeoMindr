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
    username varchar(200) unique not null,
    -- password text,
    phone_number varchar(20) unique not null
);

-- LOCATIONS
-- latitude
-- longitude

create table locations
(
    id serial primary key,
    latitude integer,
    longitude integer
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
    location_id integer references locations (id) on delete cascade,
    user_id integer references users (id) on delete cascade
);
