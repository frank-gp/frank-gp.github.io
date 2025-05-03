/* 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://frank-gp.github.io/component/stat.js"></script>
    <title>404 Not Found</title>
    <script>
      // var data = {
      //   instagram: "https://www.instagram.com/fgp555",
      //   google: "https://google.com",
      // };
    </script>
    <script src="https://frank-gp.github.io/component/404.js" defer></script>
  </head>
  <body></body>
</html>

*/

// Ensure data is initialized as an array if it doesn't exist
// var dataShortUrls = typeof dataShortUrls !== "undefined" ? dataShortUrls : [];
var dataShortUrls = dataShortUrls || [];
// var dataShortUrls = dataShortUrls ? dataShortUrls : [];

const contentHtml = /* html */ `
    <style>
      .page_404 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 3rem;
        height: 100%;
      }

      .page_404 .text {
        text-align: center;
      }

      .page_404 .text h1 {
        font-size: 8em;
        margin: 0;
      }

      .page_404 .text p {
        font-size: 1.5em;
      }

      .page_404 .text a {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 1.2em;
        text-decoration: none;
        color: inherit;
        background-color: #3498db;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        animation: bounce 2s infinite;
      }

      .page_404 .text a:hover {
        background-color: #2980b9;
      }
      
      .page_404 .shorteners {
        text-align: center;
      }
      
      .page_404 .shorteners a{
        color: cornflowerblue;
      }

      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-20px);
        }
        60% {
          transform: translateY(-10px);
        }
      }
    </style>
    <div class="page_404">
      <div class="text">
        <h1>404</h1>
        <p>Page Not Found</p>
        <a href="/">Go Home</a>
      </div>
      <div class="shorteners">
        <p>Or go to:</p>
        <ul>
          ${Object.keys(dataShortUrls)
            .map((key) => `<li><a href="${key}" target="_blank">${window.location.origin}/${key}</a></li>`)
            .join("")}
        </ul>
      </div>
    </div>
`;

// Function to check if a key exists in the data array
const redirectToValidPage = (key) => {
  console.log("Redirecting to", dataShortUrls[key]);
  if (dataShortUrls.hasOwnProperty(key)) {
    window.location.href = dataShortUrls[key];
  } else {
    var main = document.querySelector("main");

    if (!main) {
      main = document.createElement("main");
      main.id = "main";
      document.body.appendChild(main);
    }

    main.innerHTML = contentHtml;
  }
};

// Function to parse the current URL and extract the page name
const getPageName = () => {
  const pathArray = window.location.pathname.split("/");
  const pageName = pathArray[pathArray.length - 1];
  return pageName;
};

// Check if the current page exists in the data array
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = getPageName();
  redirectToValidPage(currentPage);
});
