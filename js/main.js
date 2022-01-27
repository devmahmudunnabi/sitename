$(document).ready(function(){
  $(".search_icon").click(function(){
    $(".search-container").toggle();
  });
});
//=================-- manu--============
$(document).ready(function(){
  $(".manu_icon").click(function(){
    $(".nav_ali ul li").toggle();
  });
});


//===================--SLIKE slider start--===================

$(document).ready(function(){
  $('.image_inner').slick({
      infinite: true,
      cssEase: 'linear',
      // autoplay: 600,
      dots:true,
      arrows:true,
      // fade: true,
      cssEase: 'linear',
      prevArrow:'<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:'<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    })
});

//===================--SLIKE slider END--===================


new top_write().init();