
function createDot() {
	//on click add dot to page
	$('#back').click(function(event) {
		var dot = document.createElement('div');
		dot.className = "dot";
		//add at mouse x and y coordinates
		dot.style.top = event.clientY + "px";
		dot.style.left = event.clientX + "px";
		$('#back').append(dot);

		animationTime();
		sound();
	});
}

function animationTime() {
	$('.dot').delay(300).fadeOut();
}

function sound() {
	var sound = document.getElementById('sound');
	sound.play();
}




$('#back').click(createDot());