$(document).ready(function(){
	console.log("ready");	

	function handleMotionEvent(event) {

	    var x = event.accelerationIncludingGravity.x;
	    var y = event.accelerationIncludingGravity.y;
	    var z = event.accelerationIncludingGravity.z;

		$("#xVal").html(x);
		$("#yVal").html(y);
		$("#zVal").html(z);

		x = Math.round(x);

		var orgX = $("#ball").css("left");
		orgX = parseFloat(orgX);

		$("#ball").css("left", Math.round(orgX + x));

		z = Math.round(z);

		var orgZ = $("#ball").css("top");
		orgZ = parseFloat(orgZ);

		$("#ball").css("top", Math.round(orgZ + z));
	}

	window.addEventListener("devicemotion", handleMotionEvent, true);

	$("#ball").css("left", 30);
});
