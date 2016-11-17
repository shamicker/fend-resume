// contact info displays differently depending on window size
function infoDisplay() {
  for ( var key in bio.contacts ) {
    if ( bio.contacts.hasOwnProperty(key) ) {
      var display;
      var icon = $("." + key).siblings();

      if (window.innerWidth < 350) {
        display = "";
        icon.show();
        $(icon).removeClass("fa-1x").addClass("fa-lg");
      } else if (window.innerWidth < 500) {
        display = key;
        icon.hide();
      } else if (window.innerWidth < 910) {
        display = key;
        icon.show();
        $(icon).removeClass("fa-lg").addClass("fa-1x");
      } else {
        display = bio.contacts[key];
        icon.show();
        $(icon).removeClass("fa-lg").addClass("fa-1x");
      }

      $("." + key).text(display);
    }
  }
}

// window event listener!!
window.onresize = infoDisplay;
// TODO: when window.innerWidth < 500, something else again

























