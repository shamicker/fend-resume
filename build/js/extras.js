// contact info displays differently depending on window size
function infoDisplay() {
  for ( var key in bio.contacts ) {
    if ( bio.contacts.hasOwnProperty(key) ) {
      var display;

      if (window.innerWidth < 910) {
        display = key;
      } else {
        display = bio.contacts[key];
      }

      $("." + key).text(display);
    }
  }
}

// window event listener!!
window.onresize = infoDisplay;
// TODO: when window.innerWidth < 500, something else again

























