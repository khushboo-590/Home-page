$(document).ready(function () {
    $('.my-file').slick({
        dots: true,
        infinite: true,
        // speed: 50,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    
    });
});
