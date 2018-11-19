function registerForm() {
    return `
        <div class="registerMain">
            <div class="registerContainer">
                <div class="regTitle"><h2>Geo Mindr</h2></div>
                <div class="regForm">
                    <div class="formTitle"><h1>Create account</h1></div>
                    <form class='form' action="/register" method="POST">
                        <div class=placeholder>
                            <label>Name</label> 
                            <div class='form-row'>
                                <input  type="text" name="name">
                            </div>
                        </div>
                        <div class=placeholder>
                            <label>Username</label>
                            <div class='form-row'>
                                <input  type="text" name="username">
                            </div>
                        </div>
                        <div class=placeholder>
                            <label>Password</label>
                            <div class='form-row'>
                                <input  type="text" name="password">
                            </div>
                        </div>
                        <div class=placeholder>
                            <label>Phone Number</label>
                            <div class='form-row'>
                                <input  type="text" name="phone_number">
                            </div>
                        </div>
                        <div class='login'>
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
