/*

https://frank-gp.github.io/lib/js/img-generator.js

*/

const imgGenerator = document.querySelector(".img-generator");
const imgParent = imgGenerator.parentElement;
const number = +imgGenerator.dataset.number + 1;
const base = imgGenerator.dataset.base;
let size = imgGenerator.dataset.size;

if (base == "local") {
  console.log("local");
  for (var i = 1; i < number; i++) {
    const img = document.createElement("img");
    img.src = `https://asset.com/img/img${i}.jpg`;
    imgParent.insertBefore(img, imgParent.children[i]);
    console.log(img);
  }
} else if (base == "local-num") {
  console.log("local");
  for (var i = 1; i < number; i++) {
    const img = document.createElement("img");
    img.src = `https://asset.com/num/img${i}.jpg`;
    imgParent.insertBefore(img, imgParent.children[i]);
    console.log(img);
  }
} else {
  console.log("unsplash");
  for (var i = 1; i < number; i++) {
    const img = document.createElement("img");
    img.src = `https://source.unsplash.com/${size}x${size}?${i}`;
    img.setAttribute("loading", `lazy`);
    imgParent.insertBefore(img, imgParent.children[0]);
    console.log(img);
  }
}
