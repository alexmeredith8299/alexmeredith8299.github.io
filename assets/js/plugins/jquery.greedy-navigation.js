/*
* Masthead height sync
*
* Keeps body/sidebar top padding in sync with the masthead's height.
* (Formerly also collapsed overflowing nav links behind a hamburger button;
* that behavior has been removed.)
*/

function updateNav() {
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }
}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

updateNav();
