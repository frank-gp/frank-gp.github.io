// ========== nav... ==========
let nav = document.querySelector("nav");
const navFunction = async () => {
  nav.innerHTML = await fetch(`nav.html?${Date.now()}`).then((data) => data.text());
};
navFunction();
// ========== nav... ==========

// ========== header... ==========
// let header = document.querySelector("header");
// const headerFunction = async () => {
//   header.innerHTML = await fetch(`header.html?${Date.now()}`).then((data) => data.text());
// };
// headerFunction();
// ========== header... ==========

// ========== main... ==========
// let main = document.querySelector("main");
// const mainFunction = async () => {
//   main.innerHTML = await fetch(`main.html?${Date.now()}`).then((data) => data.text());
// };
// mainFunction();
// ========== main... ==========

// ========== footer... ==========
let footer = document.querySelector("footer");
const footerFunction = async () => {
  footer.innerHTML = await fetch(`footer.html?${Date.now()}`).then((data) => data.text());
};
footerFunction();
// ========== footer. ==========
