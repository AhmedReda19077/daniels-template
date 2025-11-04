  const navbar = document.getElementById("navID");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
  });