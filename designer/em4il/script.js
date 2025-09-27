let captchaText = document.querySelector("#captcha");
let userText = document.querySelector("#textBox");
let submitButton = document.querySelector("#submit");
let output = document.querySelector("#output");
let refreshButton = document.querySelector("#refresh");

let alphaNums = [
  // "A",
  // "B",
  // "C",
  // "D",
  // "E",
  // "F",
  // "G",
  // "H",
  // "I",
  // "J",
  // "K",
  // "L",
  // "M",
  // "N",
  // "O",
  // "P",
  // "Q",
  // "R",
  // "S",
  // "T",
  // "U",
  // "V",
  // "W",
  // "X",
  // "Y",
  // "Z",
  // "a",
  // "b",
  // "c",
  // "d",
  // "e",
  // "f",
  // "g",
  // "h",
  // "i",
  // "j",
  // "k",
  // "l",
  // "m",
  // "n",
  // "o",
  // "p",
  // "q",
  // "r",
  // "s",
  // "t",
  // "u",
  // "v",
  // "w",
  // "x",
  // "y",
  // "z",
  // "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
let emptyArr = [];
for (let i = 1; i <= 3; i++) {
  emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
captchaText.innerHTML = emptyArr.join("");

userText.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    if (userText.value === captchaText.innerHTML) {
      output.classList.add("greenText");
      // output.innerHTML = "Correct!";
      output.innerHTML = em4il;
    } else {
      output.classList.add("redText");
      output.innerHTML = "Incorrect, please try again";
    }
  }
});
// fgp-----------------------------
var part1 = "elizabeth.rosacea";
var part2 = Math.pow(2, 6);
var part3 = String.fromCharCode(part2);
var part4 = "gmail&#46;com";
var part5 = part1 + String.fromCharCode(part2) + part4;
let em4il = "<a href=" + "mai" + "lto" + ":" + part5 + ">" + part1 + part3 + part4 + "</a>";

// fgp-----------------------------

submitButton.addEventListener("click", function () {
  if (userText.value === captchaText.innerHTML) {
    output.classList.add("greenText");
    // output.innerHTML = "Correct!";
    output.innerHTML = em4il;
    // output.innerHTML = "Correct!";
  } else {
    output.classList.add("redText");
    // output.innerHTML = em4il;
    output.innerHTML = "Incorrect, <br> please try again";
  }
});

refreshButton.addEventListener("click", function () {
  userText.value = "";
  let refreshArr = [];
  for (let j = 1; j <= 7; j++) {
    refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
  }
  captchaText.innerHTML = refreshArr.join("");
  output.innerHTML = "";
});

submitButton.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    if (userText.value === captchaText.innerHTML) {
      console.log("correct!");
      output.classList.add("greenText");
      // output.innerHTML = "Correct!5";
      output.innerHTML = em4il;
    } else {
      output.classList.add("redText");
      output.innerHTML = "<u>Incorrect, <br> please try again</u>";
    }
  }
});
