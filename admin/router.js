const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "../content/404.html",
  "/": "../content/home.html",
  // "/": "../content/project.html",
  "/index.html": "../content/index.html",
  "/about": "../content/about.html",
  "/project": "../content/project.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById('main-page').innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();