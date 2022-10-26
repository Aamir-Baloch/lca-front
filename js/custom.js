
$("#top-plans").owlCarousel({
    center: true,
    items: 1,
    dots: false,
    nav: false,
    loop: true,
    margin: 30,
    responsive: {
        575: {
            items: 2,
        },
        991: {
            items: 4,
        },
        1300: {
            items: 5,
        },
    },
});
$("#owl-four").owlCarousel({
    items: 1,
    center: true,
    dots: false,
    nav: true,
    loop: true,
    margin: 10,
    responsive: {
        600: {
            items: 1,
        },
    },
});
$("#owl-five").owlCarousel({
    center: true,
    items: 2,
    dots: false,
    nav: false,
    loop: true,
    margin: 10,
    responsive: {
        600: {
            items: 1,
        },
    },
});