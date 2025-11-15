/*
    <script src="https://frank-gp.github.io/component/header.js"></script>
    <header-component></header-component>
*/
let header_html = /*html */ `<!-- html... -->
<section>
    <div class="btn_container">
        <div class="logo">
            <i class="btn_navbar icon-menu"></i>
            <h2><a href="/" >Frank<span class="mobile-none"> GP</span></a></h2>
        </div>
        <div class="search_container">
            <input type="text" placeholder="Search blog" class="searchInput" autofocus>
            <i class="icon-search"></i>
        </div>
    </div>
    <nav>
        <ul id="navbar" class="display_none">
          <li><a href="https://frank-gp.github.io/">Home</a></li>
          <li><a href="https://frank-gp.github.io/app/">Web App</a></li>
          <li><a href="https://frank-gp.github.io/lib/">Web Lib</a></li>
          <li><a href="https://frank-gp.github.io/component/">Web Component</a></li>
          <li><a href="https://fgp555.github.io/app">Windows Apps</a></li>
            <li><a href="https://frank-gp.github.io/about/">About</a></li>
            <li><a href="https://frank-gp.github.io/contact/">Contact</a></li>
        </ul>
    </nav>


</section>
<!-- html. -->`;


let header_css = /*css */ `/* css... */
@import url(https://frank-gp.github.io/icon/icomoon/style.css);
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap");

:host {
  display: block;
  color: var(--color1);
  background: indigo;
  padding: 1em;
  /* font: inherit; */
  font-family: "Work Sans", sans-serif;

}
* {
  /* border: 1px dashed #0808; */
  margin: 0;
  box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: var(--hover);
}
ul {
  padding: 1em 0;
}
ul li {
  list-style: none;
  padding: 0 3vw;
  font-size: 1.2em;
  margin-top:0.8em;
}
.btn_container {
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
}
.btn_container .logo {
  display: flex;
  align-items: center;
  gap: 3em;
}
.btn_navbar {
  /* position: absolute; */
  /* top: 50%; */
  /* left: 1em; */
  /* right: 1em; */
  /* transform: translate(-50%, -50%); */
  /* transform: translateY(-50%); */
  cursor: pointer;
  font-size: 1.5em;
}
.display_none {
  display: none;
}

.searchInput {
  outline: none;
  border-radius: 1em;
  border: none;
  padding: 0.6em 0 0.6em 2.5em;
  width: 100%;
}
.search_container {
  position: relative;
}
.search_container i {
  position: absolute;
  left: 0.5em;
  color: #0008;
  top: 50%;
  transform: translateY(-50%);
}
/* css. */

@media (max-width: 30rem) {

  .mobile-none {
    display: none;
  }
}
`;

class headerComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    const header = document.createElement("header");

    style.append(header_css);
    header.innerHTML = header_html;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(header);
    //   shadowRoot.innerHTML = html
    //   shadowRoot.insertAdjacentElement("afterbegin", style)

    const btn_navbar = shadowRoot.querySelector(".btn_navbar");
    btn_navbar.addEventListener("click", () => {
      btn_navbar.classList.toggle("icon-menu");
      btn_navbar.classList.toggle("icon-close");

      const navbar = shadowRoot.querySelector("#navbar");
      navbar.classList.toggle("display_none");
    });

    let searchInput = shadowRoot.querySelector(".searchInput");
    searchInput.onchange = () => {
      const url = `https://www.youtube.com/results?search_query=${searchInput.value}%20Frank%20GP`;
      // window.open(url, '_blank');
      window.location.href = url;
      // console.log(url);
    };
  }
}
customElements.define("header-component", headerComponent);


