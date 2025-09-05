const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

let baseUrl;
if (isLocal) {
  baseUrl = "/"; // en local usa rutas relativas
} else {
  baseUrl = "https://frank-gp.github.io/"; // en producción usa URLs completas
}

// import.js
const jsFiles = [
  "component/head.js",
  "component/header.js",
  "component/footer.js", //
].map((file) => baseUrl + file);

jsFiles.forEach((jsFile) => {
  import(jsFile).catch((error) => {
    console.error(`Failed to import: ${jsFile}`, error);
  });
});

// CSS dinámico
const cssFiles = [
  "component/global.css", //
].map((file) => baseUrl + file);

cssFiles.forEach((cssFile) => {
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = cssFile;
  document.head.appendChild(linkElement);
});
