-- dummy data

insert into users

    (name, username, /*password*/ phone_number)

values

    ('holly hunter', 'hhunter', '323-555-5555'
),
    ('benjamin button', 'bbutton', '229-555-5555'
),
    ('john travolta', 'jtravolta', '999-555-5555'
),
    ('cindy crawford', 'ccrawford', '333-555-5555'
),
    ('leonard nimoy', 'lnimoy', '111-555-5555'
);

insert into locations

    (latitude, longitude)

values

    (33.83, -84.39 
),
    (33.86, -84.40 
),
    (33.85, -84.43 
),
    (33.80, -84.41 
),
    (33.81, -84.42
);

insert into reminders

    (reminder, is_public, location_id, user_id)

values

    ('buy the special burrito', true, 1, 1
),
    ('call my mom', false, 2, 2
),
    ('remind captain kirk of his awesomeness', true, 3, 3
),
    ('buy skin moisturizer', false, 4, 4
),
    ('check for a sale on earrings', true, 5, 5
);
