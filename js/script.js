$(document).ready(function() {
    
    
    $("button").mouseenter(function(){
		$(this).removeClass("makeRed").addClass("makeBorder");
	});

	$("button").mouseleave(function(){
		$("button").removeClass("makeBorder").addClass("makeRed");
	});
    $("button").on("click", function(){
        $("#para1").slideToggle("slow");
    });
});