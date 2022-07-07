
const nav_ul_fgp = document.querySelector("ul");
const nav_btn_fgp = document.querySelector(".nav_btn_fgp");
const nav_faBars_fgp = document.querySelector(".fa-bars");

console.log(nav_faBars_fgp.classList.contains("fa-bars"));

nav_btn_fgp.onclick = () => {
  nav_ul_fgp.classList.toggle("ul_grid");

  if (nav_faBars_fgp.classList.contains("fa-bars")) {
    nav_faBars_fgp.classList.replace("fa-bars", "fa-times");
  } else if (nav_faBars_fgp.classList.contains("fa-times")) {
    nav_faBars_fgp.classList.replace("fa-times", "fa-bars");
  }
};
