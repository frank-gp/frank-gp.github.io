
/*

https://frank-gp.github.io/lib/js/ligthbox.js

*/

let fgp_append = document.createElement("fgp_append");
fgp_append.innerHTML = `
<div class="lightbox displayNone">
<img src="" alt="" />
</div>
<style>
img {
  /* width: 100%; */
  transition: all 0.1s;
}
img:hover {
  transform: scale(0.98);
  cursor: pointer;
  filter: grayscale(70%);
}

.lightbox {
  background-color: #0008;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  backdrop-filter: blur(3px);
}
.lightbox img {
  /* width: 80%; */
  max-width: 90%;
  max-height: 80%;
}
.lightbox img:hover {
  filter: initial;
}
.displayNone {
  display: none;
}
</style>
`;
document.body.appendChild(fgp_append);

let _contImg = document.querySelectorAll("img");
let _lightbox = document.querySelector(".lightbox");

_contImg.forEach(func_item);

function func_item(item_) {
  item_.addEventListener("click", func_handler);
  function func_handler() {
    console.log(item_.src);
    _lightbox.querySelector("img").src = item_.src;
    func_toggle();
  }
}

_lightbox.addEventListener("click", func_toggle);

function func_toggle() {
  _lightbox.classList.toggle("displayNone");
}