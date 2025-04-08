function obtenerFrase() {
    fetch("/frase")
      .then(response => response.json())
      .then(data => {
        const fraseDiv = document.getElementById("frase");
  
        // Desvanece la frase actual
        fraseDiv.style.opacity = 0;
  
        setTimeout(() => {
          // Cambia el contenido
          fraseDiv.textContent = data.frase;
  
          // Cambia el color de fondo aleatoriamente
          const colores = ["#f0f0f0", "#d1f7c4", "#fce8d5", "#d5e8fc", "#fcd5e8"];
          const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
          document.body.style.backgroundColor = colorAleatorio;
  
          // Muestra la nueva frase con efecto
          fraseDiv.style.opacity = 1;
        }, 400);
      });
  }
  