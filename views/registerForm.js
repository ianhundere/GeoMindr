function registerForm() {
    return `
        <form class='registerContainer' action="/register" method="POST">
            <div>
                <label>Name
                <div class='form-row'>
                    <input  type="text" name="name">
                </div>
                </label> 
            </div>
            <div>
                <label>Username
                <div class='form-row'>
                    <input  type="text" name="username">
                </div>
                </label>
            </div>
            <div>
                <label>Password
                <div class='form-row'>
                    <input  type="text" name="password">
                </div>
                </label>
            </div>
            <div>
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
                <button><a class='accnt' href="/login"><p>Sign In</p></a></button>
            </div>
        </form>
    `;
}

module.exports = registerForm;
