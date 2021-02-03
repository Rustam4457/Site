   
//responsive menu on phone 
$(document).ready(function(){
  $('.main-nav-trigger').click(function(){
    $(this).next('.horizontal-nav').slideToggle()
  })
});



///Change navbar-scrolling
$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 25) {
      $(".menu__header").css("background", "white");
      $("a").css("color", "black");
      $(".main-nav-trigger").css("color", "#252525")
      $(".main-logo-black").css("src", "../img/logo.svg");
    } else {
      $(".menu__header").css("background", "");
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

///smooth transition to anchor links
//  $(document).ready(function(){
//     $(".horizontal-nav").on("click","a", function (event) {
//         event.preventDefault();
//         var id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 500);
//     });
// });

//Slider
  $(document).ready(function() {
    $("#lightSlider").lightSlider({
      item: 1,
      loop: true,
      speed: 500,
      controls: false
          }); 
  });

///Slider 2
  $(document).ready(function() {
    $('#partners').lightSlider({
        item: 5,
         loop: true,
         speed: 700,
         pager: false,
         controls: false
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



$(document).ready(function(){
$('textarea').attr('maxlength', '100');
var max_length = $('textarea').attr('maxlength');
$('#feedbacki').text(max_length+" characters are remaining");
$('textarea').keyup(function(){
  var length = $(this).val().length;
  var remaining_chars = max_length-length;
  $('#feedbacki').text(remaining_chars + " characters are remaining");
});
});
