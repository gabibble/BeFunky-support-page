let menu = document.querySelector("#nav-menu");
let menuLinks = document.querySelector("#menu-links");
let main = document.querySelector("main");

menu.addEventListener("click", () => {
  if (menuLinks.style.display == "none") {
    menuLinks.style.display = "block";
    main.style["margin-top"] = "180px";
  } else {
    menuLinks.style.display = "none";
    main.style["margin-top"] = "100px";
  }
});
