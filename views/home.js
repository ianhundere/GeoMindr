function home() {
    return `
            <div class='mainContainer'>
            <div class="mainBody">
                <section class='body'>
                    <div class=body-row>
                        <a href="/create"><h2><i class="fas fa-plus"></i> Add GeoMindr</h2></a>
                    </div>
                    <div class=body-row>
                        <a href="/mylist"><h2><i class="fas fa-folder-open"></i> My GeoMindrs</h2></a>
                    </div>
                    <div class=body-row>
                        <a href="publiclist"><h2><i class="fas fa-map-marked-alt"></i> All GeoMindrs</h2></a>
                    </div>
                </section>
            </div>
        </div>
    `;
}
module.exports = home;
