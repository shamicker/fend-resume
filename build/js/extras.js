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
// function infoDisplay() {
//     var contactInfo = bio.contacts;

//     contactInfo = $.map( contactInfo, function( value, key ) {
//         // for each DOM element
//         $("#topContacts li span:last-child").map( function( ) {

//             // get display info
//             var display;
//             if (window.innerWidth < 700) {
//                 display = key;
//             } else {
//                 display = value;
//             }

//             // console.log(index, key, value);
//             console.log(display);
//             // return this.display;
//         });

//     });
// }



// **************************************************************

// items to be mapped/ replaced
var mappedItems = $("#topContacts li span:last-child").map( function(index) {

    var replacementList = $("#topContacts li span:last-child").text( $(this).text() ).get(0);
    console.log("list is " + replacementList);
    // console.log(replacementList.length);

    console.log("replacementList = " + replacementList);
    // console.log("repl[0] is " + replacementList[0]);
    // var ex;

    var toDisplay, key;
    // if index === 0, key is email
    // if index === 1, key is github
    // if index === 2, key is phone
    // if index === 3, key is location
    // if index === 4, key is linkedin
    // OR, for index 0-4, key is $(mediaType).text()
    // where mediaType = $("#topContacts li span:last-child").text( $(this).text() ); ?
    // for (i=0; i < replacementList.length; i++) {

    // }
    console.log("toDisplay and key: " + toDisplay+key);

    if ( index === 0 ) {
        key = "email";
    console.log("toDisplay and key: " + toDisplay+key);
    } else if ( index === 1 ) {
        key = "github";
    } else if ( index === 2 ) {
        key = 'mobile';
    } else if ( index === 3 ) {
        key = 'location';
    } else if ( index === 4 ) {
        key = 'linkedin';
    } else {
        key = "whoops";
    }
    // get display info
    if (window.innerWidth < 700) {
        toDisplay = key;
    } else {
        toDisplay = bio.contacts[key];
    }
        console.log("toDisplay and key: " + toDisplay+key);

    // console.log("toDisplay" + index + " is " + toDisplay);
    // console.log(toDisplay);
    return toDisplay;

});
console.log("mappedItems");
console.log(mappedItems);
// Now that items are mapped, put them back in the DOM appropriately!
// $("#topContacts li span:last-child").text( mappedItems );
 // $("#topContacts li span:last-child").each().text(  mappedItems[0] );



// ***************************************************************


// window event listener!!
window.onresize = $("#topContacts li span:last-child").text( function(index) {
    return mappedItems[index];
});


























