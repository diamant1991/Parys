$(window).load(function() {
        $('#slider').nivoSlider({
           effect: 'fade',
           pauseTime: 8000,
           pauseOnHover: false,    
            })
        
    });

$( document ).ready(function() {
    $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top-40
      }, 1200);
      e.preventDefault();
   });

    $('.nav ul li a').click(function(e) {
        e.preventDefault();
        $('.nav ul li a').removeClass('active');
        $(this).addClass('active');
    });
});