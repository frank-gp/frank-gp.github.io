/*<!-- -------- 404.html -------- -->

    <fgp_redirect>
      <!-- <p id="dev.html" title="/dev-page.html"></p> -->
      <!-- <p id="404.html" title="/404-page.html"></p> -->
      <p id="google" title="https://google.com"></p>
      <p id="example" title="https://example.com"></p>
    </fgp_redirect>

    <script src="https://frank-gp.github.io/lib/js/shortener.js" defer></script>

  <!-- -------- 404.html -------- -->*/

let fgp_redirect = document.querySelector("fgp_redirect");

let sectionElement = document.createElement("section");

let html = /*html*/ `<style>
  /* css */
  fgp_redirect {
    position: absolute;
    inset: 0;
    margin: auto;
    display: block;
    background-color: darkslateblue;
    color: white;
    padding: 1em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    z-index: 9;
  }
  fgp_redirect .message {
    display: block;
    margin-bottom: 10vh;
  }
  fgp_redirect .title {
    font-weight: 100;
    opacity: 0.8;
  }
  fgp_redirect p {
    text-align: left;
    margin-left: 40vw;
  }
  fgp_redirect a {
    color: moccasin;
    /* display: block; */
    /* padding: 0.3em; */
  }
  fgp_redirect a:hover {
    color: aqua;
  }
  fgp_redirect strong {
    /* font-size: 1.5em; */
    color: khaki;
  }
  fgp_redirect span {
    /* color: coral; */
    color: khaki;
    font-size: 3em;
  }
</style>

<h3 class="title"></h3>
<em class="message">Redirect to <strong class="url"></strong> in <span class="count">0</span> sec...</em>
`;

// document.head.appendChild(sectionElement);
// fgp_redirect.insertAdjacentHTML("beforebegin", html)
fgp_redirect.insertAdjacentHTML("afterbegin", html);

let pAll = fgp_redirect.querySelectorAll("p");

let count = document.querySelector(".count");
let countContent = count.textContent;

let path = window.location.pathname.split("/")[1];
console.log(path);

for (element of pAll) {
  // console.log(element.id);
  // console.log(element.title);
  let _a = document.createElement("a");
  _a.href = "//" + window.location.hostname + "/" + element.id;
  // console.log("//" + window.location.hostname + "/" + element.id);
  _a.textContent = window.location.hostname + "/" + element.id;
  element.appendChild(_a);

  if (element.id == path) {
    // console.log(element.id);
    // console.log(element.title);
    let url = element.title;

    const myInterval = setInterval(function2, 1000 * countContent);
    function function2() {
      console.log(url);
      clearInterval(myInterval);
      window.location.href = url;
    }

    document.querySelector("fgp_redirect .title").innerHTML = window.location.hostname + path;
    document.querySelector("fgp_redirect strong").innerHTML = url;
  }
}

// ========== timer... ==========

let interval = setInterval(function5, 1e3);
function function5() {
  countContent -= 1;
  count.innerHTML = countContent;
  countContent <= 0 && (clearInterval(interval), function3(), setTimeout(1));
  function function3(text) {
    document.querySelector(".message").innerHTML = `<h2>Page 404 not found</h2>
<hr>`;
  }
}
// ========== timer. ==========
