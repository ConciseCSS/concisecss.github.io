$(document).ready(function(){
  $('.menu-toggle').click(function(e){
    e.preventDefault();
    $('.docs').toggleClass('docs--nav-hidden');
  });

  $('.docs-nav').perfectScrollbar();

  $('.docs').perfectScrollbar();
});
