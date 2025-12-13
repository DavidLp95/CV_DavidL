// SECCION DEL TRADUCTOR 

// const response = await fetch(URL, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });


// ------------------------------------------------------------boteon de traductor ----------------------------------------
//varibale de inicializacion de idioma
let currentLanguage ="es";

document.addEventListener("DOMContentLoaded", () => {
      const button = document.getElementById("traducion_ingles");
      let currentLanguage = "es";

      if (!button) {
        console.error("Button with id 'traducion_ingles' not found.");
        return;
      }

      button.addEventListener("click", () => {
      currentLanguage = currentLanguage === "en" ? "es" : "en";
      console.log("Language toggled to:", currentLanguage);
       button.textContent = currentLanguage === "en" ? "ES/EN" : "EN/ES";

  // Selecciona TODOS los elementos con data-en y data-es (sin importar su etiqueta)
      const elements = document.querySelectorAll("[data-en][data-es]");
      console.log("Found elements:", elements.length);

      elements.forEach((element) => {
        // Actualiza directamente el textContent del elemento (no solo los <a>)
        element.textContent = currentLanguage === "en" ? element.dataset.en : element.dataset.es;
      });
    });
        });


// ------------------------------------------------ SECCION DEL CARRUSEL DOOM

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. OBTENER ELEMENTOS DEL DOM
    const slidesContainer = document.querySelector('.slides-container'); // Contenedor de todos los slides
    const slides = document.querySelectorAll('.slide'); // Todos los slides individuales
    const prevBtn = document.querySelector('.anterior'); // Botón anterior
    const nextBtn = document.querySelector('.siguiente'); // Botón siguiente
    
    let currentIndex = 0; // Índice del slide actual
    
    // 2. FUNCIÓN PARA MOSTRAR UN SLIDE ESPECÍFICO
    function showSlide(index) {
        // Asegurarse que el índice esté dentro de los límites
        if (index >= slides.length) currentIndex = 0;
        if (index < 0) currentIndex = slides.length - 1;
        
        // Mover el contenedor para mostrar el slide actual
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Actualizar clases activas (opcional)
        slides.forEach(slide => slide.classList.remove('activo'));
        slides[currentIndex].classList.add('activo');
    }
    
    // 3. EVENTOS PARA LOS BOTONES
    
    // Botón siguiente
    nextBtn.addEventListener('click', function() {
        currentIndex++;
        showSlide(currentIndex);
    });
    
    // Botón anterior
    prevBtn.addEventListener('click', function() {
        currentIndex--;
        showSlide(currentIndex);
    });
    
    // 4. AUTOPLAY (OPCIONAL)
    let intervalo = setInterval(function() {
        currentIndex++;
        showSlide(currentIndex);
    }, 2000); // Cambia cada 3 segundos
    
    // Pausar autoplay cuando el mouse está sobre el carrusel
    slidesContainer.addEventListener('mouseenter', function() {
        clearInterval(intervalo);
    });
    
    // Reanudar autoplay cuando el mouse sale
    slidesContainer.addEventListener('mouseleave', function() {
        intervalo = setInterval(function() {
            currentIndex++;
            showSlide(currentIndex);
        }, 3000);
    });
    
    // Mostrar el primer slide al cargar
    showSlide(currentIndex);
});



// enlace para los diplomas 






