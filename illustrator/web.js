/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <!--     https://github.com/enyeinnovation/illustrator -->
    <script src="https://frankgp.com/stats/send.js" type="module"></script>
    <script src="https://enyeinnovation.github.io/illustrator/web.js" defer></script>
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

    <title>Illustrator | Elizabeths Rosacea</title>
    <meta name="description" content="I specialize in creating vector illustrations in Adobe Illustrator." />

    <meta property="og:title" content="Illustrator | Elizabeths Rosacea" />
    <meta property="og:description" content="I specialize in creating vector illustrations in Adobe Illustrator." />
    <meta property="fb:app_id" content="1526445401046904" />
    <meta property="og:locale" content="en_RU" />
    <meta property="og:type" content="Website" />
    <meta property="og:site_name" content="Enye®" />
    <meta property="og:url" content="https://frankgp.com/illustrator/" />
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
      <img src="https://i.postimg.cc/FsJq2NqC/profile.webp" alt="illustrator" width="120" height="120" />
    </div>
    <h3>Elizabeths Rosacea</h3>
    <h1>ILLUSTRATOR</h1>
    <p>I specialize in creating vector illustrations in Adobe Illustrator.</p>
  </header>

  <nav>
    <a class="btn" href="http://behance.net/elizavewestley" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-behance"></i> Portfolio in Behance
    </a>
    <a class="btn" href="http://instagram.com/lizzie.illustrator/" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-instagram"></i> Blog in Instagram
    </a>
    <a class="btn" href="mailto:email@example.com" target="_blank" rel="noopener noreferrer">
    <i class="fa-regular fa-envelope"></i> E-Mail
    </a>
  </nav>

  <h2>Contact Me If You Need:</h2>
  <p>Corporate identity</p>
  <p>Flat illustrations</p>
  <p>Illustrations for your brand</p>
  <p>Icon and logo</p>

  <footer>
    <a href="http://instagram.com/elizabeths.rosacea" class="icon" target="_blank" rel="noopener noreferrer" aria-label="instagram">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="http://vk.com/elizaveta_martovskay" class="icon" target="_blank" rel="noopener noreferrer" aria-label="vk">
      <i class="fab fa-vk"></i>
    </a>
    <address>
      <i class="fas fa-map-marker-alt"></i> Saint Petersburg, Russian Federations
    </address>
  </footer>
</main>

<cite>
  <small>© 2022 Designed by 
    <a href="http://frankgp.com" target="_blank" rel="noopener noreferrer" aria-label="link">frankgp.com</a>
  </small>
</cite>

`;

// document.body.insertAdjacentHTML("afterbegin", body1);
document.body.innerHTML = body1;
// document.body.innerHTML = "";

// ========== body. ==========
