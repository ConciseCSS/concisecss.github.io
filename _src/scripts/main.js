/**
 * On document ready
 */
 jQuery(document).ready(function($){
 	var isNavAnimating = false;

 	// open/close lateral navigation
 	$('.nav-button').on('click', function(e){
 		e.preventDefault();

 		// stop if nav animation is running
 		if( !isNavAnimating ) {
 			if($(this).parents('.csstransitions').length > 0 ) {
        isNavAnimating = true;
      }

 			$('body').toggleClass('nav--open');

 			$('.nav-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
 				// animation is over
 				isNavAnimating = false;
 			});
 		}
 	});
 });
