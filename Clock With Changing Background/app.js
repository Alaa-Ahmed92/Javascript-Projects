function currClock() {
    // To get current Date
    let currentTime = new Date();
    // To get current Hours
    let currentHours = currentTime.getHours();
    // To get current Minutes
    let currentMinutes = currentTime.getMinutes();
    // To get current Seconds
    let currentSeconds = currentTime.getSeconds();

    // Convert minutes from 1 number to be 2 number if less than 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    // Convert seconds from 1 number to be 2 number if less than 10
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // To know which current time is morning or evening
    let timeOfDay = currentHours < 12 ? "AM" : "PM";

    // To change time for 12-format
    currentHours = currentHours > 12 ? currentHours - 12 : currentHours;
    // To change mid night 00 to be 12
    currentHours = currentHours == 0 ? 12 : currentHours;
    // Add 0 before hours if less than 10
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;

    if (currentHours < 12) {
        document.body.style.background = "url('night.jpg') no-repeat center center";
        document.body.style.backgroundSize = "cover";
    } else {
        document.body.style.background = "url('morning.jpg') no-repeat center center";
        document.body.style.backgroundSize = "cover";
    }

    let formattedClock = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    document.getElementById("clock").textContent = formattedClock;
}

// setInterval to Update clock every Second
window.onload = currClock, setInterval(currClock, 1000);
