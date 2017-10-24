
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
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

    $('.trails__slick').slick({
  });

});