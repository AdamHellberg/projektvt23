const more_bttn = document.querySelector("#more_bttn");
const ruta_1 = document.querySelector("#ruta_1");
const text_ruta_1 = document.querySelector("#text_ruta_1");
const openclose = document.querySelector("#openclose") 
const more_bttn_2 = document.querySelector("#more_bttn_2");
const openclose_2 = document.querySelector("#openclose_2")


more_bttn.addEventListener('click', expand_text_1);

function expand_text_1(event) {
    event.preventDefault();
    openclose.classList.toggle("active");
    text_ruta_1.classList.toggle("active");
}

more_bttn_2.addEventListener('click', expand_text_2);

function expand_text_2(event) {
    event.preventDefault();
    openclose_2.classList.toggle("active");
    text_ruta_2.classList.toggle("active");
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



  

