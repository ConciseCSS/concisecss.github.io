/**
* On document ready
*/
jQuery(document).ready(function($){
  var isNavAnimating = false;

  // Initialize custom Scrollbars
  $('.nav-wrapper').perfectScrollbar();
  $('.docs').perfectScrollbar();

  // Open/close navigation
  $('.nav-button').on('click', function(e){
    e.preventDefault();

    // Stop if nav animation is running
    if( !isNavAnimating ) {
      if($(this).parents('.csstransitions').length > 0 ) {
        isNavAnimating = true;
      }

      $('body').toggleClass('nav--open');

      $('.nav-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        // Animation is over
        isNavAnimating = false;
      });
    }
  });
});
