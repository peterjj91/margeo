
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

// article slider img
$('.slider-article').slick({
  arrows: false,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true
});

// anchor link
$('.anchor-scroll').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// slider main-slider
$('.main-slider').slick({
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    centerPadding: '0px',
    dots: false,
    prevArrow: $(".promo-main__nav__arrow--left"),
    nextArrow: $(".promo-main__nav__arrow--right"),
    draggable: false,
    // speed: 200,
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


// slider slider-content
$('.slider-content__recommend').slick({
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    centerPadding: '0px',
    dots: false,
    prevArrow: $(".slider-content__recommend--left"),
    nextArrow: $(".slider-content__recommend--right"),
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

$('.slider-content__thank').slick({
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    centerPadding: '0px',
    prevArrow: $(".slider-content__thank--left"),
    nextArrow: $(".slider-content__thank--right"),
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
