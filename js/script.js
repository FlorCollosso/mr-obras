// Asignar src de la imagen clickeada al modal
const galleryImages = document.querySelectorAll('.gallery-img');
const modalImage = document.getElementById('modalImage');

galleryImages.forEach((img) => {
  img.addEventListener('click', function () {
    const imgSrc = this.getAttribute('src');
    modalImage.setAttribute('src', imgSrc);
  });
});

// Abrir y cerrar modal
document.addEventListener("DOMContentLoaded", function () {
  const fqaItems = document.querySelectorAll('.fqa-item');

  // Abrir la primera pregunta por defecto
  const firstItem = fqaItems[0];
  const firstAnswer = firstItem.querySelector('.fqa-answer');
  firstItem.classList.add('open');
  firstAnswer.style.height = firstAnswer.scrollHeight + 'px';
  firstItem.querySelector('.fqa-question').classList.add('open');

  // Añadir evento de click a cada pregunta
  fqaItems.forEach((item) => {
    const question = item.querySelector('.fqa-question');
    const answer = item.querySelector('.fqa-answer');

    question.addEventListener('click', () => {
      // Cerrar todas las preguntas abiertas
      fqaItems.forEach((el) => {
        const elAnswer = el.querySelector('.fqa-answer');
        const elQuestion = el.querySelector('.fqa-question');
        if (el !== item) {
          el.classList.remove('open');
          elAnswer.style.height = '0';
          elQuestion.classList.remove('open');
        }
      });

      // Abrir la pregunta clickeada
      if (item.classList.contains('open')) {
        item.classList.remove('open');
        answer.style.height = '0';
        question.classList.remove('open');
      } else {
        item.classList.add('open');
        answer.style.height = answer.scrollHeight + 'px';
        question.classList.add('open');
      }
    });
  });
});

// Navbar
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggler-btn');
  const body = document.body;

  toggleButton.addEventListener('click', function () {
    body.classList.toggle('menu-open');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Formulario de contacto
  // Inicializa EmailJS
  emailjs.init("SYptYp4MIJcT_6EE1");

  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Validación del formulario
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      try {
        const formData = {
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value,
        };

        await emailjs.send("service_c36ccz4", "plantilla_en78lyn", formData);
        alert("¡Mensaje enviado exitosamente!");
        form.reset();
        clearErrors();
      } catch (error) {
        alert("Hubo un problema al enviar tu mensaje. Inténtalo más tarde.");
        console.error("Error al enviar el mensaje:", error);
      }
    }
  });

   // Función para validar los campos del formulario
   function validateForm() {
    let isValid = true;
    clearErrors();
    
    // Validar nombre
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Por favor, ingresa tu nombre.");
      isValid = false;
    }

    // Validar correo electrónico
    if (emailInput.value.trim() === "") {
      showError(emailInput, "Por favor, ingresa un correo electrónico válido.");
      isValid = false;
    }

    // Validar mensaje
    if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Por favor, ingresa una consulta de al menos 10 caracteres.");
      isValid = false;
    }

    return isValid;
  }

  // Función para mostrar errores directamente en el placeholder
  function showError(input, message) {
    input.placeholder = message; 
    input.classList.add("input-error");
  }

  // Función para limpiar errores
  function clearErrors() {
    nameInput.placeholder = "Ingresa tu nombre completo";
    emailInput.placeholder = "Ingresa tu correo electrónico";
    messageInput.placeholder = "Ingresa tu consulta";

    // Eliminar la clase input-error de todos los campos
    nameInput.classList.remove("input-error");
    emailInput.classList.remove("input-error");
    messageInput.classList.remove("input-error");

    messageInput.value = "";
  }

});
