function levelChanged(battery) {
    document.getElementById('batteryData').innerText = JSON.stringify({
        charging: battery.charging,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
        level: battery.level
    }, null, 4);

    if (battery.charging || battery.level > 0.5) {
        document.getElementById('batteryNormal').style.display = 'block';
        document.getElementById('batteryLow').style.display = 'none';
    }
    else {
        document.getElementById('batteryNormal').style.display = 'none';
        document.getElementById('batteryLow').style.display = 'block';
    }
}

if (navigator.getBattery !== undefined) {
    document.getElementById('batteryData').style.display = 'block';

    navigator.getBattery().then(function (battery) {
        console.log(battery);
        levelChanged(battery);

        battery.addEventListener('levelchange', function (battery) {
            console.log(battery);
            levelChanged(battery);        
        })
        
        battery.addEventListener('chargingchange', function (battery) {
            console.log(battery);
            levelChanged(battery);        
        });
    });
} else {
    document.getElementById('batteryApiNotSupported').style.display = 'block';
}