function currClock() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();


    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    let timeOfDay = currentHours < 12 ? "AM" : "PM";


    currentHours = currentHours > 12 ? currentHours - 12 : currentHours;
    currentHours = currentHours == 0 ? 12 : currentHours;
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

window.onload = currClock, setInterval(currClock, 1000);
