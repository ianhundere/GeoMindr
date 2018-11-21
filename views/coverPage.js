function coverPage() {
    return `

    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">
            <link rel="stylesheet" href="/index.css">
            <title>GeoMindr</title>
        </head>
        <body>
            <div class='main' id='home'>
                <h1>Welcome to GeoMindr</h1>
                <div class="member">
                   <a class="link" href="/register">
                       <input
                       type="submit"
                       value="Create your GeoMindr account"/>
                   </a>
                    <a class="link" href="/login">
                       <input
                       type="submit"
                       value="Sign In"/>
                   </a>
                </div>
            </div>    
        </body>
        </html>
        
    `;
}

module.exports = coverPage;