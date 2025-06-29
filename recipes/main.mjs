
import { recipes } from './recipes.mjs';
import { getRandomListEntry } from './modules/random.mjs';
import { recipeTemplate } from './modules/templates.mjs';

function renderRecipes(recipeList) {
	const container = document.getElementById("recipes-container");
	const html = recipeList.map(recipe => recipeTemplate(recipe)).join("");
	container.innerHTML = html;
}

function filterRecipes(query) {
	const lowerQuery = query.toLowerCase();

	const filtered = recipes.filter(recipe => {
		const nameMatch = recipe.name.toLowerCase().includes(lowerQuery);
		const descMatch = recipe.description.toLowerCase().includes(lowerQuery);

		const tagsMatch = recipe.tags.find(tag =>
			tag.toLowerCase().includes(lowerQuery)
		);

		const ingredientsMatch = recipe.recipeIngredient.find(ingredient =>
			ingredient.toLowerCase().includes(lowerQuery)
		);

		return nameMatch || descMatch || tagsMatch || ingredientsMatch;
	});

	const sorted = filtered.sort((a, b) =>
		a.name.localeCompare(b.name)
	);

	return sorted;
}

function searchHandler(event) {
	event.preventDefault();

	const input = document.getElementById("searchInput");
	const query = input.value.trim().toLowerCase();

	const results = filterRecipes(query);
	renderRecipes(results);
}

function init() {
	const randomRecipe = getRandomListEntry(recipes);
	renderRecipes([randomRecipe]);

	const form = document.querySelector(".search form");
	form.addEventListener("submit", searchHandler);
}

document.addEventListener("DOMContentLoaded", init);
