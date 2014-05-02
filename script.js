$(document).ready(function(){
	console.log("ready");	

	function handleMotionEvent(event) {

	    var x = event.accelerationIncludingGravity.x;
	    var y = event.accelerationIncludingGravity.y;
	    var z = event.accelerationIncludingGravity.z;

		$("#xVal").html(x);
		$("#yVal").html(y);
		$("#zVal").html(z);

		var maxX = window.innerWidth;
		var maxY = window.innerHeight;

		x = Math.round(x);

		var orgX = $("#ball").css("left");
		orgX = parseFloat(orgX);

		var newX = orgX + x;
		newX = Math.max(0, newX);

		$("#ball").css("left", Math.round(newX));

		y = Math.round(y);

		var orgY = $("#ball").css("top");
		orgY = parseFloat(orgY);

		var newY = orgY - y;
		var newY = Math.max(0, newY);

		$("#ball").css("top", Math.round(newY));
	}

	window.addEventListener("devicemotion", handleMotionEvent, true);

	$("#ball").css("left", 30);
	$("#ball").css("top", 30);
});
