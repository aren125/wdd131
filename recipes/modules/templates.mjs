
export function tagsTemplate(tags) {
	return tags.map(tag => `<li>${tag}</li>`).join("");
}

export function ratingTemplate(rating) {
	let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

	for (let i = 1; i <= 5; i++) {
		if (i <= Math.floor(rating)) {
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		} else {
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
		}
	}

	html += `</span>`;
	return html;
}

export function recipeTemplate(recipe) {
	return `
	<figure class="recipe">
		<img src="${recipe.image}" alt="Image of ${recipe.name}" />
		<figcaption>
			<ul class="recipe__tags">
				${tagsTemplate(recipe.tags)}
			</ul>
			<h2><a href="#">${recipe.name}</a></h2>
			<p class="recipe__ratings">
				${ratingTemplate(recipe.rating)}
			</p>
			<p class="recipe__description">
				${recipe.description}
			</p>
		</figcaption>
	</figure>`;
}
