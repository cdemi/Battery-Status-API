function levelChanged(newLevel, isCharging) {
    if (isCharging || newLevel > 0.5) {
        document.getElementById('batteryNormal').style.display = 'block';
        document.getElementById('batteryLow').style.display = 'none';
    }
    else {
        document.getElementById('batteryNormal').style.display = 'none';
        document.getElementById('batteryLow').style.display = 'block';
    }
}

if (navigator.getBattery !== undefined) {
    navigator.getBattery().then(function (battery) {
        console.log(battery);

        levelChanged(battery.level, battery.charging);
        battery.addEventListener('levelchange', function () {
            console.log(battery);
            levelChanged(battery.level, battery.charging);        
        });

        battery.addEventListener('chargingchange', function () {
            console.log(battery);
            levelChanged(battery.level, battery.charging);        
        });
    });
} else {
    document.getElementById('batteryApiNotSupported').style.display = 'block';
}