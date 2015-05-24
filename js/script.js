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
  
jQuery(function ($) {
    $(window).scroll(function(){
        $(".div").each(function () {
          var window_top = $(window).scrollTop();
          var div_top = $(this).offset().top;
          var div_1 = $(this).attr('id');
            if (window_top > div_top - 50){
                $('.nav').find('a').removeClass('active');
                $('.nav').find('a[class="'+div_1+'"]').addClass('active');
            }
            else{
                $('.nav').find('a[class="'+div_1+'"]').removeClass('active');
                };
        });
    });
});


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

$('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      //e.preventDefault();
   });
   //return false;



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

  $('form').bind('submit', function(event) {
    $(this).find('[type=text]').each(function() {
      if(!$(this).val().length) { 
      event.preventDefault();
        $(this).addClass('error');
        $(this).parent('.input-block').find('span.error').show();
      }
    });
  });

  $('.get-call-link').click(function(){
  	 $('.form-mask').fadeIn(400);
  	 $('.get-call').fadeIn(400);
  })
  $('.get-price-link').click(function(){
  	 $('.form-mask').fadeIn(400);
  	 $('.get-price').fadeIn(400);
  })
  $('.show-more-link').click(function(){
     $('.form-mask').fadeIn(400);
     $('.show-more').fadeIn(400);
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
