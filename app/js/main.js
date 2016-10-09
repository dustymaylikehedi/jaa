$(document).ready(function(){

  $('#research').bind('inview', function (event, visible) {
    if (visible == true) {
      $("#researching").addClass('active');
      alert('found h2!')
    } else {
      $("#researching").removeClass('active');
    }
    $('#research').trigger('inview');
  });

  $('.ui.sticky')
  .sticky({
    context: '#sticker',
    offset: 85
  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top-80
          }, 750);
          return false;
        }
      }
    });
  });

  $('.neg')
  .visibility({
    once: false,
    onBottomPassed: function() {
      $('.fixed.menu').transition('fade in');
    },
    onBottomPassedReverse: function() {
      $('.fixed.menu').transition('fade out');
    }
  });

  $(".rotate").Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: "bounceIn",
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: "/",
      // The delay between the changing of each phrase in milliseconds.
      speed: 1250,
      complete: function () {
          // Called after the entrance animation is executed.
      }
  });

});