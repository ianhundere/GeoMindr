function registerForm() {
    return `
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
    `;
}

module.exports = registerForm;
