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