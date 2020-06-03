var airPollution = 0;
var waterPollution = 0;
var money = 500;
var protest = 0;
//^^^ VARIABLES----------------------
var moneyPerTenSec = 0;
var airPollutionPerTenSec = 0;
var waterPollutionPerTenSec = 0;
var protestorsPerTenSec = 0;
//^^^ PER 10 SEC VARIABLES-----------
var plantTree = document.getElementById("plantTree");
var chopTree = document.getElementById("chopTree");
var raiseCows = document.getElementById("raiseCows");
var windPower = document.getElementById("windPower");
var plasticFactory = document.getElementById("plasticFactory");
var recyclingCompany = document.getElementById("recyclingCompany");
//////////////////////////////////////////////////////////
var moneyElement = document.getElementById("money");
var airPollutionElement = document.getElementById("airPollution");
var waterPollutionElement = document.getElementById("waterPollution");
var protestElement = document.getElementById("protesters");

// ^^^ BUTTONS-----------------------

plantTree.onclick=()=> { //On click, money goes up
    money -= 20; // money = money - 20
    airPollution -= 1;
}

chopTree.onclick=()=> { 
    money += 15;
    airPollution +=1;
}

raiseCows.onclick=()=> {
    money += 10;
    airPollution += 2;
}

windPower.onclick=()=> {
    money -= 200;
    protest += 1;
    airPollution -= 5;

    moneyPerTenSec += 20;
    airPollutionPerTenSec -= 5;
}

recyclingCompany.onclick=()=> {
    money += 200;
    waterPollution -= 2;
}
    //Element.innerHTML (Syd do this)

// setInterval(() => { //After 10 seconds, it will go up or down
//     moneyPerTenSec /= 10;
//     airPollutionPerTenSec /= 10;
//     waterPollutionPerTenSec /= 10;
// }, 10000);


// plasticFactory.onclick=()=> {
//     money
// }

document.onclick=()=> {
moneyElement.innerText = "Money: " + money;
airPollutionElement.innerText = "Air Pollution: " + airPollution;
waterPollutionElement.innerText = "Water Pollution: " + waterPollution;
protestElement.innerText = "Protesters: " + protest;
}