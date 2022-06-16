let header = document.querySelector("header");
let footer = document.querySelector("footer");

header.innerHTML = `
<a href="/" target="_blank" rel="noopener noreferrer">
<img class="logo" src="https://i.ibb.co/NjTDVX0/fgp-Web-logo.png" alt="" />
</a>
<nav>
<a class="menu active" href="/"><i class="fa fa-home"></i></a>
<a class="menu" href="doc.html">Doc</a>
<a class="menu" href="lib.html">Lib</a>
<a class="menu" href="app.html">App</a>
<a class="menu" href="about.html">About</a>
</nav>
`;

footer.innerHTML = `
<a href="/" target="_blank" rel="noopener noreferrer">
<img class="logo" src="https://i.ibb.co/NjTDVX0/fgp-Web-logo.png" alt="" />
</a>
<nav>
<a class="menu" href="http://instagram.com/fgp555/"><i class="fa fa-instagram"></i> Instagram</a>
<a class="menu" href="http://fb.com/fgp555/"><i class="fa fa-facebook"></i> Facebook</a>
<a class="menu" href="http://youtube.com/fgp555/"><i class="fa fa-youtube-play"></i> Youtube</a>
</nav>
`;
