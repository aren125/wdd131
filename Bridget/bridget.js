document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-button');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const img = button.previousElementSibling; // The image before button
      const beforeSrc = img.getAttribute('data-before');
      const afterSrc = img.getAttribute('data-after');
      
      if (img.src.endsWith(beforeSrc)) {
        img.src = afterSrc;
        button.textContent = 'Show Before';
      } else {
        img.src = beforeSrc;
        button.textContent = 'Show After';
      }
    });
  });
});

