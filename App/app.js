const btn_menu = document.getElementById("btn_menu");
const navbar = document.getElementById("navbar");
const loader = document.getElementById("proloader");
const btn_icon_menu = document.getElementById("btn_icon_menu");
const menu = document.getElementById("navbar");

const ChangeIcon = () => {
  let value = btn_icon_menu.classList.contains("fa-bars");

  if (value) {
    btn_icon_menu.classList.replace("fa-bars", "fa-times");
  } else {
    btn_icon_menu.classList.replace("fa-times", "fa-bars");
  }
};

menu.addEventListener("click", () => {
  navbar.classList.remove("height");
  ChangeIcon();
});

btn_menu.addEventListener("click", () => {
  navbar.classList.toggle("height");
  ChangeIcon();
});

window.addEventListener("load", (e) => {
  loader.style.display = "none";
});

/************************** */



