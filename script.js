const h2 = document.createElement("h2");
h2.textContent = "You should click this content added and edited by JavaScript";
document.querySelector("body").appendChild(h2);

function clickAlert() {
    alert('I was clicked!');
  }
  h2.addEventListener('click', clickAlert);

h2.style.borderStyle = "solid"

