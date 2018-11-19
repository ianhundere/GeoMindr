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
                        <div class="login">
                            <button>Sign in<button/>
                        </div>
                        <div class="member">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
}
module.exports = loginForm;
