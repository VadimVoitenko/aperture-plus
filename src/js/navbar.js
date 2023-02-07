// Mobile menu burger
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });

  // navbar breakpoint
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

// call this function, if we need to close the modal when the button is clicked
function handleCloseModal() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  const menuButtons = document.querySelectorAll(".menu__list-item");

  menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        burger.classList.remove("active-burger");
        body.classList.remove("locked");
      }
    });
  });
}

window.addEventListener("click", handleCloseModal);

// call this function, if we need to fix the menu when scrolling
function fixedNav() {
  const nav = document.querySelector("nav");

  // here it's indicated in pixels how much to scroll to make our menu fixed
  const breakpoint = 1;
  if (window.scrollY >= breakpoint) {
    nav.classList.add("fixed__nav");
  } else {
    nav.classList.remove("fixed__nav");
  }
}
window.addEventListener("scroll", fixedNav);
