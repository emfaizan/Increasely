$(".icon-hamburger").click(function() {
	$(this).toggleClass('open');
	$('.main-nav').toggleClass("open")
});


$('.testimonial-slider').owlCarousel({
    loop: false,
    rewind: false,
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



// $('.dropdown-menu').click(function(){
//     $(this).toggleClass("active");
// });


// show dropdown once and then go to url
$(".main-nav > li > a").click(function(e) {
    $parent = $(this).parent('li');
    isDropdown = $parent.hasClass('dropdown-menu');
    isActive = $parent.hasClass('active');
    
    if(window.matchMedia("(max-width: 1023px)").matches && !isActive && isDropdown){
        e.preventDefault();
        $parent.toggleClass('active');
    }
});

// Always toggle underneath dropdown
$(".toggle-menu").click(function(e) {
    $parent = $(this).parent('.dropdown-menu');
    $parent.toggleClass('active');
});

// If click outside menu on mobile/tablet
$(document).on("click", function(e){
    if(window.matchMedia("(max-width: 1023px)").matches){
        if($(e.target).closest('.main-nav').length == 0 && $(e.target).closest('.menu-trigger').length == 0) {
            $('.main-nav').removeClass("open");
            $(".icon-hamburger").removeClass("open");
        }
    }
});

// Tabs
$("[data-tabs]").click(function(e) {
    e.preventDefault();
    $elem = $($(this).attr('href'));

    $('.tab-content').css('display','').removeClass('active');
    $elem.fadeIn().addClass('active');

    $("[data-tabs]").removeClass('active')
    $(this).addClass('active')
});