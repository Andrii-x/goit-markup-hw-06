const menu = document.querySelector(".mobile-menu");
const openBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".menu-close");

openBtn.addEventListener("click", () => {
  menu.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("is-open");
});
