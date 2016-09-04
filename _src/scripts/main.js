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
 * @function notificationRequest
 *
 * If Notifications are supported, request permission from the user
 */
function notificationRequest() {
  if (("Notification" in window)) {
    var permission = Notification.permission;

    if (permission !== 'granted' && permission !== 'denied') {
      Notification.requestPermission();
    }
  }
}


/**
 * @function notificationMessage
 *
 * Construct a notification to send to the user
 *
 * @param {string} body text for notification
 * @param {string} icon path for notification image
 * @param {string} title text for notification
 * @param {string} link when clicking on notification (optional)
 */
function notificationMessage(body, icon, title, link) {
  link = link || 0;

  var options = {
    body: body,
    icon: icon
  }

  var n = new Notification(title, options);

  if (link) {
    n.onclick = function () {
      window.open(link);
    };
  }

  setTimeout(n.close.bind(n), 5000);
}


/**
 * @function returnCurrentVersion
 *
 * Returns the current version for Concise from a hidden element on the page
 *
 * @param {string} element name that stores the hidden version
 */
function returnCurrentVersion(el) {
  var currentVersion = el[0].textContent;

  return currentVersion;
}


/**
 * @function returnVersionDifference
 *
 * Use localStorage to store and retrieve the current version of Concise so we
 * can determine if there's a version difference
 *
 * @param {string} current version of Concise
 */
function returnVersionDifference(currentVersion) {
  var storedVersion,
      versionDifference;

  // If we've stored a version
  if (localStorage.conciseVersion) {
    storedVersion = localStorage.getItem("conciseVersion");
    versionDifference = currentVersion.localeCompare(storedVersion);
  } else {
    localStorage.setItem("conciseVersion", currentVersion);
  }

  // Update localStorage and return `true` if there is a version difference
  if (versionDifference !== 0) {
    localStorage.setItem("conciseVersion", currentVersion);

    return true;
  } else {
    return false;
  }
}


/**
 * @function notificationUpdate
 *
 * Send the user a notification when there's a new version of Concise
 */
function notificationUpdate() {
  if (("Notification" in window)) {
    var permission = Notification.permission;
    var currentVersion = returnCurrentVersion(document.getElementsByClassName("js-currentVersion"));
    var currentVersionText = "v" + currentVersion;

    if (returnVersionDifference(currentVersion) === true) {
      if (permission === "granted") {
        notificationMessage(
          "Click to see what's new in " + currentVersionText + "",
          "/images/logo.png",
          "A new version of Concise is available",
          "https://github.com/ConciseCSS/concise.css/releases/" + currentVersionText + ""
        );
      }
    }
  }
}


/**
 * Run functions
 */
(function() {
  nav('nav-button', 'nav--open');
  notificationRequest();
  notificationUpdate();
})();
