// define function to get window width


// get contact display info
var infoDisplay = function( width, method ) {
    if ( width < 700 ) {
        return method;
    } else {
        return bio.contacts[method];
    }
};

var displayFunction = function() {

};


$(window).resize().text(function() {
    // get current window width
    var width = $(window).width();

    //test on 1 contact method
    if ( bio.contacts.hasOwnProperty("email") ) {
        var display = infoDisplay( width, "email" );
        return display;
    }

    // get key for each contact type
    // for ( var method in bio.contacts ) {
    //     if ( bio.contacts.hasOwnProperty[method] ) {
    //         var display = infoDisplay( width, method );
    //     }
    // }

});
