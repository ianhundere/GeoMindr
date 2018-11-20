function loginForm() {
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
                <div class='loginMain'>
                    <div class='loginContainer'>
                        <div class='logForm'>
                            <div class=formTitle><h1>Sign in</h1></div>
                            <form class='loginContainer' action="/login" method="POST">
                                <div class=placeholder>
                                    <label>Username</label>
                                    <div class='form-row'>
                                        <input  type="text" name="username">
                                    </div>
                                </div>
                                <div class=placeholder>
                                    <label>Password</label>
                                    <div class='form-row'>
                                        <input  type="password" name="password">
                                    </div>
                                </div>
                                <div class='login'>
                                    <input type="submit" value="Sign in">
                                </div>
                                <div class='member'>
                                    <p class='accnt'>Don't have an account?</p>
                                    <a class='accnt' href="/register"><p>Sign up</p></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class='mainFooter'>
                    <div class='footer'>
                        <p>&copy; 2018 GeoMindr</p>
                    </div>
                </div>
            </div>    
        </body>
        </html>
    `;
}
module.exports = loginForm;


