$(window).load(function() {
        $('#slider').nivoSlider({
           effect: 'fade',
           pauseTime: 8000,
           pauseOnHover: false,    
            })
        
    });

jQuery(function($){
   $(".tel-input").mask("+7 (999) 999-9999");
});

wow = new WOW(
    {
      boxClass:     'wow',      
      animateClass: 'animated', 
      offset:       0,          
      mobile:       true,       
      live:         true        
    }
  )
  wow.init();

$( document ).ready(function() {

	$('input,textarea').focus(function(){
	  $(this).data('placeholder',$(this).attr('placeholder'))
	  $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	  $(this).attr('placeholder',$(this).data('placeholder'));
	});

    $(".work-block").hover(
      function () {
        $(this).children('.work-table').addClass('active');
        $(this).prevAll().children('.work-table').addClass('active');
      },
      function () {
        $(this).children('.work-table').removeClass('active');
        $(this).prevAll().children('.work-table').removeClass('active');
      }
    );


    var headerHeight = $('.nav').height();
  
  $(".nav a").click(function(e) {
    e.preventDefault();
    var offsetTop = $("#"+$(this).data("target")).offset().top - headerHeight;
    $('html, body').animate({scrollTop: offsetTop}, 1000);
  });
 
  $(document).scroll(function(){
    var offsets = [];
    $('.nav a').each(function(index, element){   
      offsets.push($("#" + $(element).data('target')).offset().top);
    });
    
    offsets.push($(document).height());
    var docScroll = $(document).scrollTop() + headerHeight + $(window).height() / 2;
    for (var i = 0; i < offsets.length - 1; i++) {
      if (docScroll >= offsets[i] && docScroll < offsets[i+1]) {
        $('.active').removeClass('active');
        $('.nav a').eq(i).addClass('active');
        break;
      };
    };
  });

  $(':input').blur(function() {
    if($(this).val().length == 0) {
      $(this)
        .addClass('error')
        //.before('<span class="error">"Заполните поле"</span>');
        .parent('.input-block').find('span.error').show();
    }
  });
  $(':input').focus(function() {
    $(this)
      .removeClass('error')
      .parent('.input-block').find('span.error').hide();
      //.prev('span')
      //.remove();
  });

  $('.get-call-link').click(function(){
  	 $('.form-mask').fadeIn(400);
  	 $('.get-call').fadeIn(400);
  })
  $('.get-price-link').click(function(){
  	 $('.form-mask').fadeIn(400);
  	 $('.get-price').fadeIn(400);
  })
  $('.closed,.form-mask').click(function(){
  	 $('.modal,.form-mask').fadeOut(400);
  })

  $(document).keyup(function(d) {
    if (d.keyCode == 27) {
        $('.form-mask').fadeOut(400);
        $('.modal').fadeOut(400);
    }
});

});
