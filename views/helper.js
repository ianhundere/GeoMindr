function header() {
    return `
        <header class='mainNav'>
            <div class='nav'>
                <div class='navTitle'>
                    <div class='title'>
                        <a class='topNav' href="/home"><h1>GeoMindr</h1></a>
                    </div>
                </div>
                <div class='navRight'>
                    <a class="active topNav" href="/home"><i class="fas fa-home"></i></a>
                    <a class="active topNav" href="/create"><i class="fas fa-plus"></i></a>
                    <a class='topNav' href="/mylist"><i class="fas fa-folder-open"></i></a>
                    <a class='topNav' href="/publicList"><i class="fas fa-map-marked-alt"></i></a>
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



