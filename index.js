'use strict';

function menuExpand() {
    // Expand the nav items when the hamburger icon is clicked
    $('#js-button-menu').click(function() {
        $('.nav-bottom').toggleClass('hidden');
    })
}

function menuCollapse() {
    // Hide the nav items when a nav item is clicked
    let windowWidth = $(window).width();

    if(windowWidth < 850) {
        $('#js-nav-item').click(function() {
            $('.nav-bottom').toggleClass('hidden');
        })
    }
}

function handlePage() {
    menuExpand();
    menuCollapse();
}

$(handlePage);