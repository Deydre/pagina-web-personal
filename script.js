
// Al hacer click en el menú, cambiar un icono por otro

let openMenu = document.querySelector("#openMenu");
let closeMenu = document.querySelector("#closeMenu");

// Almacenamos la imagen para volver a ella más tarde
let homeImg = document.querySelector("a[href='index.html']").innerHTML;
// Almacenamos el contenedor para cambiar más tarde lo de dentro 
let homeContainer = document.querySelector("a[href='index.html']");


openMenu.addEventListener('click', function() {
    // Cambiar la clase para ocultarlo y sacar la otra
    openMenu.setAttribute("class", "hidden");
    closeMenu.setAttribute("class", "");
    // Cambiar la casita por texto "Home"
    homeContainer.innerHTML = "Home";
});

closeMenu.addEventListener('click', function() {
    // Cambiar la clase para ocultarlo y sacar la otra
    closeMenu.setAttribute("class", "hidden");
    openMenu.setAttribute("class", "");
    // Cambiar la casita por la imagen almacenada
    homeContainer.innerHTML = homeImg;
});
