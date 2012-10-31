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

    var params = {
        'field-first-name' : $('#field-first-name').attr('value'),
        'field-last-name'  : $('#field-last-name').attr('value'),
        'field-email'      : $('#field-email').attr('value'),
        'field-message'    : $('#field-message').attr('value')
    };

    // debug code
    // for (var k in params) {
    //     $('#' + k).attr('value', k);
    // }
    // $('.field-block').addClass('disabled');

    $('#contact .submit').click(function() {
        if ($(this).hasClass('disabled')) return;
        var params = {
            'field-first-name' : $('#field-first-name').attr('value'),
            'field-last-name'  : $('#field-last-name').attr('value'),
            'field-email'      : $('#field-email').attr('value'),
            'field-message'    : $('#field-message').attr('value')
        };
        for (var k in params) {
            var v = params[k];
            var $required = $('#' + k).closest('.field-block').find('.required');
            if (v.length == 0)
                $required.fadeIn();
            else
                $required.hide();
        }
        if(!$('.required').is(':visible')) {
            var $this = $(this);
            $this.addClass('disabled');
            $('.field-block').addClass('disabled');
            $('.loader').show();
            $.post('mail', params, function(data) {
                $('.loader').hide();
                $('.confirmation').show();
                $this.removeClass('disabled');
                $('.field-block').removeClass('disabled');
            });
        }
    });

});