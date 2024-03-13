const openMenu = document.querySelector(".open");
const menuLista = document.querySelector(".menu-lista");
const listaItems = document.querySelectorAll(".list");
const closeMenu = document.querySelector(".close");



openMenu.addEventListener("click", () => {
    menuLista.classList.add("active");
    
    listaItems.forEach(lista => {
        lista.classList.add("active");
    })

    closeMenu.classList.add("active");
}, false)

closeMenu.addEventListener("click", () => {
    RemoveActive();
})



function RemoveActive() {
    menuLista.classList.remove("active");

    listaItems.forEach(lista => {
        lista.classList.remove("active");
    })
    
    closeMenu.classList.remove("active");
}

//----------------------- FORMULARIO -----------------------//
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const alertName = document.querySelector("#alertName");
const alertEmail = document.querySelector("#alertEmail");
const button = document.querySelector("#botonContacto");
const form = document.querySelector("#formularioContacto");
const mensaje = document.querySelector("#mensaje");
const alertMensaje = document.querySelector(".alertMensaje");

function Validacion(){
    var validacion = true;

    if (nombre.value.length < 4){
        validacion = false;
        alertName.innerHTML = "*Nombre incompleto*";
    }
    else
    {
        alertName.innerHTML = "";
    }

    if (email.value.includes("@gmail.com") || email.value.includes("@hotmail.com") || email.value.includes("@outlook.com")){
        alertEmail.innerHTML = "";
    }
    else
    {
        validacion = false;
        alertEmail.innerHTML = "*Email invalido*"
    }
    
    if (mensaje.value == ""){
        validacion = false;
        alertMensaje.innerHTML = "*Colocar mensaje*";
    }
    else
    {
        alertMensaje.innerHTML = "";
    }

    return validacion;
}


form.addEventListener("submit", (e) => {
    if (Validacion()){
        e.preventDefault(); //Envia el formulario
        console.log(
            button.innerHTML = "ENVIADO",
            button.style.background = "#59E742",
            setTimeout(() => {
                button.innerHTML = "Enviar"
                button.style.background = "rgb(3, 141, 211)";
            }, 1000));
            
        setTimeout(() => {
            form.submit();

        }, 1000)    
    }else{
        e.preventDefault(); //Desactiva la funcion. En este caso, evita que el form pueda enviar la informacion
    }
})


