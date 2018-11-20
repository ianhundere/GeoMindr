function header() {
    return `
        <header class='mainNav'>
            <div class='nav'>
                <div class='navTitle'>
                    <div class='title'>
                        <h1>GeoMindr</h1>
                    </div>
                </div>
                <div class='navRight'>
                    <div class="topNav">
                        <a class="active" href="/mylist">List of GeoMindrs</a>
                        <a href="/home">GeoMindr Menu</a>
                        <a class='signout' href="#">Sign out</a>
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
