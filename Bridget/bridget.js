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
      const img = button.previousElementSibling; 
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



document.addEventListener('DOMContentLoaded', () => {
  const serviceContainer = document.querySelector('.services');
  const searchInput = document.getElementById('service-search');

  function renderServices(serviceList) {
    serviceContainer.innerHTML = '';

    const categories = {};

    serviceList.forEach(service => {
      if (!categories[service.category]) {
        categories[service.category] = [];
      }
      categories[service.category].push(service);
    });

    for (const category in categories) {
      const section = document.createElement('div');
      section.className = 'service-category';

      const heading = document.createElement('h2');
      heading.textContent = category;
      section.appendChild(heading);

      const ul = document.createElement('ul');
      categories[category].forEach(service => {
        const li = document.createElement('li');
        li.innerHTML = `${service.name} ${service.price ? '– ' + service.price : ''}${service.description ? ' <em>(' + service.description + ')</em>' : ''}`;
        ul.appendChild(li);
      });

      section.appendChild(ul);
      serviceContainer.appendChild(section);
    }
  }

  renderServices(services);


  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = services.filter(service =>
      service.name.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.category.toLowerCase().includes(query)
    );
    renderServices(filtered);
  });
});

