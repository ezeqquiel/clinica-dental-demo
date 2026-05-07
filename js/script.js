    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });


    const items = document.querySelectorAll('.servicio-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
      }, { threshold: 0.2 }); // se activa cuando el 20% del elemento es visible

items.forEach(item => observer.observe(item));


const cards = document.querySelectorAll('.about-card');

const observerCards = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 150); // ← cada tarjeta aparece 150ms después de la anterior
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observerCards.observe(card));