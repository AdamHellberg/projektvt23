// Denna fil skall innehålla JavaScript (JS)

const ham = document.querySelector("#ham");
const meny = document.querySelector("#meny");
const invis = document.querySelector(".invis");
const sok = document.querySelector("#sok");


ham.addEventListener('click', toggleMenu )

function toggleMenu(event) {
    event.preventDefault();
    meny.classList.toggle("active");
    invis.classList.toggle("active");
    sok.classList.toggle("active");
  }