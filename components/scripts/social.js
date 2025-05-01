/*
    <!-- ========== social component... ========== -->
    <section class="social"></section>
    <script src="https://frank-gp.github.io/component/social.js" defer></script>
    <!-- ========== social component. ========== -->

 */
var socialClass = document.querySelector(".social");

if (socialClass) {
  socialFunction();
}
function socialFunction() {
  let social = /*html*/ `
      <style>
        @import url("https://frank-gp.github.io/icon/icomoon/style.css");
        .social div {
          display: flex;
          justify-content: center;
          gap: 2em;
          margin: 3em auto;
          flex-wrap: wrap;
        }
        .social .icon {
          text-decoration: none;
          font-size: 2.5em;
          color: inherit;
          opacity: 0.7;
        }
        .social .icon:hover {
          opacity: 1;
          transform: scale(1.2);
        }
      </style>
      <div>
        <a href="http://instagram.com/fgp555" class="icon icon-instagram" target="_blank"></a>
        <!-- <a href="http://facebook.com/fgp555" class="icon icon-facebook" target="_blank"></a> -->
        <a href="http://youtube.com/fgp555" class="icon icon-youtube" target="_blank"></a>
        <a href="http://github.com/fgp555" class="icon icon-github" target="_blank"></a>
        <a href="http://codepen.io/fgp555" class="icon icon-codepen" target="_blank"></a>
        <!-- <a href="http://discord.com/invite/TcyNQ49FVD" class="icon icon-discord" target="_blank"></a> -->
        <a href="http://paypal.me/fgp555" class="icon icon-paypal" target="_blank"></a>
        <a href="http://wa.me/51918221790?text=Hello,%20Frank%20GP%20" class="icon icon-whatsapp" target="_blank"></a>
      </div>
`;

  document.querySelector(".social").innerHTML = social;
}
