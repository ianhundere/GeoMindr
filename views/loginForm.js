function loginForm() {
    return `
    <div class="loginMain">
            <div class="loginContainer">
                <div class="logForm">
                    <div class="formTitle"><h2>Sign in</h2></div>
                    <form class="form" action="/login" method="POST">
                            <div class=placeholder>
                                <div class='form-row'>
                                    <label>Username:
                                        <input type="text" name="username"> <br>
                                    </label>
                                </div>
                            </div>
                        <div class="placeholder">
                            <div class="form-row">
                                <label>Password
                                    <input type="password" name="password"/><br>
                                </label>
                            </div>
                        </div>
                            <button>Sign in<button/>
                    </form>
                </div>
                <div class='member'>
                    <p class='accnt'>Don't have an account?</p>
                    <a href="/register"><p>Sign up</p></a>
            </div>
            </div>
        </div>
    `;
}
module.exports = loginForm;
