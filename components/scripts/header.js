let fgp_header_html = /* html */ `<section>
  <div class="btn_container">
    <div class="logo">
      <i class="btn_navbar icon-menu"></i>
      <h2>
        <a href="/">Frank<span class="mobile-none"> GP</span></a>
      </h2>
    </div>
    <div class="search_container">
      <input type="text" placeholder="Search" class="searchInput" autofocus />
      <i class="icon-search"></i>
    </div>
  </div>
  <nav>
    <ul id="navbar" class="display_none">
      <li><a href="https://frankgp.com/">Home</a></li>
      <li><a href="https://frankgp.com/team/">Team</a></li>
      <li><a href="https://frankgp.com/cv/">CV</a></li>
      <li><a href="https://frankgp.com/portfolio">Portfolio</a></li>
      <li><a href="https://frankgp.com/contact/">Contact</a></li>
    </ul>
  </nav>
</section>
<!-- html. -->
`;

// ========== fgp_header ==========
var fgp_header = document.querySelector("header");

if (!fgp_header) {
  fgp_header = document.createElement("header");
  fgp_header.id = "fgp_header";
  document.body.insertAdjacentElement("afterbegin", fgp_header);
}

fgp_header.innerHTML = fgp_header_html;

// ========== button nav ==========
const btn_navbar = document.querySelector(".btn_navbar");
btn_navbar.addEventListener("click", () => {
  btn_navbar.classList.toggle("icon-menu");
  btn_navbar.classList.toggle("icon-close");

  const navbar = document.querySelector("#navbar");
  navbar.classList.toggle("display_none");
});

// ========== Search ==========
let searchInput = document.querySelector(".searchInput");
searchInput.onchange = () => {
  const url = `https://www.youtube.com/results?search_query=${searchInput.value}%20Frank%20GP`;
  // window.open(url, '_blank');
  window.location.href = url;
  // console.log(url);
};
