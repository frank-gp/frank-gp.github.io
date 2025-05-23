const authToken = localStorage.getItem("authToken");
const authUser = JSON.parse(localStorage.getItem("authUser"));

if (!authToken || !authUser) {
  document.body.innerHTML = `<p>You are <a href="/login">logged in!</a>.</p>`;
} else {
  const button = `
            <style>
            #logoutButton {
                padding: 10px;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                position: absolute;
                top: 0.5em;
                right: 0.5em;
                width: 100px;
                background-color: crimson;
            }
            #logoutButton:hover {
                background-color: red;
            }
            </style>
          <button id="logoutButton" onclick="logout()">Logout</button>
        `;
  document.body.insertAdjacentHTML("beforeend", button);
}

function logout() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("authUser");
  window.location.href = "/login";
}
