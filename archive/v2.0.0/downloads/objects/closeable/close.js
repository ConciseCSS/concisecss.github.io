jQuery(document).ready(function() {
  jQuery(document).on('click', '.close', function () {
    // Get .close parent div, fade out
    jQuery(this).parents('.close-this').fadeOut('slow');
  });
});
