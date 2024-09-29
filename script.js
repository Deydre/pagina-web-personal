document.addEventListener('DOMContentLoaded', function () {


    // CLICK EN MENÚ = Cambiar icono por otro + Cambiar img Home por texto "Home"

    // Almacenar la ruta de los 2 iconos en variables
    let openMenu = document.querySelector("#openMenu");
    let closeMenu = document.querySelector("#closeMenu");

    
    let homeImg; 
    let homeContainer;
    // Comprobar en qué página estamos
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        homeContainer = document.querySelector("a[href='index.html']");
    } else {
        homeContainer = document.querySelector("a[href='../index.html']");
    }
    
    homeImg = homeContainer.innerHTML;

    openMenu.addEventListener('click', function () {
        // Cambiar la clase para ocultarlo y sacar la otra
        openMenu.setAttribute("class", "hidden");
        closeMenu.setAttribute("class", "");
        // Cambiar la casita por texto "Home"
        homeContainer.innerHTML = "Home";
    });

    closeMenu.addEventListener('click', function () {
        // Cambiar la clase para ocultarlo y sacar la otra
        closeMenu.setAttribute("class", "hidden");
        openMenu.setAttribute("class", "");
        // Cambiar la casita por la imagen almacenada
        homeContainer.innerHTML = homeImg;
    });

    //----------------------------------------------------------

    // VALIDACIÓN DEL FORMULARIO
    let form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // PARALIZA EL ENVÍO DEL FORMULARIO

        // console.log(event.target.elements); // = En elements están todos lo inputs del formulario
        let name = event.target.elements.name.value.trim();
        let email = event.target.elements.email.value.trim().toLowerCase();
        let service = event.target.elements.service;
        let message = event.target.elements.message.value.trim();
        let checkbox = event.target.elements.checkbox.checked;

        let nameError = true;
        let emailError = true;
        let serviceError = true;
        let messageError = true;
        let checkboxError = true;

        // NOMBRE
        if (typeof name === "string" && name.length != 0) {
            nameError = false;
            document.querySelector("#name").style.border = "none";
            document.querySelector("label[for=name]").style.color = "white";
        } else {
            document.querySelector("#name").style.border = "2px solid red";
            document.querySelector("label[for=name]").style.color = "red";
        }

        // EMAIL
        if (typeof email === "string" && email.length != 0 && email.includes("@") && email.includes(".com")) {
            emailError = false;
            document.querySelector("#email").style.border = "none";
            document.querySelector("label[for=email]").style.color = "white";
        } else {
            document.querySelector("#email").style.border = "2px solid red";
            document.querySelector("label[for=email]").style.color = "red";
        }

        // RADIO BUTTONS
        for (let i = 0; i < service.length; i++) {
            if (service[i].checked) {
                serviceError = false;
                document.querySelector("form > article > div:nth-child(1) > fieldset:nth-child(2) > legend").style.color = "rgba(255, 255, 255, 0.748)";
                document.querySelector("form > article > div:nth-child(1) > fieldset:nth-child(2)").style.border = "2px solid rgba(255, 255, 255, 0.36)";
                console.log("radio ok");
                break;
            } else {
                document.querySelector("form > article > div:nth-child(1) > fieldset:nth-child(2) > legend").style.color = "red";
                document.querySelector("form > article > div:nth-child(1) > fieldset:nth-child(2)").style.border = "2px solid red";
            }
        }

        //MENSAJE
        if (typeof message === "string" && message.length !== 0) {
            messageError = false;
            document.querySelector("form > article > div:nth-child(2) > fieldset > legend").style.color = "rgba(255, 255, 255, 0.748)";
            document.querySelector("form > article > div:nth-child(2) > fieldset").style.border = "2px solid rgba(255, 255, 255, 0.36)";
        } else {
            document.querySelector("form > article > div:nth-child(2) > fieldset > legend").style.color = "red";
            document.querySelector("form > article > div:nth-child(2) > fieldset").style.border = "2px solid red";
        }

        // CHECKBOX
        if (checkbox == true) {
            checkboxError = false;
            document.querySelector("label[for=checkbox]").style.color = "white";
        } else {
            document.querySelector("label[for=checkbox]").style.color = "red";
        }

        let arrayErrors = [nameError, emailError, serviceError, messageError, checkboxError];

        // Si no hay errores...
        if (!arrayErrors.includes(true)) {
            document.querySelector('form').style.display = 'none';
            document.querySelector('.titleContainer').style.display = 'none';
            document.querySelector('#successMessage').classList.remove('hidden');
            document.querySelector('#successMessage').classList.add('notHidden');
            // PINTAR CONFIRMACIÓN DE TODO OK
        }
    });



});