/*

    <!-- clipboard component... -->
    <!-- <em class="clipboard">example</em> -->
    <script src="https://frank-gp.github.io/lib/clipboard.js" defer></script>
    <!-- clipboard component... -->

*/

// ========== clipboard... ==========
const _clipboard = document.querySelectorAll(".clipboard");
const _pre = document.querySelectorAll("pre");

_clipboard.forEach((item) => {
  item.addEventListener("click", () => {
    navigator.clipboard.writeText(item.textContent);
    console.log(item.textContent);
  });
});

_pre.forEach((item) => {
  item.addEventListener("click", () => {
    navigator.clipboard.writeText(item.textContent);
    console.log(item.textContent);
  });
});
// ========== clipboard. ==========

const styleSheet = document.createElement("style");
styleSheet.innerHTML = /* css */ `/*  */
.clipboard,
pre {
  cursor: pointer;
  position: relative;
}
.clipboard:hover::before,
pre:hover::before {
  content: "Copy";
  position: absolute;
  right: 5%;
  top: 5%;
  background-color: #000c;
  color: white;
  padding: 0 0.5em;
}
.clipboard:active::before,
pre:active::before {
  content: "Copied!";
}
`;
document.head.appendChild(styleSheet);
