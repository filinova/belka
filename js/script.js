
$(document).ready(function(){
  var gallery = $('.gallery__slick');

  function slickUp(val) {
    $(val).slick({
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  function slickDown(val){
    $(val).slick("unslick");
  }

  if ($(window).width() < 768 ) {
    slickUp(gallery);
  }

  $(window).resize(function(){

    if ( $(window).width() < 768 ) {
      
      if ( $(gallery).hasClass("slick-initialized") ) {
        return true;
      } else {
        slickUp(gallery);
      }

    } else if ( $(window).width() >= 768 ){

      if ( $(gallery).hasClass("slick-initialized") ) {
        slickDown(gallery);
      }
    
    }
  });
    $('.review__slick').slick({
    
  });

    $('.trails__slick').slick({
    
  });

});