// window.onload = function() {
// 	var vid = document.getElementById("myVideo");
// 	vid.playbackRate = 0.75;
// }






$( document ).ready(function() {

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









