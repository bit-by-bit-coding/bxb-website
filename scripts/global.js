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


// a global helper function that adds a conversion tracker to any <a> tag or other element
// pass in a css selector (or an element or jQuery object) and the send_to code
// example: addConversion("#ff-signup", 'AW-458476450/wSX1CPqMm-4BEKKXz9oB');

function addConversion(selector, sendTo) {

    function gtag_report_conversion(e) {
        const url = e.currentTarget.href;
        const callback = function () {
            if (typeof (url) != 'undefined') {
                window.location = url;
            }
        };
        if (gtag) { // fallback in case they have adblock
            gtag('event', 'conversion', {
                'send_to': sendTo,
                'event_callback': callback
            });
        }
        else {
            callback();
        }

        return false; //prevents following the link
    }
    $(selector).click(gtag_report_conversion);
}