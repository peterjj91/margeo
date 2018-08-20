
// main select js
$(document).ready(function() {
    $('select').selectpicker();
});

// slick
$(document).ready(function() {
    $('.promo-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });
});

// anchor link
$('.anchor-scroll').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// slider promo-item--product
$('.main-slider').slick({
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    infinite: false,
    centerPadding: '0px',
    dots: false,
    prevArrow: $(".promo-main__nav__arrow--left"),
    nextArrow: $(".promo-main__nav__arrow--right"),
    draggable: false,
    speed: 200,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                draggable: true,
                touchMove: true
            }
        },
        {
            breakpoint: 700,
            settings: {

            }
        },
        {
            breakpoint: 500,
            settings: {

            }
        }
    ]
});

