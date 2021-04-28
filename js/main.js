$(".icon-hamburger").click(function() {
	$(this).toggleClass('open');
	$('.main-nav').toggleClass("open")
});


$('.testimonial-slider').owlCarousel({
    loop:true,
    margin:25,
    responsiveClass:true,
    nav:true,
    items:2,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:2
        }
    }
})
