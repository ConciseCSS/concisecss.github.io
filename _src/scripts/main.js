/**
 * On document ready
 */
$(document).ready(function(){
  /**
   * Toggle navigation visibility on click
   */
  $('.menu-toggle').click(function(e){
    e.preventDefault();
    $('.docs').toggleClass('docs--nav-hidden');
  });

  $('.docs-nav').perfectScrollbar();

  $('.docs').perfectScrollbar();


  /**
   * Hide navigation by default on small screens
   */
   var winWidth = $(window).width();

   if (winWidth <= 726) {
     $('.docs').addClass('docs--nav-hidden');
   }
});


/**
 * On window resize
 */
$(window).resize(function() {
  /**
   * Show/hide nav on window resize
   */
  var winWidth = $(window).width();

  if (winWidth <= 726) {
    $('.docs').addClass('docs--nav-hidden');
  } else {
    $('.docs').removeClass('docs--nav-hidden');
  }
})
