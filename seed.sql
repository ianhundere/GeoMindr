insert into users

    (name, username, password, phone_number)

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
)

insert into reminders

    (user_id, reminder, is_public, location_id)

values

    (2, 'buy the special burrito', true, 2
),
    (4, 'call my mom', false, 4
),
    (5, 'remind captain kirk of his awesomeness', true, 5
),
    (2, 'buy skin moisturizer', false, 2
),
    (4, 'check for a sale on earrings', true, 4
)


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
)