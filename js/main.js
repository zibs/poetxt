$(document).ready(function(){
    $(".whitewrap").delay(400).fadeIn(2000)
});
$(document).ready(function(){
    $(".titlewhite").delay(0).fadeIn(500)
});

$(document).ready(function () {
   $("#query").hover(function () {
    $(".homepage, .navbar").stop(true, true).fadeTo("fast",0.08)
}, function() {
	$(".homepage, .navbar").fadeTo(2500,1);
	});
  });

$(document).ready(function () {
   $("#query").hover(function () {
    $("#contact").stop(true, true).delay(200).fadeIn("slow")
}, function() {
	$("#contact").delay(300).fadeOut(2750);
	});
  });



// 
//  WONG


// SET LEFT-TRILATERALONE ON PAGE LOAD AND CLEAR
$(document).ready(function () {
    setTimeout(function() { 
  var height_of_element = $(".forages").height();  
  $(".iv-one-l").css({"width": (height_of_element + "px")});
  // $(".clear").css({"clear": "both"});
  }, 500)
});

// SET RIGHT-TRILATERALONE ON PAGE LOAD AND CLEAR
$(document).ready(function () {
    setTimeout(function() { 
  var height_of_element = $(".forages").height();  
  $(".iv-one-r").css({"width": (height_of_element + "px")});
  }, 500)
});

// RESET LEFT LATERAL ON RESIZE AND CLEAR
$(document).ready(function () {
  $(window).resize(function () {
  var height_of_element = $(".forages").height();  
  $(".left-lateral").css({"width": (height_of_element + "px")});
  });
});

// RESET RIGHT LATERAL ON RESIZE AND CLEAR
$(document).ready(function () {
  $(window).resize(function () {
  var height_of_element = $(".forages").height();  
  $(".right-lateral").css({"width": (height_of_element + "px")});
  });
});



// 
// SILLIMAN



$(document).ready(function() {
  $(window).scroll( function(){
    var bottom_of_front_page_image = $("#silligraph").offset().top + ($("#silligraph").outerHeight()/4);
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_front_page_image) {
      $("#silligraph").animate({'opacity':'1'}, 750);
    }
  });   
});
$(document).ready(function() {
  $(window).scroll( function(){
    var bottom_of_front_page_image = $("#silligrapha").offset().top + ($("#silligrapha").outerHeight()/4);
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_front_page_image) {
      $("#silligrapha").animate({'opacity':'1'}, 750);
    }
  });   
});
$(document).ready(function() {
  $(window).scroll( function(){
    var bottom_of_front_page_image = $("#silligraphb").offset().top + ($("#silligraphb").outerHeight()/4);
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_front_page_image) {
      $("#silligraphb").animate({'opacity':'1'}, 750);
    }
  });   
});

$(document).ready(function() {
  $(window).scroll( function(){
    var bottom_of_front_page_image = $("#silligraphc").offset().top + ($("#silligraphc").outerHeight()/4);
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_front_page_image) {
      $("#silligraphc").animate({'opacity':'1'}, 750);
    }
  });   
});

$(document).ready(function() {
  $(window).scroll( function(){
    var bottom_of_front_page_image = $("#silligraphd").offset().top + ($("#silligraphd").outerHeight()/4);
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_front_page_image) {
      $("#silligraphd").animate({'opacity':'1'}, 750);
    }
  });   
});

$(document).ready(function() {
  $(window).scroll( function(){
    var bottom_of_front_page_image = $("#silligraphe").offset().top + ($("#silligraphe").outerHeight()/4);
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_front_page_image) {
      $("#silligraphe").animate({'opacity':'1'}, 750);
    }
  });   
});



// 
// REIMER

$(function(){
  $('.great-music').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  // If you want to keep full screen on window resize
  $(window).resize(function(){
    $('.great-music').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  });
});


$(document).ready(function() { 
  $( "#bladefish" ).hover(function() {
    $( "#bladefish" ).effect( "pulsate", {times:500},  1000 )   
  });
});

$(document).ready(function() {
  $("#bucks").hover(function() {
    $("#bucks").toggle("explode");
  });
});
$(document).ready(function() {
  $("#coin").hover(function() {
    $("#coin").toggle("puff", "slow");
  });
});

$(document).ready(function() {
  $("#color").hover(function() {
    $("#color").toggle("puff", "slow");
  });
});

// ASHBERY

$("#concave-clicker").click(function() {
    $('html, body').animate({
        scrollTop: $("#concave").offset().top
    }, 2000);
});




  // SET LEFT-TRILATERALTWO ON PAGE LOAD AND CLEAR
// $(document).ready(function () {
    // setTimeout(function() { 
  // /var height_of_element = $(".trilateraltwo").height();  
  // $(".iv-two-l").css({"width": (height_of_element + "px")});
  // $(".clear").css({"clear": "both"});
  // }, 1000)
// });

// SET RIGHT-TRILATERALTWO ON PAGE LOAD AND CLEAR
// $(document).ready(function () {
    // setTimeout(function() { 
  // var height_of_element = $(".trilateraltwo").height();  
  // $(".iv-two-r").css({"width": (height_of_element + "px")});
  // $(".clear").css({"clear": "both"});
  // }, 500)
// });
  // $(".right-lateral").css("width", (height_of_element + "px"));
// });


// Nav adjust on scroll eventually
// (function($) {          
    // $(document).ready(function(){                    
        // $(window).scroll(function(){                          
            // if ($(this).scrollTop() > 200) {
                // $('#menu').fadeIn(500);
            // } else {
                // $('#menu').fadeOut(500);
            // }
        // });
    // });