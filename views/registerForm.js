function registerForm() {
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
                <div class="registerMain">
                    <div class="registerContainer">                
                        <div class="regForm">
                            <div class="formTitle"><h1>Create account</h1></div>
                            <form class='registerContainer' action="/register" method="POST">
                                <div class='placeholder'>
                                    <label>Name
                                    <div class='form-row'>
                                        <input  type="text" name="name">
                                    </div>
                                    </label> 
                                </div>
                                <div class='placeholder'>
                                    <label>Username
                                    <div class='form-row'>
                                        <input  type="text" name="username">
                                    </div>
                                    </label>
                                </div>
                                <div class='placeholder'>
                                    <label>Password
                                    <div class='form-row'>
                                        <input  type="text" name="password">
                                    </div>
                                    </label>
                                </div>
                                <div class='placeholder'>
                                    <label>Phone Number
                                    <div class='form-row'>
                                        <input  type="text" name="phone_number">
                                    </div>
                                    </label>
                                </div>
                                <div class='login'><br>
                                    <button>Create your GeoMindr account</button>
                                </div>
                                <div class='member'>
                                    <p class='accnt'>Already have an account?</p>
                                    <a class='accnt' href="/login"><p>Sign In</p></a>
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

module.exports = registerForm;
