document.addEventListener("DOMContentLoaded", function () {
  const mobileBtn = document.querySelector(".mobile__btn");
  const mobileOpen = document.querySelector(".mobile__open");
  const mobileClose = document.querySelector(".mobile__close");
  const headerNav = document.querySelector(".header__nav");

  function toggleMobileMenu() {
    headerNav.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
    mobileOpen.classList.toggle("inactive");
    mobileClose.classList.toggle("inactive");
  }

  const desktopMediaQuery = window.matchMedia("(min-width: 64em)");

  mobileBtn.addEventListener("click", toggleMobileMenu);

  function handleDesktopChange(e) {
    if (e.matches) {
      headerNav.classList.remove("open");
    }
  }
  desktopMediaQuery.addListener(handleDesktopChange);
});
