// Contador animado

const contador = document.getElementById("contador");

let numero = 0;
let objetivo = 12500;

const animar = setInterval(() => {

    numero += 100;

    contador.innerText =
        numero.toLocaleString("pt-BR");

    if(numero >= objetivo){

        contador.innerText =
            objetivo.toLocaleString("pt-BR");

        clearInterval(animar);
    }

}, 20);


// Scroll suave

document
.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        document
        .querySelector(
            link.getAttribute("href")
        )
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});