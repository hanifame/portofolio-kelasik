document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("#navLinks");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      const isOpen = navLinks.classList.contains("show");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }
});
