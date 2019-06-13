'use strict';

function menuExpand {
    // Expand the nav items when the hamburger icon is clicked

}

function navScroll {
    // Scroll to the appropriate element when nav item is clicked
    $('#js-button-project').click(function(event) {
        $('body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 600);
    })

}

function handlePage {
    menuExpand();
    navScroll();
}

$(handlePage);