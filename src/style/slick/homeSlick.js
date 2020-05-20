// new Glider(document.querySelector('.glider'),{
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     arrows: {
//         prev: ".glider-prev",
//         next: ".glider-next"
//     }
// });

$(function ()
{
    $('.multiple-items').slick({
        infinte: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        tabindex: false,
        autoplay: true,
        centerMode: true,
        variableWidth: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    dots: false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
})


$(function ()
{
    $('.gallery-items').slick({
        infinte: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        tabindex: false,
        autoplay: true,
        centerMode: true,
        variableWidth: true,
        autoplaySpeed: 1500,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    dots: false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
})