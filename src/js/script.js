$(document).ready(function () {
    $('.nav__burger').click(function (e) {
        $('.nav__burger,.nav__menu').toggleClass('nav__active');
        $('body').toggleClass('lock');
    })

})