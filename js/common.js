$(function() {

var owl = $('.owl-carousel');

owl.owlCarousel({
    items: 1,
    loop:true,
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

});

$(document).ready(function(){
  $('.slick1').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<img class="asd1" src="./img/arrow-prev.png">',
    nextArrow: '<img class="asd2" src="./img/arrow-next.png">'

  });

});

$(document).ready(function(){
  $('.slick2').slick({
    infinite: true,
    prevArrow: '<img class="asd1" src="./img/arrow-prev.png">',
    nextArrow: '<img class="asd2" src="./img/arrow-next.png">'
  });

});