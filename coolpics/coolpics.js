const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (event) => {
  const clickedImg = event.target.closest("img");
  if (!clickedImg) return;

  const src = clickedImg.getAttribute("src");
  const alt = clickedImg.getAttribute("alt");

  
  const fullSrc = src.split("-")[0] + "-full.jpeg";

  
  const modal = document.createElement("dialog");
  modal.innerHTML = `
    <img src="${fullSrc}" alt="${alt}">
    <button class="close-viewer" aria-label="Close image viewer">X</button>
  `;

  document.body.appendChild(modal);
  modal.showModal();

  const closeButton = modal.querySelector(".close-viewer");
  closeButton.addEventListener("click", () => {
    modal.close();
    modal.remove();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.close();
      modal.remove();
    }
  });
});