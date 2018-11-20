function header() {
    return `
        <header class='mainNav'>
            <div class='nav'>
                <div class='navTitle'>
                    <div class='title'>
                        <h1>Geo Mindr</h1>
                    </div>
                </div>
                <div class='navRight'>
                    <div class='signout'>
                        <form action="/logout" method="POST">
                            <input class='signout' type="submit" value="Log Out">
                        </form>
                    </div>
                </div>
            </div>
        </header>
    `;
}

function footer() {
    return `
        <footer class='mainFooter'>
            <div>
                <p>&copy; 2018 GeoMindr</p>
            </div>
        </footer>
    `;
}

module.exports = {
    header,
    footer
};
