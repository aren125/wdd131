const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',

  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
      return `${this.name} was attacked and lost 20 health!`;
    } else {
      alert(`${this.name} has died.`);
      return `${this.name} has died.`;
    }
  },

  levelUp() {
    this.level += 1;
    this.health += 20;
    return `${this.name} leveled up! Gained 1 level and 20 health.`;
  }
};

function updateCard() {
  document.querySelector(".image").src = character.image;
  document.querySelector(".image").alt = character.name;
  document.querySelector(".name").textContent = character.name;
  document.getElementById("class").textContent = character.class;
  document.getElementById("level").textContent = character.level;
  document.getElementById("health").textContent = character.health;
}

function logMessage(message) {
  document.getElementById("log").textContent = message;
}

document.getElementById("attacked").addEventListener("click", () => {
  const message = character.attacked();
  updateCard();
  logMessage(message);
});

document.getElementById("levelup").addEventListener("click", () => {
  const message = character.levelUp();
  updateCard();
  logMessage(message);
});

updateCard();
