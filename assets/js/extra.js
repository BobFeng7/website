// window.onload = function() {
// 	var vid = document.getElementById("myVideo");
// 	vid.playbackRate = 0.75;
// }

  
$( document ).ready(function() {

  

  // change quotes for title screen
  var quotes = ["'Time is a story in reverse'",
                "'You aren't stuck in traffic, you are the traffic'",
                "'The universe is grand, but life is grander'",
                "'We are the universe's way of self-introspection'"];
  var mood = $('#mood');
  var index = 0;
  
  setInterval(changequote, 4500);
  function changequote() {
    mood.fadeOut(1500, function(){
      mood.text(quotes[index]);
      mood.fadeIn(1500);
    });
    index = (index + 1) % 4;
  }

  

  // weird scroll effect for si stuff
  $(window).scroll(function() {
      $('.si').each(function(){
      var imagePos = $(this).offset().top;
  
      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
          $(this).addClass("slideUp");
        }
      });
    });

  // scrolling effect for in page hrefs select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });

});









