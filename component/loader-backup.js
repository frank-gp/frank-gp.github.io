/* 
<img src="https://source.unsplash.com/1080x1080" alt="" />
*/
// ========== fgp_loading ==========
let fgp_loading_css = /* html */ `    <style>
/* body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
} */

fgp_loading {
  display: none;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  position: absolute;
  z-index: 9;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>`;
var fgp_loading = document.querySelector("fgp_loading");

if (!fgp_loading) {
  fgp_loading = document.createElement("fgp_loading");
  fgp_loading.id = "fgp_loading";
  document.body.insertAdjacentElement("afterbegin", fgp_loading);
}

// fgp_loading.innerHTML = fgp_loading_css;
document.head.innerHTML += fgp_loading_css
// Show the spinner when the page starts loading
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("fgp_loading").style.display = "block";
});

// Hide the spinner when the page has fully loaded
window.addEventListener("load", function () {
  document.getElementById("fgp_loading").style.display = "none";
});
