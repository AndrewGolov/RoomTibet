document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".burger-menu__list")
      .classList.toggle("open");
      document.querySelector(".burgerBtn").classList.toggle("open");
  });
});