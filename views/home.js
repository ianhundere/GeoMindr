function home() {
    return `
            <div class='mainContainer'>
            <div class="mainBody">
                <section class='body'>
                    <div class=body-row>
                        <a href="/create"><h2><i class="fas fa-plus"></i> Add Reminder</h2></a>
                    </div>
                    <div class=body-row>
                        <a href="/list"><h2><i class="fas fa-folder-open"></i> Open Reminders</h2></a>
                    </div>
                    <div class=body-row>
                        <a href="publiclist"><h2><i class="fas fa-map-marked-alt"></i> Map</h2></a>
                    </div>
                </section>
            </div>
        </div>
    `;
}
module.exports = home;
