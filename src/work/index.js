const Navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (Navbar) {
    if (window.scrollY > 10) {
      Navbar.classList.add("nav-shadow");
    } else {
      Navbar.classList.remove("nav-shadow");
    }
  }
});
