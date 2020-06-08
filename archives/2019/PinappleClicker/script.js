//Put your JavaScript here!


var pineapplerate = 0;
var something = 27;
var pineappleclicks = 0;
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var pineappleid = document.getElementById("pineappleid");
var pineapple = document.getElementById("pineapple");
var JEFF = document.getElementById("JEFF");
var pineapplename = document.getElementById("pineapplename");
var steve = document.getElementById("steve");
var pineapplenews = document.getElementById("pineapplenews");

pineapple.onclick = () => {
    pineappleclicks += 1;
    pineappleid.innerText = "you have " + pineappleclicks + " pineapples";
};

button1.onclick = () => {
    if (pineappleclicks > 69) {
        pineappleclicks = pineappleclicks - 70;
        pineapplerate += 1;
    }
    debugger;
}
setInterval(() => {
    pineappleclicks += pineapplerate;
    pineappleid.innerText = "you have " + pineappleclicks + " pineapples";

    if (pineappleclicks > 545){
            pineapplenews.innertext= "THE UNIVERSE IS SOMEHOW ON FIRE AND ONLY PINEAPPLES SURVIVE";
    }
   else if (pineappleclicks > 340) {
        pineapplenews.innerText = "THE WORLD JUST EXPLODED!!!";
    }
    else if (pineappleclicks > 191) {
        pineapplenews.innerText = "EVERYTHING IS ON FIRE!!!";
    }
    else if (pineappleclicks > 139) {
        pineapplenews.innerText = "PINEAPPLES HAVE NOW TAKEN OVER THE WORLD";
    }
    else if (pineappleclicks > 71) {
        pineapplenews.innerText = "pineapples have now overthrown the government";
    }
    else if (pineappleclicks > 19) {
        pineapplenews.innerText = "over 45 pineapples start running for presidant";
    }




}, 1000);

button2.onclick = () => {

    if (pineappleclicks > 169) {
        pineappleclicks = pineappleclicks - 170;
        pineapplerate += 5;
    }
}

button3.onclick = () => {
    if (pineappleclicks > 1699){
        pineappleclicks = pineappleclicks - 1700;
        pineapplerate += 50; 
    }
    
}

//the if statement alows something to run depending on what happens.
if (pineappleclicks > -1) {
   

}
pineapple.onmouseover = () => {
    pineapplename.style.visibility = "visible";
}

pineapple.onmouseleave = () => {
    pineapplename.style.visibility = "hidden";
}

