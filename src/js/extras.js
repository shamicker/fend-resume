// function handler(display) {
//     return function() {
//         return display;
//     };
// }

// function toDisplay(index, display) {
//     console.log( index + " - " + display);
//     $("span:last-child")[index].text(display);
//     return display;
// }


// // function depending on window size
// function infoDisplay( ) {
//     // get variables via loop
//     for ( var key in bio.contacts ) {
//         if ( bio.contacts.hasOwnProperty(key) ) {
//             // var $this = $(this);
//             var display;

//             if (window.innerWidth < 701) {
//                 display = key;
//             } else if (window.innerWidth > 700) {
//                 display = bio.contacts[key];
//             }

//             // console.log(display);  // logs perfectly!!

//             $("#topContacts li span:last-child").text(display);
//         }
//     }
// }


// ***************************************************************


// // for each (array) bio.contacts' key:value pair
// var display;
// $.each( bio.contacts, function(key, value) {
//     if (window.innerWidth < 701) {
//         display = key;
//     } else {
//         display = bio.contacts[key];
//     }
//     console.log(display);
// });
// console.log("final " + display);



// for each selected DOM element (last span), index & self are available
// $("#topContacts li span:last-child").each( function( index, element) {
//     console.log( $(this).text(display) );
// });

// ***************************************************************
function infoDisplay() {
    var contactInfo = bio.contacts;

    contactInfo = $.map( contactInfo, function( value, key ) {
        // for each DOM element
        $("#topContacts li span:last-child").map( function( index ) {

            // get display info
            var display;
            if (window.innerWidth < 700) {
                display = key;
            } else {
                display = value;
            }

            // console.log(index, key, value);
            console.log(display);
            // return display;
        });

    });
}





// ***************************************************************


// window event listener!!
window.onresize = infoDisplay;


























