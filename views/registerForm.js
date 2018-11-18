function registerForm() {
    return `
        <form class='registerContainer' action="/register" method="POST">
            <div>
                <label>Name</label> 
                <div class='form-row'>
                    <input  type="text" name="name">
                </div>
            </div>
            <div>
                <label>Username</label>
                <div class='form-row'>
                    <input  type="text" name="username">
                </div>
            </div>
            <div>
                <label>Password</label>
                <div class='form-row'>
                    <input  type="text" name="password">
                </div>
            </div>
            <div>
                <label>Phone Number</label>
                <div class='form-row'>
                    <input  type="text" name="phone_number">
                </div>
            </div>
            <div class='login'><br>
                <button>Create your GeoMindr account</button>
            </div>
            <div class='member'>
            <p class='accnt'>Already have an account?</p>
                <a class='accnt' href="/login"><p>Sign In</p></a>
            </div>
        </form>
    `;
}

module.exports = registerForm;
