window.onload = function() {
	var vid = document.getElementById("myVideo");
	vid.playbackRate = 0.75;

}

// handles the photoreel
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 0}    
    x[Math.floor(myIndex * Math.random() * 20) % x.length].style.display = "block";  
    setTimeout(carousel, 9000);    
}

//handles the skills slider 
var waypoint = new Waypoint({
  element: document.getElementById('check'),
  handler: function() {
    $('.skillbar').each(function(){
      $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
      },4000);
    });
  }
})












