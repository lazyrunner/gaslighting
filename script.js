const content = document.getElementById("content");
const message = document.getElementsByClassName("error__message");
const body = document.getElementsByTagName("body")[0];
let toggle = false;

function switchLight() {
  if (toggle === false) {
    for (let i = 0; i < message.length; i++) {
      message[i].style.color = "black";
    }
    body.style.backgroundColor = "white";
    toggle = true;
  } else {
    for (let i = 0; i < message.length; i++) {
      message[i].style.color = "#181828";
    }
    body.style.backgroundColor = "#181828";
    toggle = false;
  }
}

content.addEventListener("click", switchLight);
