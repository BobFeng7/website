// window.onload = function() {
// 	var vid = document.getElementById("myVideo");
// 	vid.playbackRate = 0.75;
// }

$( document ).ready(function() {

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

  // scrolling effect for in page hrefs
  // Select all links with hashes
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




  if ( $('#nonexistent').length) {
    // Correct! This code will only run if there's an element in your page
    // with an ID of 'nonexistent'
  }

  $( '<p class="greet">Hello!</p>' ); // creates a new <p> with content and class

  $( '.class' ).html("hello"); // changes the html of something


  // select all list items
  var listItems = $( 'li' );

  // filter the selection to only items with a class of 'special'
  var special = listItems.filter( '.special' );

  // filter the selection to only items without a class of 'special'
  var notSpecial = listItems.not( '.special' );

  // filter the selection to only items that contain a span
  var hasSpans = listItems.has( 'span' );

  // change and set/remove classes
  $( '#asdasd' ).addClass( 'hidden' );
  $( '#asdasd' ).removeClass( 'hidden' );
  $( '#asdasd' ).toggleClass( 'hidden' );

  // change and set/remove html attributes
  $( '#funny' ).attr( 'title', 'Beware' );
  $("#funny").removeAttr( 'title' )

  var input = $( 'input[type="number"]' );
  input.val( 'new value' );
  input.val(); // returns 'new value'



});









