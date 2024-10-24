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
document.addEventListener("DOMContentLoaded", function() {
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
  
  toggleButton.addEventListener('click', function() {
    body.classList.toggle('menu-open');
  });
});
