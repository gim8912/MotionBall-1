$(document).ready(function(){
	console.log("ready");	

	function handleMotionEvent(event) {

	    var x = event.accelerationIncludingGravity.x;
	    var y = event.accelerationIncludingGravity.y;
	    var z = event.accelerationIncludingGravity.z;

		$("#xVal").html(x);
		$("#yVal").html(y);
		$("#zVal").html(z);

		$("#ball").css({left: "+="+x+"px"});
	}

	window.addEventListener("devicemotion", handleMotionEvent, true);

});
