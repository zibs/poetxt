$(document).ready(function(){
    $(".whitewrap").delay(400).fadeIn(2000)
});
$(document).ready(function(){
    $(".titlewhite").delay(0).fadeIn(500)
});

$(document).ready(function () {
   $("#query").hover(function () {
    $(".homepage, .navbar").fadeTo("fast",0.08)
}, function() {
	$(".homepage, .navbar").fadeTo(2500,1);
	});
  });

$(document).ready(function () {
   $("#query").hover(function () {
    $("#contact").delay(200).fadeIn("slow")
}, function() {
	$("#contact").delay(300).fadeOut(2750);
	});
  });


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