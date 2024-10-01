 function CopiarUrl(){
     const footer=document.querySelector(".contact__button__header");
     event.preventDefault();
    
     let url=document.getElementById('number');
     navigator.clipboard.writeText(url.textContent);

     var copied=document.getElementById("copied");

     copied.style.display="var(--show)";
     copied.style.marginTop="0px";
     copied.style.scale="1";
     copied.style.filter="blur(0px)";

     setTimeout(function CopiarUrl(){
     copied.style.display=null;
     copied.style.marginTop=null;
     copied.style.scale=null;
     copied.style.filter=null;
     },2500);
 };



 ///////////////////////--------------------------------------------






// Seleccionamos todos los botones que comparten la clase 'action-btn'
var botones = document.querySelectorAll(".expand__button");

// Iteramos sobre cada botón para añadir el evento de clic
botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        // Seleccionamos la tarjeta padre (el contenedor de la clase .card)
        var tarjeta = boton.closest(".card__item");
        var imagen = tarjeta.querySelector("img");

        // Alternamos la clase 'blurred' para aplicar el filtro blur a la tarjeta
        tarjeta.classList.toggle("blurred");

        // Alternamos la clase 'scaled' para escalar la imagen
        tarjeta.classList.toggle("scaled");

        if (tarjeta.classList.contains("scaled")) {
            boton.textContent = "See less ";
        } else {
            boton.textContent = "See more ";
        }

        // Después de unos segundos, eliminamos el escalado y el blur
        setTimeout(function() {
            tarjeta.classList.remove("blurred");
            tarjeta.classList.remove("scaled");
            boton.textContent = "See more ";
        }, 10000);
    });
});

