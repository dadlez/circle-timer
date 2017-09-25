
$( document ).ready(function(event) {
	console.log("ready");

	const startMin = 0;
	const startSec = 10;
	let min = startMin;
	let sec = startSec;
	console.log(min, sec);
	$('.min').text(min)
	$('.sec').text(sec)


	const countdown = (min, sec) => {
		if (sec === 0 && min > 0) {
			min -= 1;
			sec = 59;
		} else if (sec === 0 && min === 0) {
			stopTimer();
		} else {
			sec -= 1;
		}

		return [min, sec]
	}


	const timer = setInterval(function() {
		let x = 360 * ((min * 60 + sec) / (startMin * 60 + startSec));
		console.log(x);
		[ min, sec ] = countdown(min, sec)

		$('.box__circle')[0].style.setProperty('--angle', `${x}deg`)
		$('.min').text(min)
		$('.sec').text(sec)
	}, 1000);

	const stopTimer = function() { clearInterval(timer) }

});
