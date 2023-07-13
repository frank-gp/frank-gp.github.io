// import.js
const importFiles = (files, importCallback, fileType) => {
  files.forEach((file) => {
    import(file)
      .then((module) => {
        console.log(`Successfully imported ${fileType}: ${file}`);
        if (importCallback) {
          importCallback(module);
        }
      })
      .catch((error) => {
        console.error(`Failed to import ${fileType}: ${file}`, error);
      });
  });
};

// Dynamically import JavaScript files
const jsFiles = [
  // "https://frankgp.com/stats/send.js",
  // "https://frankgp.com/lib/js/loader.js",
  "https://frankgp.com/lib/js/youtube-embed.js",
  "https://frankgp.com/component/head.js",
  "https://frankgp.com/component/header.js",
  "https://frankgp.com/component/footer.js",
  // Add more optional JS files here
];

importFiles(jsFiles, null, "JavaScript");

// Dynamically import CSS files
const cssFiles = [
  "https://frankgp.com/icon/icomoon/style.css",
  "https://frankgp.com/component/global.css",
  //   "https://frankgp.com/wp-assets/style/wp-content.css",
  // Add more CSS files here
];

const addCssFile = (file) => {
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = file;
  document.head.appendChild(linkElement);
};

importFiles(cssFiles, addCssFile, "CSS");

// // ==========  ==========

// // Dynamically import CSS files
// const cssFiles = [
//   "https://frankgp.com/icon/icomoon/style.css",
//   "https://frankgp.com/component/global.css",
//   //   "https://frankgp.com/wp-assets/style/wp-content.css",
//   // Add more CSS files here
// ];

// const addCssFile = (file) => {
//   const linkElement = document.createElement("link");
//   linkElement.rel = "stylesheet";
//   linkElement.href = file;
//   // Set the MIME type for CSS
//   linkElement.type = "text/css";
//   document.head.appendChild(linkElement);
// };

// importFiles(cssFiles, addCssFile, "CSS");
