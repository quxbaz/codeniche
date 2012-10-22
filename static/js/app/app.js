$(function() {

    // Highlight current page in #nav.
    var path = window.location.pathname.substr(1);
    if (path.length == 0) path = 'home';
    $('#nav a[href="' + path + '"]').addClass('current');

});