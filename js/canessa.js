/*
 * Important Advice:
 * jQuery event aliases like '.load', '.unload' or '.error' deprecated since jQuery 1.8
 * Replace these aliases with '.on()' to register listeners instead.
 */

//- (js - jQuery) initializations:
$(document).ready(function(){

    //- MODAL (dialogs) triggers:
    $('.modal-trigger').leanModal();

    //- COLLAPSE MOBILE NAV initialization:
    $(".button-collapse").sideNav();

    //- DROPDOWNS initialization:
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: false,  // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false // Displays dropdown below the button
    });
    $('.dropdown-trigger').dropdown();

    //- TABS initialization:
    $('ul.tabs').tabs();

    //- (custom js) script to set current Year in (common) Footer
    $(function () {
        $(".js-current-year").html(new Date().getFullYear());
    });

    //- (top) Header Shrink when user scrolls down
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".navbar-top").addClass("js-thinny-nav");
        } else {
            $(".navbar-top").removeClass("js-thinny-nav");
        }
    });

    /*
     * (Useless code by the moment) for initiation some "Materialize" (js) components
     *
     //- for a Parallax effect:
     $('.parallax').parallax();

     //- for a Scrolling Navigation:
     $('.scrollspy').scrollSpy();

     //- for a Image cards animation:
     $('.materialboxed').materialbox();

     //- for a Tooltips:
     $('.tooltipped').tooltip({delay: 50});

     //- for an Accordion:
     $('.collapsible').collapsible({
     accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style

     */
});

//- for Load the Main Nav (external HTML):
$(window).on(function() {
    // alert("Esta cargada la web, sí");
    $("#navbar").on("navbar.html");
    // Añadir y quitar clase ".active" en links de main nav bar:
    $(".navbar-link").click(function(){
        $(this).toggleClass("active");
    });
});

/*
 * (Useless code by the moment) for initiation "Materialize" (js) TOAST
 *
//- Scrolls fire Matelialize (spyselector):
var options = [
    {selector: '#staggered-test', offset: 50, callback: function(el) {
        Materialize.toast("¡Bienvenidos a la peluquería canina Canessa!", 1500);
        $("#call-1").velocity({ backgroundColor: "#333", color: "#ef5350" }, {duration: 500});
    } },
    {selector: '#staggered-test', offset: 205, callback: function(el) {
        Materialize.toast("Please continue scrolling!", 1500);
        $("#call-2").velocity({ backgroundColor: "#333", color: "#ef5350" }, {duration: 500});
    } },
    {selector: '#staggered-test', offset: 500, callback: function(el) {
        Materialize.showStaggeredList($(el));
        $("#call-3").velocity({ backgroundColor: "#333", color: "#ef5350" }, {duration: 500});
    } },
    {selector: '#lopd', offset: 50, callback: function(el) {
        console.log("Activated");
        Materialize.toast("¡Bienvenidos a la peluquería canina Canessa!", 1500);
        $("#toast-container").velocity({ backgroundColor: "#333", color: "#ef5350" }, {duration: 500});
    } }
];
Materialize.scrollFire(options);
*/

/*
 * (Useless code by the moment) MODAL (dialog) controled with a Cookie
 *
//- to Set, Get and Check a Cookie to show or Hide a Modal dialog:
//  Set the Cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

// Get the Cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca   = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var  c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if ( c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Check if Cookie exists
function checkCookie() {

    // Get the cookie called "visited"
    var visited = getCookie("visited");

    // If it exists, print the Cookie to the Console
    if (visited == "true") {
        console.log(document.cookie);
    }
    else {
        // If not, add the class 'is-visible' to my modal called '.mhc-intro-modal'
        // and create a the cookie "visited=true" expiring in 15 days.
        $('.mhc-intro-modal').addClass('is-visible');
        $('body').addClass('hide-overflow');
        setCookie("visited", "true", 15);
    }
}

// When document is ready check for the cookie
$(document).ready(function() {
    checkCookie();
});

// Close the modal
$('.mhc-intro-modal').on('click', function(event) {
    if ( $(event.target).is('.mhc-intro-modal-close') || $(event.target).is('.mhc-intro-modal') ) {
        event.preventDefault();
        $(this).removeClass('is-visible');
        $('body').removeClass('hide-overflow');
    }
});
*/
