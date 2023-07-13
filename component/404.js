/* 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404 Not Found</title>
    <script>
      // var data = {
      //   google: "https://google.com",
      //   google2: "https://google2.com",
      // };
    </script>
    <script src="404.js" defer></script>
  </head>
  <body></body>
</html>

*/

// Ensure data is initialized as an array if it doesn't exist
var data = data || [];
// const data = data ? data : [];

const contentHtml = /* html */ `
    <style>
      .page_404 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
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
    </div>
`;

// Function to check if a key exists in the data array
const redirectToValidPage = (key) => {
  if (data.hasOwnProperty(key)) {
    window.location.href = data[key];
  } else {
    // document.querySelector("main").innerHTML = contentHtml;
    // ========== main ==========
    var main = document.querySelector("main");

    if (!main) {
      main = document.createElement("main");
      main.id = "main";
      // document.body.insertAdjacentElement("beforeend", main);
      document.body.appendChild(main);
    }

    main.innerHTML = contentHtml;
  }
};

// Function to parse the current URL and extract the page name
const getPageName = () => {
  const pathArray = window.location.pathname.split("/");
  return pathArray[pathArray.length - 1];
};

// Check if the current page exists in the data array
window.onload = () => {
  const currentPage = getPageName();
  redirectToValidPage(currentPage);
};
