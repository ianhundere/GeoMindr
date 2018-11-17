function registerForm() {
    return `
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
                <label>Phone Number</label>
                <div class='form-row'>
                    <input  type="text" name="phone_number">
                </div>
            </div>
            <div class='login'>
                <button>Create your GeoMindr account</button>
            </div>
            <div class='member'>
                <a class='accnt' href="#"><p>Already have an account? SignIn</p></a>
            </div>
        </form>
    `;
}

module.exports = registerForm;
