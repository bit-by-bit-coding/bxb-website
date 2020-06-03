var dontpresstheheartbutton = document.getElementById("heart");
var theearthisexploding = document.getElementById("theearthisexploding");
var soundeffect = new Audio ("./theearthisexploding.mp3");
dontpresstheheartbutton.onclick = () => {
    theearthisexploding.style.opacity = 1;
    theearthisexploding.style.zIndex = 1000000;
    soundeffect.play();
    setTimeout(() => {
        theearthisexploding.style.zIndex = -1;
        theearthisexploding.style.opacity = 0;
    }, 2000);
}