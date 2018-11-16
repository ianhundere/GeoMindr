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
                <label>Email</label>
                <div class='form-row'>
                    <input  type="text" name="email">
                </div>
            </div>
            <div class=placeholder>
                <label>Password</label>
                <div class='form-row'>
                    <input  type="password" name="password">
                </div>
            </div>
            <div class=placeholder>
                <label>Re-enter Password</label>
                <div class='form-row'>
                    <input  type="password" name="password">
                </div>
            </div>
            <div class='login'>
                <input type="submit" value="Create your GeoMindr account">
            </div>
            <div class='member'>
                <a class='accnt' href="#"><p>Already have an account? SignIn</p></a>
            </div>
        </form>
    `;
}


module.exports = registerForm;
