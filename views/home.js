function home() {
    return `
            <div class='mainContainer'>
                <div class='mainTitle'>
                    <div class='title'>
                        <h1>Geo Mindr</h1>
                    </div>
                </div>
            <div class="mainBody">
                <section class='body'>
                    <div class=body-row>
                        <a href="/createreminder"><h2><i class="fas fa-plus"></i> Add Reminder</h2></a>
                    </div>
                    <div class=body-row>
                        <a href="#"><h2><i class="fas fa-folder-open"></i> Open Reminders</h2></a>
                    </div>
                    <div class=body-row>
                        <a href="#"><h2><i class="fas fa-map-marked-alt"></i> Map</h2></a>
                    </div>
                </section>
            </div>
        </div>
    `;
}
module.exports = home;
