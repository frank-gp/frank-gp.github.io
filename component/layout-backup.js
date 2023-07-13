// import.js
const jsFiles = [
  "https://frankgp.com/stats/send.js",
  "https://frankgp.com/lib/js/loader.js",
  "https://frankgp.com/lib/js/youtube-embed.js",
  "https://frankgp.com/component/head.js",
  "https://frankgp.com/component/header.js",
  "https://frankgp.com/component/footer.js",
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
  "https://frankgp.com/icon/icomoon/style.css",
  "https://frankgp.com/component/global.css",
  //   "https://frankgp.com/wp-assets/style/wp-content.css",
  // Add more CSS files here
];

cssFiles.forEach((cssFile) => {
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = cssFile;
  document.head.appendChild(linkElement);
});
