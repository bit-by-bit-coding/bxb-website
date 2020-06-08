var numberOfBunnies = 0;
var bunnyelem = document.getElementById("bunny");
var NumberOfBunniesElem = document.getElementById("NumberOfBunniesElem");
var bunnyRate = 0;
var expen = document.getElementById("Expen");
var numberOfExpens = 0;
var numberOfExpensElem = document.getElementById("NumberOfExpensElem");
var PetRoom =document.getElementById("PetRoom");
var numberOfPetRooms =0;
var NumberOfPetRoomsElem = document.getElementById("NumberOfPetRoomsElem");
var newspaper = document.getElementById("news");
var BunnyHotel = document.getElementById("BunnyHotel");
var NumberOfBunnyHotels = 0;
var NumberOfBunnyHotelsElem = document.getElementById("NumberOfBunnyHotelsElem");
var RabbitRanch = document.getElementById("RabbitRanch");
var NumberOfRabbitRanches = 0;
var NumberOfRabbitRanchesElem = document.getElementById("NumberOfRabbitRanchesElem");
//When the bunny is clicked, the number of bunnies goes up by 1

bunny.onclick = () => {
    numberOfBunnies = numberOfBunnies + 1;
   
};
expen.onclick = () => {
    if (numberOfBunnies >= 20) {
        numberOfBunnies -= 20;
        numberOfExpens++;
        numberOfExpensElem.innerText = numberOfExpens;
      bunnyRate += 1;
    }
    else {
        alert("You haven't adopted out enough bunnies");
    }
};
setInterval(
    () => {
        numberOfBunnies += bunnyRate / 100;
        NumberOfBunniesElem.innerText = Math.floor(numberOfBunnies);
if (numberOfBunnies < 50) {
    newspaper.innerText="The world has been overrun with homeless rabbits!";
}
else if (numberOfBunnies <= 100) {
    newspaper.innerText="New type of carrot discovered!";
}
else if (numberOfBunnies <= 200) {
    newspaper.innerText="Rabbit spa opens down on Binky Lane";
}
else if (numberOfBunnies <= 400) {
    newspaper.innerText="50% off all veggies at the local farmer's market!";
}
else if (numberOfBunnies <= 800) {
    newspaper.innerText="Bunny palooza September 1st!";
}
else {
    newspaper.innerText="Homeless rabbits at an all-time low!";
}
     },
    100,

);
PetRoom.onclick = () => {
    if (numberOfBunnies >= 50) {
        numberOfBunnies -= 50;
        numberOfPetRooms++;
        NumberOfPetRoomsElem.innerText = numberOfPetRooms;
        bunnyRate += 10;
    }
    else {
        alert("You haven't adopted out enough bunnies");
    }

};
BunnyHotel.onclick = () => {
    if (numberOfBunnies >= 100) {
        numberOfBunnies -= 100;
        NumberOfBunnyHotels++;
        NumberOfBunnyHotelsElem.innerText = NumberOfBunnyHotels;
        bunnyRate += 20;
    }
    else {
        alert("You haven't adopted out enough bunnies");
    }
};
RabbitRanch.onclick = () => {
    if (numberOfBunnies >= 500) {
        numberOfBunnies -= 500;
        NumberOfRabbitRanches++;
        NumberOfRabbitRanchesElem.innerText = NumberOfRabbitRanches;
        bunnyRate += 50;
    }
    else {
        alert("You haven't adopted out enough bunnies");
    }
};
