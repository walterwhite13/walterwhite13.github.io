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
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    prevArrow: '<img class="asd1" src="img/arrow-prev.png">',
    nextArrow: '<img class="asd2" src="img/arrow-next.png">'

  });

});

$(document).ready(function(){
  $('.slick2').slick({
    infinite: true,
    prevArrow: '<img class="asd1" src="img/arrow-prev.png">',
    nextArrow: '<img class="asd2" src="img/arrow-next.png">'
  });

});

$(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
  $(".topline").slideToggle();
  return false;
});

$(document).ready(function() {
  $('#menu-trigger').click(function() {
    $('nav a.menu-item').slideToggle(300);
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 890 ) {     
      $('nav a.menu-item').removeAttr('style');
     }
  });//end resize
});//end ready

$(document).ready(function() {
  $('.catalog-head').click(function() {
    $('.catalog').slideToggle(300);
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 890 ) {     
      $('.catalog').removeAttr('style');
     }
  });//end resize
});//end ready