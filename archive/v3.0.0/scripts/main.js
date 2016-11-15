/**
 * @function nav
 *
 * Interaction for slide-out navigation
 *
 * @param {string} element that triggers the navigation open
 * @param {string} class name to add when navigation is open
 */
function nav(el, className) {
  var element = document.getElementById(el);
  var body = document.body;

  element.addEventListener('click', function(e) {
    e.preventDefault();

    if (body.classList) {
      body.classList.toggle(className);
    } else {
      var classes = body.className.split(' ');
      var existingIndex = classes.indexOf(className);

      if (existingIndex >= 0) {
        classes.splice(existingIndex, 1);
      } else {
        classes.push(className);
      }

      body.className = classes.join(' ');
    }
  });
}

/**
 * Run functions
 */
(function() {
  nav('nav-button', 'nav--open');
})();
