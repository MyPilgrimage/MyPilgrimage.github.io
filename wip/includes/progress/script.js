function progressMove() {
	const progressBar = document.getElementById("progressRoute");   
	let width = 20;
	if (progressBar.style.width != null && progressBar.style.width != undefined ) {
    	let newWidth = progressBar.style.width;
    	newWidth = newWidth.replace(/%/g, "");
    	width = newWidth;
	} else {
    	width = 0;
	}
	let interv = setInterval(updateFrame, 20);
	function updateFrame() {
    	if (width >= 100) {
        	progressBar.innerHTML = '<b>COMPLETED!</b>';
        	clearInterval(interv);
    	} else {
        	width++;
        	progressBar.style.width = width + '%';
        	progressBar.innerHTML = width * 1  + '%';
    	}
	}
}