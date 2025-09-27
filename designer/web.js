/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://frank-gp.github.io/component/stat.js" type="module"></script>
    <script src="https://frank-gp.github.io/designer/web.js" defer></script>
  </head>
  <body></body>
</html>
*/
let head1 = /*html*/ `
    
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#347" />
<meta name="author" content="Frank GP" />
<meta name="site_locale" content="en_RU" />
<meta name="robots" content="index" />

<title>Designer | Frank GP</title>
<meta name="description" content="I create modern, responsive, and user-friendly websites using HTML, CSS, and JavaScript." />

<meta property="og:title" content="Designer | Frank GP" />
<meta property="og:description" content="I create modern, responsive, and user-friendly websites using HTML, CSS, and JavaScript." />
<meta property="fb:app_id" content="1526445401046904" />
<meta property="og:locale" content="en_RU" />
<meta property="og:type" content="Website" />
<meta property="og:site_name" content="Enye®" />
<meta property="og:url" content="https://frank-gp.github.io/designer/" />
<meta property="og:image" content="https://i.postimg.cc/mDyMcztp/fb-cover.png" />
<meta property="og:image:width" content="600" />
<meta property="og:image:height" content="314" />

<link rel="icon" href="https://i.postimg.cc/g2hxXX7y/favicon-150px.png" sizes="32x32" />
<link rel="icon" href="https://i.postimg.cc/66VzRqkX/favicon-256px.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://i.postimg.cc/66VzRqkX/favicon-256px.png" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

<!-- <link rel="stylesheet" href="style.css?220708" /> -->
<style>
  body {
    background-color: #347;
    background-image: url(https://i.postimg.cc/XYRBgC2K/bg.webp);
    background-size: cover;
    background-attachment: fixed;
    text-align: center;
    color: #fff;
    font-family: Verdana, Geneva, sans-serif;
    font-size: 14px;
    font-display: optional;
  }

  main {
    max-width: 360px;
    background-color: #74a;
    background: var(--bg1);
    margin: 10vh auto;
    padding: 50px 20px;
    box-shadow: 10px 10px 10px #0005;
    backdrop-filter: blur(5px);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .fa {
    font-size: 1rem;
  }

  .icon {
    display: inline-block;
    color: inherit;
    border: 1px solid;
    padding: 5px;
    margin: 10px;
  }

  .btn {
    display: block;
    border: 1px solid;
    padding: 10px;
    margin: 10px;
    position: relative;
  }

  .btn:hover,
  .icon:hover {
    background-color: #fff3;
  }

  .btn i {
    position: absolute;
    left: 30px;
  }

  header img {
    border-radius: 50%;
    box-shadow: 0 0 0 5px #f3a, 0 0 0 10px #eed;
  }

  header p {
    width: 32ch;
    margin: 1rem auto;
  }

  footer {
    margin: 30px;
  }

  address {
    font-size: 0.8rem;
    font-style: normal;
  }

  cite {
    padding: 2rem;
  }

  cite:hover {
    background-color: brown;
  }

  cite a {
    text-decoration: underline;
    border-bottom: 1px solid;
  }

  cite a:hover {
    color: gold;
  }

  @media (max-width: 1.2rem) {
    .btn i {
      display: none;
    }
  }

  :root {
    --bg1: linear-gradient(45deg, #38cf, #74ac, #f3af);
  }
</style>
`;

document.head.innerHTML = head1;
// document.head.innerHTML = "";

// ========== body... ==========

let body1 = /*html*/ `
<main>
  <header>
    <div>
      <img src="https://github.com/fgp555.png" alt="web designer" width="120" height="120" />
    </div>
    <h3>Frank GP</h3>
    <h1>WEB DESIGNER</h1>
    <p>I create modern, responsive, and user-friendly websites using HTML, CSS, and JavaScript.</p>
  </header>

  <nav>
    <a class="btn" href="https://www.figma.com/@fgp555" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-figma"></i> Figma
    </a>
    <a class="btn" href="https://codepen.io/fgp555" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-codepen"></i> Codepen
    </a>
    <a class="btn" href="mailto:fgp555@example.com" target="_blank" rel="noopener noreferrer">
      <i class="fa-regular fa-envelope"></i> Mail
    </a>
  </nav>

  <h2>Contact Me If You Need:</h2>
  <p>Responsive Website Design</p>
  <p>UI/UX for Web and Mobile</p>
  <p>Website Redesign</p>
  <p>Landing Pages</p>

  <footer>
    <a href="http://instagram.com/fgp555" class="icon" target="_blank" rel="noopener noreferrer" aria-label="instagram">
      <i class="fa-brands fa-instagram"></i>
    </a>
    <a href="http://linkedin.com/in/fgp555" class="icon" target="_blank" rel="noopener noreferrer" aria-label="linkedin">
      <i class="fa-brands fa-linkedin"></i>
    </a>
    <address><i class="fa-solid fa-location-dot"></i> Juliaca, Perú</address>
  </footer>
</main>

<cite>
  <small>
    © 2025 Designed by
    <a href="http://frankgp.com" target="_blank" rel="noopener noreferrer" aria-label="link">frankgp.com</a>
  </small>
</cite>

`;

// document.body.insertAdjacentHTML("afterbegin", body1);
document.body.innerHTML = body1;
// document.body.innerHTML = "";

// ========== body. ==========
