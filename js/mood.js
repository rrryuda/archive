// Create rain
function createRain() {
    var rainContainer = document.querySelector('.rain');
    rainContainer.innerHTML = '';
    var increment = 0;
    var drops = "";
    while (increment < 95) {
        var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
        var randoFiver = Math.floor(Math.random() * (4 - 2 + 1) + 2);
        increment += randoFiver;
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }
    rainContainer.innerHTML = drops;
}
createRain();