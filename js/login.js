


const no_account = document.querySelector("#confirm + p.meny-text")
const login = document.querySelector("#back")
const toggle = document.querySelector(".toggle")
const rubrik = document.querySelector(".rubrik_2")
const gmail = document.querySelector("#gmail");
const rubrik2 = document.querySelector("#rubrik_3")
// const rubrik2 = document.querySelector("#ruta p.rubrik_2:nth-of-type(1)")

no_account.addEventListener('click', toggle_login);
login.addEventListener('click', toggle_login);

function toggle_login (event){
    event.preventDefault();
    gmail.classList.toggle("active");
    rubrik2.classList.toggle("active");
    toggle.classList.toggle("active")
    rubrik.classList.toggle("active")
    // rubrik2.classList.toggle("active")
    no_account.classList.toggle("active")
    login.classList.toggle("active")

}

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

