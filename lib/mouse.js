/*
    
    <!-- mouse animation component... -->
    <script src="https://frank-gp.github.io/lib/js/mouse.js" defer></script>
    <!-- mouse animation component. -->

 */

// ========== style... ==========

let style_123 = document.createElement("style");
style_123.textContent = /*css*/ `
:root {
  cursor: none;
}
.circle {
  height: 24px;
  width: 24px;
  border-radius: 24px;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99999999; /* so that it stays on top of all other elements */
}`;
document.head.appendChild(style_123);

// ========== style. ==========

let num = 20;

for (let index = 1; index < num + 1; index++) {
  // const element = array[index];
  console.log(index);
  let divs = document.createElement("div");
  divs.classList.add("circle");
  document.body.appendChild(divs);
}

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = ["#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060", "#680060", "#60005f", "#48005f", "#3d005e"];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
