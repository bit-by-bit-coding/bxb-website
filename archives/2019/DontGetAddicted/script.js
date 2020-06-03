var rainbowrate = 0;
var donutCounter = document.getElementById("donutcounter");
var nyanButton = document.getElementById("nyan");
var NumberOfClicks = 0;
var rainbowFuel = document.getElementById("rainbowFuel");
var rainbowfuellvl = 0;
var rainbowfuelelement = document.getElementById("rainbowfuellvl");
var addheadphones = document.getElementById("addheadphones");
var headphonelvl = 0;

var headphoneelement = document.getElementById("headphonelvl");
var lifebeforeeyes = document.getElementById("lifebeforeeyes");
var lifelvl = 0;
var lifeelement = document.getElementById("lifelvl");


//This is for the rainbow fuel button
rainbowFuel.onclick = () => {
    if (NumberOfClicks < 50) {
        alert("You don't have enough annoyance in your life");
    } else {
        NumberOfClicks = NumberOfClicks - 50;
        rainbowrate = rainbowrate + 1;
        rainbowfuellvl = rainbowfuellvl + 1;
        rainbowfuelelement.innerText = rainbowfuellvl;
    }
}
//this line is for the writing that says number of donuts produced
nyanButton.onclick = () => {
    NumberOfClicks = NumberOfClicks + 1;
    donutCounter.innerText = NumberOfClicks;
}
//this is the increasing amount of annoyance from rainbows
setInterval(() => {
    NumberOfClicks += rainbowrate;
    donutCounter.innerText = NumberOfClicks;
}, 1000);
addheadphones.onclick = () => {
    if (NumberOfClicks < 500) {
        alert("You don't have enough annoyance in your life");
    } else {
        NumberOfClicks = NumberOfClicks - 500;
        rainbowrate = rainbowrate + 10;
        headphones.style.visibility = "visible";
        headphonelvl = headphonelvl + 1;
        headphoneelement.innerText = headphonelvl;

    }
}
lifebeforeeyes.onclick = () => {
    if (NumberOfClicks < 10) {
        alert("You don't have enough annoyance in your life");
    } else {
        NumberOfClicks = NumberOfClicks - 10;
        rainbowrate = rainbowrate + 1000;
        lifelvl = lifelvl + 1;

        lifeelement.innerText = lifelvl;

    }
}
