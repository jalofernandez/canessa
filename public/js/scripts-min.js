$(document).ready(function(){$(".slider").slider({full_width:!0,indicators:!1}),$(".modal-trigger").leanModal(),$(".button-collapse").sideNav(),$(".dropdown-button").dropdown({inDuration:300,outDuration:225,constrain_width:!1,gutter:200,belowOrigin:!1}),$("ul.tabs").tabs(),$(function(){$(".js-current-year").html((new Date).getFullYear())}),$(window).scroll(function(){$(window).scrollTop()>=100?$(".navbar-top").addClass("js-thinny-nav"):$(".navbar-top").removeClass("js-thinny-nav")}),$("#nav-info").hover(function(){$("#info").css("display","block")},function(){$("#info").css("display","none")})}),$(window).load(function(){$("#navbar").load("navbar.html"),$(".navbar-link").click(function(){$(this).toggleClass("active")}),$("#contactArea").click(function(){$(this).toggleClass("hidden")})}),$(document).ready(function(){$(".parallax").parallax(),$(".scrollspy").scrollSpy(),$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50}),$(".collapsible").collapsible({accordion:!1})});var options=[{selector:"#lastOne",offset:50,callback:'Materialize.toast("Welcome to our creative new restaurant!", 1500 )'},{selector:"#lastOne",offset:300,callback:'Materialize.fadeInImage("#lastOne")'}];Materialize.scrollFire(options);