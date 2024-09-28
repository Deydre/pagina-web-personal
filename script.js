document.addEventListener('DOMContentLoaded', function() {


        // CLICK EN MENÚ = Cambiar icono por otro + Cambiar img Home por texto "Home"

    // Almacenar la ruta de los 2 iconos en variables
    let openMenu = document.querySelector("#openMenu");
    let closeMenu = document.querySelector("#closeMenu");

    // Cambiar img HOME por "Home"
    // Almacenamos la imagen de HOME para volver a ella más tarde
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
    
    // VALIDACIÓN DEL FORMULARIO
    let form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // PARALIZA EL ENVÍO DEL FORMULARIO

        console.log('elementos', event.target.elements)
        console.log(event.target.elements) // = En elements están todos lo inputs del formulario
    	// event.target.favorite.value // = Del input que tiene el id "favorite" sacamos 
    	// // el valor (por ejemplo si está vacío pedirlo de nuevo))
    	// event.target.email.value

    	// Si no hay errores...
    	// e.target.submit(); // ENVÍA EL FORMULARIO
    	// Pintar confirmación de que está enviado con éxito
    });



});