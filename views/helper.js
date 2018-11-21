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
                    <a class="active topNav" href="/mylist"><i class="fas fa-plus"></i></a>
                    <a class='topNav' href="/home"><i class="fas fa-folder-open"></i></a>
                    <a class='topNav' href="/home"><i class="fas fa-map-marked-alt"></i></a>
                    <a class='topNav' href="/logout">Log Out</a>
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



