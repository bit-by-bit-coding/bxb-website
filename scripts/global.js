$(".dropdown-container").click(e=>$(e.currentTarget).toggleClass("selected"));
$(".checking").click(function(){
    $("#about-container").toggleClass("checked");
});