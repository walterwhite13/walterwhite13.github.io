$(function() {

var owl = $('.owl-carousel')
var owl2 = $('.owl-carousel2')

owl.owlCarousel({
	items: 1,
	loop:true,

});

owl2.owlCarousel({
	items: 1,
	loop:true,
	dots: false,

});

$('.next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

$('.next').click(function() {
    owl2.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl2.trigger('prev.owl.carousel', [300]);
})

});