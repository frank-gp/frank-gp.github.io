// ========== nav... ==========
let nav = document.querySelector("nav");
const navFunction = async () => {
  nav.innerHTML = await fetch(`parts/nav.html?${Date.now()}`).then((data) => data.text());
};
navFunction();
// ========== nav... ==========

// ========== footer... ==========
let footer = document.querySelector("footer");
const footerFunction = async () => {
  footer.innerHTML = await fetch(`parts/footer.html?${Date.now()}`).then((data) => data.text());
};
footerFunction();
// ========== footer. ==========
