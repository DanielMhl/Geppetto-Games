// ======= Declaração de variáveis, que podem ser tanto constantes "const" como também podem ser do tipo "var" =======



const botaoMenu = document.querySelector(".nav-bar");

const subMenu = document.getElementById("sub-menu");

const body = document.querySelector(".corpo");

const fecharM = document.querySelector('.fechar-menu');

const subLink1 = document.getElementById('sub-link1');
const subLink2 = document.getElementById('sub-link2');
const subLink3 = document.getElementById('sub-link3');
const subLink4 = document.getElementById('sub-link4');
const subLink5 = document.getElementById('sub-link5');


// ======= Uma forma que pode ser usada para abrir e fechar menus: =======


botaoMenu.addEventListener("click", () => {

    subMenu.classList.toggle("aberto");
    body.classList.toggle("scroll");
    fecharM.classList.toggle("ativado");
});

fecharM.addEventListener("click", () => {

    subMenu.classList.remove("aberto");
    body.classList.remove("scroll");
    fecharM.classList.remove("ativado");

 });



 subLink1.addEventListener("click", () => {
    subMenu.classList.remove("aberto");
    body.classList.remove("scroll");
    fecharM.classList.remove("ativado");
});
 subLink2.addEventListener("click", () => {
    subMenu.classList.remove("aberto");
    body.classList.remove("scroll");
    fecharM.classList.remove("ativado");
});
 
 subLink3.addEventListener("click", () => {
    subMenu.classList.remove("aberto");
    body.classList.remove("scroll");
    fecharM.classList.remove("ativado");
});
 
 subLink4.addEventListener("click", () => {
    subMenu.classList.remove("aberto");
    body.classList.remove("scroll");
    fecharM.classList.remove("ativado");
});
 
 subLink5.addEventListener("click", () => {
    subMenu.classList.remove("aberto");
    body.classList.remove("scroll");
    fecharM.classList.remove("ativado");
});


