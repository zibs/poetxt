// On click we want to:
// fade the body opacity down to 0.25% by selecting the body element and changing the opacity

// have the element be already centered, but merely hidden, and then have the JS take off the hidden element function? 


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


