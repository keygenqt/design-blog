$(function () {

    $(window).resize(function (event) {
        $('.body-menu').height($('.block-menu').height())
    });

    $(window).scroll(function (event) {
        const scroll = $(window).scrollTop();
        const up = $('.button-up')
        if (scroll < 200) {
            up.hide()
        } else {
            up.show()
        }
    });

    $('.button-up').click(function () {
        $('html, body').animate({scrollTop: 0}, 300);
    });

    $('.button-theme').click(function () {
        const body = $('body')
        if (body.hasClass('black-theme')) {
            body.removeClass('black-theme')
        } else {
            body.addClass('black-theme')
        }
    });

    setTimeout(function () {
        $(window).scroll();
        $(window).resize();
        $('.body-menu').height($('.block-menu').height())
    }, 50);

    $('.body-menu').height($('.block-menu').height())
});

function setCookie(name, value) {
    let string = name + "=" + escape(value);
    let expires = new Date(2050, 1, 1);
    string += "; expires=" + expires.toGMTString();
    document.cookie = string;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}