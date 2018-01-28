//- for SLIDER initiation:
    $(document).ready(function(){
      $('.slider').slider({
          full_width: true,
          indicators: false
      });
      $('.modal-trigger').leanModal();  // Modals Dialog Initiation.

//- for COLLAPSE MOBILE NAV initiation:
      $(".button-collapse").sideNav();
 
//- for DROPDOWNS:
      $('.dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false, // Does not change width of dropdown to that of the activator
          // hover: true,  Activate on hover
          gutter: 200, // Spacing from edge
          belowOrigin: false // Displays dropdown below the button
        }
      );

// (custom js) script to set current Year in (common) Footer
      $(function () {
          $(".js-current-year").html(new Date().getFullYear());
      });
  
// Remove "contact data" top black box when main nav mobile is open:
//    $('#mobile-bars').click(function(){$(".acm-data").addClass("none-mob");});
      
/*
// Show "change Lenguage" popup (tooltip):
      $("#nav-lang").hover(function(){
        $("#languages").css("display", "block");
        }, function(){
        $("#languages").css("display", "none");
      });
*/
// Show "Contact" popup (tooltip):
      $("#nav-info").hover(function(){
        $("#info").css("display", "block");
        }, function(){
        $("#info").css("display", "none");
      });

        
});


// Load the Main Nav (external HTML):
$(window).load(function() {
    // alert("Esta cargada la web, sí");
    $("#navbar").load("navbar.html");
    // Añadir y quitar clase ".active" en links de main nav bar:
    $(".navbar-link").click(function(){
        $(this).toggleClass("active");
    });
    // Añadir y quitar clase ".active" en links de main nav bar:
    $("#contactArea").click(function(){
        $(this).toggleClass("hidden");
    });
});


$(document).ready(function(){
 // Parallax effect:
    $('.parallax').parallax();
 // Scrolling Navigation:
    $('.scrollspy').scrollSpy();
 // Animación de las imágenes:
    $('.materialboxed').materialbox();
 // Tooltips:
    $('.tooltipped').tooltip({delay: 50});
 // Accordion:
    $('.collapsible').collapsible({
          accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
});



// Scrolls fire Matelialize (spyselector):
var options = [
    {selector: '#lastOne', offset: 50, callback: 'Materialize.toast("Welcome to our creative new restaurant!", 1500 )' },
    {selector: '#lastOne', offset: 300, callback: 'Materialize.fadeInImage("#lastOne")' },
  ];
  Materialize.scrollFire(options);