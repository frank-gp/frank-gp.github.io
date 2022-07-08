//   ========== path ==========
let main = document.querySelector("main");
let pathName = window.location.pathname;
//   pathName = "/";
//   pathName = "/dev.html";
//   pathName = "/dev";

console.log(pathName); // /index.html
pathNameSplit = pathName.split("."); // /index , html
console.log(pathNameSplit[0]); //index
console.log(pathNameSplit[1]); //html
// ========== Conticional... ==========
if (pathNameSplit[1] === "html") {
  // ========== SI tiene /index.html ==========
  console.log("SI tiene: /index.html");
  console.log("pathNameSplitHtml");
  const pathNameSplitHtml = async () => {
    main.innerHTML = await fetch(`pages${pathName}?${Date.now()}`).then(
      (data) => data.text()
    );
  };
  pathNameSplitHtml();
} else {
  // ========== SIN .html / ==========
  console.log("SIN .html");
  if (pathName === "/") {
    console.log("SIN .html: /");
    console.log("pathNameSplit");
    const pathNameSplit = async () => {
      main.innerHTML = await fetch(`pages/index.html?${Date.now()}`).then(
        (data) => data.text()
      );
    };
    pathNameSplit();
  } else {
    // ========== SIN .html /index ==========
    console.log("SIN .html: /index");
    const mainFunctionIndex = async () => {
      main.innerHTML = await fetch(`pages${pathName}.html?${Date.now()}`).then(
        (data) => data.text()
      );
    };
    mainFunctionIndex();
  }
}
// ========== Conticional. ==========
