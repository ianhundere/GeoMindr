function loginForm() {
    return `
        <div class='loginMain'>
            <div class='loginContainer'>
                <div class='logForm'>
                    <div class=formTitle><h1>Sign in</h1></div>
                    <form class='loginContainer' action="/login" method="POST">
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
    `;
}
module.exports = loginForm;


