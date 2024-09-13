$(document).ready(function () {
    $(".owl-list-slide").owlCarousel({
        items: 1,
        nav: true,
        smartSpeed: 2000,
        dragEndSpeed: 500,
        navText: [`<i class="fas fa-arrow-left"></i>`, `<i class="fas fa-arrow-right"></i>`]
    })
})