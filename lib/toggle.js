/*
    <!-- ========== toggle component... ========== -->
    <article class="display_toggle">article</article>
    <script src="https://frank-gp.github.io/component/toggle.js" defer></script>
    <!-- ========== toggle component. ========== -->

 */

// ========== hideParagraphs ==========
function hideParagraphs() {
  const elements = document.querySelectorAll(".display_toggle");
  elements.forEach((element) => {
    element.style.display = "none";
  });
}
hideParagraphs();
// ========== hideParagraphs ==========

let ctrlKeyPressed = false;
let lastKeyPressTime = 0;
const toggleClass = ".display_toggle";
const doubleCtrlSInterval = 500; // Maximum time between two Ctrl + S presses (in milliseconds)

document.addEventListener("keydown", function (event) {
  event.preventDefault(); // Prevent the default browser save behavior

  if (event.key === "Control" || event.key === "Meta") {
    ctrlKeyPressed = true;
  }

  if (event.key === "s" || event.key === "S") {
    if (ctrlKeyPressed) {
      const currentTime = new Date().getTime();
      if (currentTime - lastKeyPressTime < doubleCtrlSInterval) {
        event.preventDefault(); // Prevent the default browser save behavior
        const elements = document.querySelectorAll(toggleClass);
        elements.forEach((element) => {
          element.style.display = element.style.display === "none" ? "block" : "none";
        });
      }
      lastKeyPressTime = currentTime;
    }
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Control" || event.key === "Meta") {
    ctrlKeyPressed = false;
  }
});
