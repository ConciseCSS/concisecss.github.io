// TODO: Refactor this mess
function indexNav() {
  // Highlight the current item selected
  var page = window.location.href.substr(window.location.href.indexOf("/documentation/"));
  var activateLinks = document.querySelectorAll('.index-nav [href="' + page  + '"]');
  for (var i = 0; i < activateLinks.length; i++) {
    activateLinks[i].classList.add("-active");
  }

  var allLinks = document.querySelectorAll(".index-nav a");
  for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener("click", function(e) { 
      // Remove class for previous element
      var activeLinks = document.querySelectorAll(".index-nav .-active");
      for (var i = 0; i < activeLinks.length; i++) {
        activeLinks[i].classList.remove("-active");
      }

      // Add active class to clicked element
      e.target.classList.add("-active");
    })
  }

  var closeOffcanvas = document.querySelector(".close-offcanvas");
  closeOffcanvas.addEventListener("click", function(e){
    document.querySelector("body").classList.toggle("-open-offcanvas");
  })
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
    var currentVersionText = currentVersion;

    if (returnVersionDifference(currentVersion) === true) {
      if (permission === "granted") {
        notificationMessage(
          "Click to see what's new in " + currentVersionText + "",
          "/images/logo.png",
          "A new version of Concise CSS is available",
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
  indexNav();
  notificationRequest();
  notificationUpdate();
})();
