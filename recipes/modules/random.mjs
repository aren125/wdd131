export function random(num) {
	return Math.floor(Math.random() * num);
}

export function getRandomListEntry(list) {
	const index = random(list.length);
	return list[index];
}
