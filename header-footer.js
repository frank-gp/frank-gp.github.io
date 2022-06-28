// import {} from "https://frankgp.com/lib/fgp/fgp_ig.js";
import * as instagram from "https://frankgp.com/lib/fgp/fgp_ig.js";

let header = document.querySelector("header");
let footer = document.querySelector("footer");

header.innerHTML = `
<a href="/" rel="noopener noreferrer">
<h2 class="title-nav">Frank GP <span>Web Architect</span></h2>
</a>
<nav>
<a class="menu" href="app.html">App</a>
<a class="menu" href="lib.html">Lib</a>
<a class="menu" href="doc.html">Doc</a>
<a class="menu" href="services">Services</a>
<a class="menu" href="contact">Contact</a>
</nav>
`;

footer.innerHTML = `
<a href="/" rel="noopener noreferrer">
<h2 class="title-nav">Frank GP <span>Web Architect</span></h2>
</a>
<nav>
<a class="menu" target="_blank" href="http://instagram.com/fgp555/"><i class="fa fa-instagram"></i> Instagram</a>
<a class="menu" target="_blank" href="http://fb.com/fgp555/"><i class="fa fa-facebook"></i> Facebook</a>
<a class="menu" target="_blank" href="http://youtube.com/fgp555/"><i class="fa fa-youtube-play"></i> Youtube</a>
</nav>
`;

// ========== Head import ==========

var ajax = new XMLHttpRequest();
ajax.open("GET", "template-head.html", false);
ajax.send();
document.head.innerHTML = ajax.responseText + document.head.innerHTML;
