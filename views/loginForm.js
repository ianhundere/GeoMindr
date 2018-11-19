function loginForm() {
    return `
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
                <a class='accnt' href="#"><p>Create an account</p></a>
            </div>
        </form>                
    `;
}

module.exports = loginForm;
