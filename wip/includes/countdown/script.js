
const timer = document.getElementById("countdownTimer");
let countDownDate = new Date("Aug 10, 2025 00:00:00").getTime();
let count = setInterval(function() {
	let currentDate = new Date().getTime();
	let distance = countDownDate - currentDate;
	let days = Math.floor( distance / (1000 * 60 * 60 * 24) );    
	let hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
	let minutes = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60) );
	let seconds = Math.floor( (distance % (1000 * 60)) / 1000 );
	timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
    	clearInterval(count);
    	timer.innerHTML = "On my Way!";
	}
}, 1000);