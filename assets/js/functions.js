//responsive menu on phone
$(document).ready(function(){
  $('.main-nav-trigger').click(function(){
    $(this).next('.horizontal-nav').slideToggle()
  });
});



///Change navbar-scrolling
$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".site-nav").css("background", "white");
      $("a").css("color", "black");
      $(".main-nav-trigger").css("color", "#252525")
      $(".main-logo-black").css("src", "../img/logo.svg");
    } else {
      $(".site-nav").css("background", "");
      $("a").css("color", "#bababa");
      $("a").css("font-family", "Work Sans");
    };
  });
});

//Change logo in navbar
$(document).ready(function() {
  var img = $(".main-logo-black"); 
  img.css("display", "none"); 
  $(window).scroll(function() {
   var scroll = $(window).scrollTop();
   if (scroll > 50) {
    img.fadeIn();
   } else {
    img.fadeOut(); 
  };
 });
});

///Change clasess in navbar. Doesn't works yet...
// $(window).on('scroll', function() {
//     var $nav = $('header'),
//         scroll = $(this).scrollTop();
//     if (scroll > 10) {
//         $nav.addClass('styles');
//     } else {
//         $nav.removeClass('styles');
//     }
// });


///smooth transition to anchor links
 $(document).ready(function(){
    $("ul").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

//Slider
  $(document).ready(function() {
    $("#lightSlider").lightSlider({
      item: 1,
      loop: true,
      speed: 500
          }); 
  });

///Slider 2
  $(document).ready(function() {
    $('#partners').lightSlider({
        item: 5,
         loop: true,
         speed: 700,
         pager: false
    });
});
  //blog-slider
    $(document).ready(function() {
    $('.blog-slider').lightSlider({
         item: 3,
         loop: true,
         speed: 1400,
         autoWidth: true,
         controls: false
    });
});

//popup

