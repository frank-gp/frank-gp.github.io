// ========== Title and Description... ==========

let mainTitle = document.querySelector("main .title").textContent;
let mainDescription = document.querySelector("main .description").textContent;

document.head.innerHTML += /*html*/`
    <title>${mainTitle} | Frank GP - Web Architect</title>
    <meta name="description" content="${mainDescription}" />
    `;
// ========== Title and Description. ==========

// ========== header... ==========
const header = document.createElement("header");
header.innerHTML = /*html*/`<nav>
  <a href="/" class="btn btn2">Servicios</a>
  <a href="/projects" class="btn btn2">Proyectos</a>
  <a href="/contact" class="btn btn2">Contacto</a>
  <a href="//fgp555.github.io" class="btn btn2">Acerca de</a>
</nav>
<!-- <br> -->
<!-- <br> -->
<!-- <a href="/"><img src="https://i0.wp.com/asset.fgp.one/file/fgp-profile.webp" alt="profile"/></a> -->
<!-- <h2><a href="/">Frank GP</a></h2> -->
<!-- <p>Web Architect</p> -->
`;
document.body.insertAdjacentElement("afterbegin", header);
// ========== header. ==========
// ========== footer... ==========
const footer = document.createElement("footer");
footer.innerHTML = /*html*/`
<footer>
<h3 class="title"><span style="color: transparent">----</span> Contactame<h3>
<div>
  <a href="//instagram.com/fgp555" target="_blank" class="fa fa-instagram"></a>
  <a href="//github.com/fgp555" target="_blank" class="fa fa-github"></a>
  <a href="//codepen.io/fgp555" target="_blank" class="fa fa-codepen"></a>
  <a href="//youtube.com/fgp555" target="_blank" class="fa fa-youtube-play"></a>
</div>
<h3 class="title">Redes Sociales</h3>
</footer>
`;
document.body.insertAdjacentElement("beforeend", footer);
// ========== footer. ==========
