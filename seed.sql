-- dummy data

insert into users

    (name, username, pwhash, phone_number)

values

    ('holly hunter', 'hhunter', 'G2LziGNPj043WGSPOizsPOZZeNDyA8h5aeKYcAqCq04OeanhC1TbG', '3235555555'
),
    ('benjamin button', 'bbutton', 'G2LziGNPj043WGSPOizsPOZZeNDyA8h5aeKYcAqCq04OeanhC1TbG', '2295555555'
),
    ('john travolta', 'jtravolta', 'G2LziGNPj043WGSPOizsPOZZeNDyA8h5aeKYcAqCq04OeanhC1TbG', '9995555555'
),
    ('cindy crawford', 'ccrawford', 'G2LziGNPj043WGSPOizsPOZZeNDyA8h5aeKYcAqCq04OeanhC1TbG', '3335555555'
),
    ('greg foreman', 'gfore', 'G2LziGNPj043WGSPOizsPOZZeNDyA8h5aeKYcAqCq04OeanhC1TbG', '6787085191'
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

insert into init_reminders

    (phone, lat, lon, time_stamp)

values

    (5555555555, 33.8485718, -84.3732238, 1542601998665
),
    (1234567890, 38.8485718, -100.3732238, 1542602198665
),
    (8374928749, 60.8485718, -60.3732238, 1542602298665
),
    (2839473629, 39.8485718, -30.3732238, 1542602950132
),
    (2839473629, 39.8485718, -30.3732238, 1542602960132)
;

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
