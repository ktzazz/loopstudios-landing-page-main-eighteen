document.addEventListener("DOMContentLoaded", function () {
  const mobileBtn = document.querySelector(".mobile__btn");
  const mobileOpen = document.querySelector(".mobile__open");
  const mobileClose = document.querySelector(".mobile__close");
  const headerNav = document.querySelector(".header__nav");

  mobileBtn.addEventListener("click", function () {
    if (mobileClose.classList.contains("inactive")) {
      mobileOpen.classList.add("inactive");
      mobileClose.classList.remove("inactive");
      headerNav.style.display = "block";
      headerNav.classList.add("open");
    } else {
      mobileOpen.classList.remove("inactive");
      mobileClose.classList.add("inactive");
      headerNav.style.display = "none";
      headerNav.classList.remove("open");
    }
  });
});
