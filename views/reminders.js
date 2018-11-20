function reminders() {
    return `
        <div class='remindMain'>
            <div class='remindNav'>
                <div class='remindContainer'>
                    <div class='remindTitle'>
                        <h1>My Reminders</h1>
                    </div>
                </div>
                <div class='navHome'>
                    <a href="home"><i class="fas fa-home"></i></a>
                </div>
            </div>
            <div class='columnContainer'>
                <div class='columnL'>
                    <div class='tabContainer'>
                        <div></div>
                        <!-- Will have to see how to populate these 
                            tabs for reminders. Or perhaps set a container
                            and have the tabs set as bullet points. -->
                    </div>
                </div>
                <div class='columnR'>
                    <div class='mapContainer'>
                        <div class='map'>MAP</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

module.exports = reminders;