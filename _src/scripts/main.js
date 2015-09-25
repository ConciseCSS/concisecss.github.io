var element = document.getElementById('nav-button');
var body = document.body;
var className = 'nav--open';

element.addEventListener('click', function(e){
  e.preventDefault();

  if (body.classList) {
    body.classList.toggle(className);
  } else {
    var classes = body.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    body.className = classes.join(' ');
  }
});
