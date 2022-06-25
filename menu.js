function menu (){
    console.log("entra");
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("nav-menu-visible");
}

function entrar () {
    console.log("hola");
    document.querySelector('.nav-menu').classList.remove('nav-menu-visible')
    console.log("fucionalink");
}

/*const navMenuLink = document.querySelector(".nav-menu-link");
(navMenuLink).click(() => {
    console.log("entra");
    (navMenu).toggle('nav-menu-visible');
})*/

/*const navMenuLink = document.querySelector(".nav-menu-link");
const navMenuVisible = document.querySelector(".nav-menu-visible");
navMenuLink.onclick = function (e) {
    console.log("entra3");
    document.querySelector('.nav-menu').classList.remove('nav-menu-visible')
}

const navMenuLink = document.querySelector(".nav-menu-link");
const navMenuVisible = document.querySelector(".nav-menu-visible");
if (navMenuLink.onclick) {
    console.log("entra3");
    navMenuVisible.hide();
}
const navMenuLink = document.querySelector(".nav-menu-link");
navMenuLink.onclick = function () {
    console.log("entra3");
    document.querySelector('.nav-menu').classList.remove('nav-menu-visible')
    console.log("funciona");
   }*/