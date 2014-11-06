// Browser Support
if (!Modernizr.svg) {
  $(".logo img").attr("src", "/images/logo.png");
}

function determineAdBlock() {
    if ($('#fusionads').filter(':visible').length == 0 || $('#fusionads').filter(':hidden').length > 0) {
        alert("Please stop using adblock");
    }
}

determineAdBlock();
