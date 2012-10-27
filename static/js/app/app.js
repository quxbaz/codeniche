$(function() {

    // Highlight the current page link in #nav.
    var path = window.location.pathname.substr(1);
    if (path.length == 0) path = 'home';
    $('#nav a[href="' + path + '"]').addClass('current');

    // $('#pulldown').toggle(function() {
    //     $('#footer').slideDown(0);
    //     $(this).css({bottom: 140})
    //         .find('.text').text('less');
    //     $('i', this).removeClass('icon-arrow-up').addClass('icon-arrow-down');
    // }, function() {
    //     $('#footer').slideUp(0);
    //     $(this).css({bottom: 0})
    //         .find('.text').text('more');
    //     $('i', this).removeClass('icon-arrow-down').addClass('icon-arrow-up');
    // });

    $('#portfolio .info-tab').toggle(function() {
        $(this).siblings('.site-info').slideDown(300);
    }, function() {
        $(this).siblings('.site-info').slideUp(300);
    });

});