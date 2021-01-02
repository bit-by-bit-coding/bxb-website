const menu = {
    $dropdowns: $(".dropdown-container"),
    $subdropdowns: $(".subdropdown-container"),
    open: false,
    openMenu: (e) => {
        //console.log($(e.target).hasClass("navbutton"));
        if (e.currentTarget === menu.open) return;
        e.stopPropagation()
        menu.closeMenu();
        
        menu.open = e.currentTarget;
        $(e.currentTarget).addClass("open");
    },
    openSubmenu: (e) => {
        if (e.currentTarget === menu.open) return;
        menu.closeMenu();
        menu.closeSubmenu();
        menu.open = e.currentTarget;
        $(e.currentTarget).addClass("open");
        $(e.currentTarget).addClass("open2");
    },
    closeMenu: () => {
        menu.open = false;
        menu.$dropdowns.removeClass("open");
    },
    closeSubmenu: () => {
        menu.open = false;
        menu.$subdropdowns.removeClass("open2");
    },
    setTriggers: () => {
        menu.$dropdowns.off();
        menu.$subdropdowns.off();
        // if ($(window).width() <= 768) {
            menu.$dropdowns.click(menu.openMenu);
            menu.$subdropdowns.click(menu.openSubmenu);
        // } else {
        //     menu.$dropdowns.hover(menu.openMenu, menu.closeMenu);
        // }
    }
}
$(window).resize(menu.setTriggers);

$(document).click(menu.closeMenu);
$(document).click(menu.closeSubmenu);

menu.setTriggers();