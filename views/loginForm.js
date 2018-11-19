function loginForm() {
    return `
        <div class='loginMain'>
            <div class='loginContainer'>
                <div class='logTitle'>
                    <h2>Geo Mindr</h2>
                </div>
                <div class='logForm'>
                    <div class=formTitle>
                        <h1>Sign in</h1>
                    </div>
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
                            <a class='accnt' href="/register"><p>Create an account</p></a>
                        </div>
                    </form>  
                </div>
            </div>
        </div>     
    `;
}

module.exports = loginForm;
