// When the user clicks on div, open the popup
function PopUp() {
  const popup = document.getElementById('popUp');
  if (popup != null) {
    popup.classList.toggle('show');
  } else {console.log("No PopUp");}
}

function PopUps (e) {
  const popups = document.getElementsByClassName('popUps');
  if (popups != null) {
    //popups[i].classList.toggle('show');
    for (i = 0; i < popups.length; i++) {
      popups[i].classList.toggle('show');
    }
  } else {console.log("No PopUps");}
}