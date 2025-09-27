/*

    <!-- ========== youtube_embed component... ========== -->
    <youtube_embed data-url="https://youtu.be/oK3jROrz-CA"></youtube_embed>
    <youtube_embed data-url="https://youtu.be/5n-TKc4G7oU"></youtube_embed>

    <script src="https://frank-gp.github.io/lib/youtube-embed.js"></script>
    <!-- ========== youtube_embed component. ========== -->
    
 */


// ========== Display img... ==========

document.querySelectorAll("youtube_embed").forEach(function (element) {
  var videoUrl = element.dataset.url;
  var modifiedVideoUrl = videoUrl.replace("https://youtu.be/", "");
  // console.log(modifiedVideoUrl);
  element.innerHTML = `
<img src="https://i.ytimg.com/vi_webp/${modifiedVideoUrl}/maxresdefault.webp" alt="Thumbnail 1" />
<div class="play-icon"></div>

`;
});
// ========== Display img. ==========

// ========== loadYouTube... ==========
function loadYouTubeAPI() {
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function createYouTubePlayer(youtubeID, container) {
  new YT.Player(container, {
    videoId: youtubeID,
    // width: "100%",
    // height: "100%",
    playerVars: {
      autoplay: 1,
    },
  });
}

function onContainerClick() {
  var videoUrlFull = this.getAttribute("data-url");
  var urlID = videoUrlFull.replace("https://youtu.be/", "");

  createYouTubePlayer(urlID, this);
  this.removeEventListener("click", onContainerClick);
}

var videoContainers = document.querySelectorAll("youtube_embed");
for (var i = 0; i < videoContainers.length; i++) {
  videoContainers[i].addEventListener("click", onContainerClick);
}

window.addEventListener("load", loadYouTubeAPI);
// ========== loadYouTube. ==========

// ========== Style... ==========
document.head.innerHTML += /* html */`
<style>
youtube_embed {
  position: relative;
  display: inline-block;
  cursor: pointer;
  aspect-ratio: 16/9;

}
youtube_embed img {
  width: 100%;
  cursor: pointer;
}
iframe[src*="youtube.com"] {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* width: calc(2em * 2); */
  width: 20%;
  aspect-ratio: 13/9;
  /* height: calc(20px * 2); */
  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 29 20" fill="none"><path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 1.78814e-07 14.285 0 14.285 0C14.285 0 5.35042 1.78814e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C1.78814e-07 5.35042 0 10 0 10C0 10 1.78814e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="%23FF0000"/><path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"/></svg>');
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  transition: opacity 0.3s;
  /* filter: drop-shadow(2px 2px 4px white); */
}

youtube_embed:hover .play-icon {
  /* opacity: 0.5; */
  color: #000;
  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 29 20" fill="none"><path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 1.78814e-07 14.285 0 14.285 0C14.285 0 5.35042 1.78814e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C1.78814e-07 5.35042 0 10 0 10C0 10 1.78814e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="black"/><path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"/></svg>');
}
</style>
`;
// ========== Style. ==========
