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
    $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top-40
      }, 1200);
      e.preventDefault();
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

  $('.main-form').bind('submit', function(event) {
    $('[type=text]').each(function() {
      if(!$(this).val().length) {	
	    event.preventDefault();
        $(this).css('border', '2px solid red');
      }
    });
  });
});
