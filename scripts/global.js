const menu = {
    $dropdowns: $(".dropdown-container"),
    open: false,
    openMenu: (e) => {
        if(e.currentTarget === menu.open) return;
        e.stopPropagation()
        menu.closeMenu();
        menu.open = e.currentTarget;
        $(e.currentTarget).addClass("open");
    },
    closeMenu: () => {
        menu.open = false;
        menu.$dropdowns.removeClass("open");
    },
    setTriggers: () => {
        menu.$dropdowns.off();
        if($(window).width() <= 768){
            menu.$dropdowns.click(menu.openMenu);
        } else {
            menu.$dropdowns.hover(menu.openMenu, menu.closeMenu);
        }
    }
}

$(window).resize(menu.setTriggers);

$(document).click(menu.closeMenu);

$(".dropdown-container").on('click mouseenter', (e) => {
    e.stopPropagation();
})

menu.setTriggers();