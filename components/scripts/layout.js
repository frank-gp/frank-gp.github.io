const jsFiles = [
  "./head.js?2025_01_30",
  "./header.js?2025_01_30",
  "./footer.js?2025_01_30",
  //
];

jsFiles.forEach((jsFile) => {
  import(jsFile)
    .then((module) => {
      console.log(`Successfully imported: ${jsFile}`);
    })
    .catch((error) => {
      console.error(`Failed to import: ${jsFile}`, error);
    });
});

const cssFiles = [
  "../components/styles/global.css?2025_01_30",
  "../components/styles/header.css?2025_01_30",
  "../components/styles/footer.css?2025_01_30",
  "../components/styles/btn.css?2025_01_30",
  //
];

cssFiles.forEach((cssFile) => {
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = cssFile;
  document.head.appendChild(linkElement);
});
