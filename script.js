
$( document ).ready(function(event) {
	console.log("ready");

	const startMin = 0;
	const startSec = 20;
	const x = (startMin * 60 + startSec);
	let min = startMin;
	let sec = startSec;
	console.log(min, sec);
	$('.min').text(min)
	$('.sec').text(sec)

	const stopTimer = function() { clearInterval(timer) }

	const countdown = (min, sec) => {
		if (sec === 0 && min === 0) {
			stopTimer();
		} else if (sec === 0 && min > 0) {
			min -= 1;
			sec = 59;
		} else {
			sec -= 1;
		}

		return [min, sec]
	}

	const timer = setInterval(function() {
		[ min, sec ] = countdown(min, sec)

		let y = 1 - ((min * 60 + sec) / x);
		let angle = 360 * y + 90;

		$('.min').text(min + " min")
		$('.sec').text(sec + " sek")

		if (y <= 1) {
			if (y <= 0.5) {
				$('.timer__circle--mask1')[0].style.setProperty('--angle', `${angle}deg`);
			} else {
				$('.timer__circle').addClass('timer__circle--mask2');
				$('.timer__circle--mask2')[0].style.setProperty('--angle', `${180 + angle}deg`);
			}

		}
	}, 1000);

});
