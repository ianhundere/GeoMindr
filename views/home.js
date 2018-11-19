function home() {
    return `
        <div class='main'>
            <div class='nav'>
                <div class='logoTitle'>
                    <div class='title'>
                        <h1>Geo Mindr</h1>
                    </div>
                </div>
                <div class='navRight'>
                    <!-- <div class='signout'> -->
                        <a class='signout' href="/home">Sign out</a>
                    <!-- </div> -->
                </div>
            </div>
            <div class='mainContainer'>
                <div class="mainBody">
                    <section class='body'>
                        <div class=body-row>
                            <a class='icons' href="#"><h2><i class="fas fa-plus"></i> Add Reminder</h2></a>
                        </div>
                        <div class=body-row>
                            <a class='icons' href="#"><h2><i class="fas fa-folder-open"></i> Open Reminders</h2></a>
                        </div>
                        <div class=body-row>
                            <a class='icons' href="#"><h2><i class="fas fa-map-marked-alt"></i> Map</h2></a>
                        </div>
                    </section>
                </div>      
            </div>      
        </div>      
    `;
}

module.exports = home;
