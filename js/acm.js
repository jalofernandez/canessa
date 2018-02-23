/*
 * Important Advice:
 * jQuery event aliases like '.load', '.unload' or '.error' deprecated since jQuery 1.8
 * Replace these aliases with '.on()' to register listeners instead.
 */

//- js initiation:
$(document).ready(function(){

    //- for a SLIDER:
    $('.slider').slider({
        full_width: true,
        indicators: false
    });

    //- for a MODAL (dialogs) triggers:
    $('.modal-trigger').leanModal();

    //- for a COLLAPSE MOBILE NAV:
    $(".button-collapse").sideNav();

    //- for a DROPDOWNS:
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        // hover: true,  Activate on hover
        gutter: 200, // Spacing from edge
        belowOrigin: false // Displays dropdown below the button
    });

    //- for TABS:
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
    {selector: '#image-test', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
        $("#call-4").velocity({ backgroundColor: "#333", color: "#ef5350" }, {duration: 500});
    } }
];
Materialize.scrollFire(options);
*/
