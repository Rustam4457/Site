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

$(function() {
    //Функция проверяет заполнено ли поле с телефоном
    function formValide() {         
        var str = $('#contact_form input[name=tel]').val();
        str = jQuery.trim(str);                
        if(str.length < 5){                
            alert ('Введите телефон');          
            return false;
        }   
        return true;
    }
 
    //при нажатии на кнопку button нужной формы запускаем функцию обработки данных
    $('#contact_form .button').live('click', function() {
        if (formValide()) {
            //если форма прошла проверку, выводим блок с текстом ожидания
            $('#contact_form').before('<h3 id="contact_form_info">Оформление заявки. Подождите...</h3>');
            $('#contact_form').hide();
            //берем путь php обработчика
            order_url = $('#contact_form').attr('action');          
            //посылаем асинхронный запрос на сервер и передаем все данные формы
            $.post(order_url,{
                    name: $('#contact_form input[name=name]').val(),
                    tel: $('#contact_form input[name=tel]').val(),
                    email: $('#contact_form input[name=email]').val(),
                    message: $('#contact_form textarea[name=message]').val(),
                    send: "1"
                }, function(data) {
                    //выводим возврашаемый сервером код html вместо содержимого формы
                $('#contact_form').html(data);
                $('#contact_form').show();
                $('#contact_form_info').remove();
            }, "html");         
        }
        return false;
    });
});
 
// =========================================================================  go_order
$(function() {

    $('#contact').click(function(){
        $('#popup').fadeIn();
        $('#popup').append('<a id="popup_close"></a>');
        q_width = $('#popup').outerWidth()/-2;
        q_height = $('#popup').outerHeight()/-2;
        $('#popup').css({
            'margin-left': q_width,
            'margin-top': q_height
        });     
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
        return false;
    });
    $('#popup_close, #fade').live('click', function() {
        $('#fade').fadeOut(function() {
            $('#fade').remove();
            $('#popup_close').remove();
            $('#popup').fadeOut();
        });
    });
 
});