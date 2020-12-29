const menu = {
    $dropdowns: $(".dropdown-container"),
    open: false,
    openMenu: (e) => {
        //console.log($(e.target).hasClass("navbutton"));
        if (e.currentTarget === menu.open) return;
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
        if ($(window).width() <= 768) {
            menu.$dropdowns.click(menu.openMenu);
        } else {
            menu.$dropdowns.hover(menu.openMenu, menu.closeMenu);
        }
    }
}

$(window).resize(menu.setTriggers);

$(document).click(menu.closeMenu);

menu.setTriggers();


// a global helper function that adds a conversion tracker to any <a> tag or other element
// pass in a css selector (or an element or jQuery object) and the send_to code
// example: addConversion("#ff-signup", 'AW-458476450/wSX1CPqMm-4BEKKXz9oB');

function addConversion(selector, sendTo){
    const url = $(selector).attr("href");
    
    function gtag_report_conversion(e) {
        const callback = function () {
            if (typeof (url) != 'undefined') {
                window.location = url;
            }
        };
        gtag('event', 'conversion', {
            'send_to': sendTo,
            'event_callback': callback
        });
        return false; //prevents following the link
    }
    $(selector).click(gtag_report_conversion);
}