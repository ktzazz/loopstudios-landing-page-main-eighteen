document.addEventListener("DOMContentLoaded", function () {
  const mobileBtn = document.querySelector(".mobile__btn");
  const mobileOpen = document.querySelector(".mobile__open");
  const mobileClose = document.querySelector(".mobile__close");
  const headerNav = document.querySelector(".header__nav");
  const headerMenu = document.querySelector(".header__menu");

  const notDesktop = window.matchMedia("(max-width: 64em)").matches;

  if (notDesktop) {
    headerMenu.classList.add("mobile");
    mobileBtn.addEventListener("click", function () {
      if (mobileClose.classList.contains("inactive")) {
        mobileOpen.classList.add("inactive");
        mobileClose.classList.remove("inactive");
        /* headerNav.style.display = "block"; */
        headerMenu.classList.add("open");
      } else {
        mobileOpen.classList.remove("inactive");
        mobileClose.classList.add("inactive");
        /* headerNav.style.display = "none"; */
        headerMenu.classList.remove("open");
      }
    });
  }
});
