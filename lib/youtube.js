/*

    <script src="https://frank-gp.github.io/lib/social/youtube.js"  data-youtube="https://youtu.be/1eIEGxlaOiE" defer></script>
    
*/

// ========== style... ==========
let fgpYoutubeStyle = document.createElement("style");
fgpYoutubeStyle.innerHTML = /*css*/ `
fgp-youtube {
    position: fixed;
    right: 1em;
    bottom: 1em;
    font-size: calc((1.5vw + 1.5vh) / 2);
  }
  fgp-youtube svg {
    width: 3em;
    animation: all 2s ease;
    background-color: #fff;
    padding: 0.5em;
    aspect-ratio: 1/1;
    border-radius: 50%;
    box-sizing: content-box;
    box-shadow: 0.1em 0.1em 0.4em #0004;
  }
  fgp-youtube svg:hover {
    fill: #f00;
    transform: scale(1.1);
  }
  @media (max-width: 80rem) {
    fgp-youtube {
      font-size: calc((1.8vw + 1.8vh) / 2);
      /* background-color: brown; */
    }
  }
  @media (max-width: 60rem) {
    fgp-youtube {
      font-size: calc((2.5vw + 2.5vh) / 2);
      /* background-color: midnightblue; */
    }
  }
  @media (max-width: 40rem) {
    fgp-youtube {
      font-size: calc((3vw + 3vh) / 2);
      /* background-color: darkolivegreen; */
    }
  }
`;
document.head.appendChild(fgpYoutubeStyle);
// ========== style. ==========

let data = document.querySelector("script[src*='youtube.js']");
// let data = document.querySelector('[data-youtube^="https"]');
// let data = document.querySelector('[data-youtube*="http"]');
let url = data.getAttribute("data-youtube");
// if (url) {
//   // console.log("first");
//   url = data.getAttribute("data-youtube");
// } else {
//   url = "https://youtube.com/fgp555";
// }
if (!url) url = "https://youtube.com/fgp555";

console.log(url);

let fgpYoutube = document.createElement("fgp-youtube");
fgpYoutube.innerHTML = /*html*/ `
  <a href="${url}" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
</a>
  
`;
// document.body.insertAdjacentElement("beforebegin", fgpYoutube)
document.body.appendChild(fgpYoutube);
