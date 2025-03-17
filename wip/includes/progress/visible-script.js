
/*
const isInView = (elemInView, partialView = false) => {
  let { scrTop, scrRight, scrBottom, scrLeft } = elemInView.getBoundingClientRect();
  let { innerHeight, innerWidth } = window;
  return partialView ? ((scrTop > 0 && scrTop < innerHeight) || (scrBottom > 0 && scrBottom < innerHeight)) && ((scrLeft > 0 && scrLeft < innerWidth) || (scrRight > 0 && scrRight < innerWidth)) : scrTop >= 0 && scrLeft >= 0 && scrBottom <= innerHeight && scrRight <= innerWidth;
};


const progressBarElem = document.getElementById("progressRoute");
console.log(isInView(progressBarElem));
let interv = setInterval(update, 20);
function update () {
	console.log("!" + progressBarElem + " in View: " + isInView(progressBarElem) + "/n");
	if (isInView(progressBarElem)) {
		console.log("FOUND!");
	}
}
*/