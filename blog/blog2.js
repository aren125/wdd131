const articlesContainer = document.querySelector('#articles-container');

function buildArticles() {
  articlesContainer.innerHTML = '';

  articles.forEach(article => {
    const articleElem = document.createElement('article');
    articleElem.classList.add('book-review');

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('book-details');
    detailsDiv.innerHTML = `
      ${article.date}</p>
      ${article.ages}</p>
      ${article.genre}</p>
      ${article.stars}</p>
    `;

    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = `
      <h2>${article.title}</h2>
      <img src="${article.imgSrc}" alt="${article.imgAlt}">
      <p>${article.description}</p>
    `;

    articleElem.appendChild(detailsDiv);
    articleElem.appendChild(contentDiv);
    articlesContainer.appendChild(articleElem);
  });
}

buildArticles();