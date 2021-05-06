$(".icon-hamburger").click(function() {
	$(this).toggleClass('open');
	$('.main-nav').toggleClass("open")
});

$('.dropdown-menu').click(function(){
    $(this).toggleClass("active");
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
        768:{
            items:2,
        },
        1000:{
            items:2,
            nav: true
        }
    }
})
