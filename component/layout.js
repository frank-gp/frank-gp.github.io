/* 
    <!-- <script src="https://frank-gp.github.io/component/stat.js"></script> -->
    <!-- <script src="https://frank-gp.github.io/lib/js/loader.js"></script> -->
*/

// import.js
const jsFiles = [
  // "https://frank-gp.github.io/component/stat.js",
  // "https://frank-gp.github.io/component/loader.js",
  "https://frank-gp.github.io/component/head.js",
  "https://frank-gp.github.io/component/header.js",
  "https://frank-gp.github.io/component/footer.js",
  // "https://frank-gp.github.io/lib/js/youtube-embed.js",
  // Add more optional JS files here
];

jsFiles.forEach((jsFile) => {
  import(jsFile)
    // .then((module) => {
    //   console.log(`Successfully imported: ${jsFile}`);
    // })
    .catch((error) => {
      console.error(`Failed to import: ${jsFile}`, error);
    });
});

// Dynamically import CSS files
const cssFiles = [
  "https://frank-gp.github.io/icon/icomoon/style.css",
  "https://frank-gp.github.io/component/global.css",
  // "https://frank-gp.github.io/wp-assets/style/wp-content.css",
  // Add more CSS files here
];

cssFiles.forEach((cssFile) => {
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = cssFile;
  document.head.appendChild(linkElement);
});
