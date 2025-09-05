const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

let baseUrl;
if (isLocal) {
  baseUrl = "/"; // en local usa rutas relativas
} else {
  baseUrl = "https://frank-gp.github.io/"; // en producción usa URLs completas
}

// CSS dinámico
const cssFiles = ["component/header.css"].map((file) => baseUrl + file);

cssFiles.forEach((cssFile) => {
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = cssFile;
  document.head.appendChild(linkElement);
});

let fgp_header_html = /*html */ `
<header class="fgp-header">
  <div class="header-container">
    <!-- Logo and Menu Section -->
    <div class="logo-section">
      <button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
        <span class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <a href="${baseUrl}" class="logo">
        <div class="logo-icon">FGP</div>
        <h1 class="logo-text">
          Frank<span class="mobile-hidden"> GP</span>
        </h1>
      </a>
    </div>

    <!-- Search Section -->
    <div class="search-section">
      <div class="search-container">
        <input 
          type="search" 
          class="search-input" 
          placeholder="Search YouTube..."
          aria-label="Search"
          autocomplete="off"
        />
        <button class="search-button" aria-label="Search">
          <i class="icon-search"></i>
        </button>
        <div class="search-suggestions" id="searchSuggestions"></div>
      </div>
    </div>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav" aria-label="Main navigation">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="${baseUrl}" class="nav-link">
            <i class="icon-home"></i>
            <span>Home</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="${baseUrl}app/" class="nav-link">
            <i class="icon-apps"></i>
            <span>Web Apps</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="${baseUrl}lib/" class="nav-link">
            <i class="icon-library"></i>
            <span>Libraries</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="${baseUrl}component/" class="nav-link">
            <i class="icon-puzzle"></i>
            <span>Components</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle">
            <i class="icon-user"></i>
            <span>More</span>
            <i class="icon-chevron-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li><a href="${baseUrl}about/">About</a></li>
            <li><a href="${baseUrl}portfolio/">Portfolio</a></li>
            <li><a href="${baseUrl}cv/">CV</a></li>
            <li><a href="${baseUrl}team/">Team</a></li>
            <li><a href="${baseUrl}support/">Support</a></li>
            <li><a href="${baseUrl}contact/">Contact</a></li>
          </ul>
        </li>
      </ul>
    </nav>

    <!-- Theme Toggle -->
    <button class="theme-toggle" aria-label="Toggle theme">
      <i class="icon-sun"></i>
      <i class="icon-moon"></i>
    </button>
  </div>

  <!-- Mobile Navigation -->
  <nav class="mobile-nav" aria-label="Mobile navigation">
    <ul class="mobile-nav-list">
      <li class="mobile-nav-item">
        <a href="${baseUrl}" class="mobile-nav-link">
          <i class="icon-home"></i>
          <span>Home</span>
        </a>
      </li>
      <li class="mobile-nav-item">
        <a href="${baseUrl}app/" class="mobile-nav-link">
          <i class="icon-apps"></i>
          <span>Web Apps</span>
        </a>
      </li>
      <li class="mobile-nav-item">
        <a href="${baseUrl}lib/" class="mobile-nav-link">
          <i class="icon-library"></i>
          <span>Libraries</span>
        </a>
      </li>
      <li class="mobile-nav-item">
        <a href="${baseUrl}component/" class="mobile-nav-link">
          <i class="icon-puzzle"></i>
          <span>Components</span>
        </a>
      </li>
      <li class="mobile-nav-item">
        <a href="${baseUrl}about/" class="mobile-nav-link">
          <i class="icon-user"></i>
          <span>About</span>
        </a>
      </li>
      <li class="mobile-nav-item">
        <a href="${baseUrl}portfolio/" class="mobile-nav-link">
          <i class="icon-briefcase"></i>
          <span>Portfolio</span>
        </a>
      </li>
      <li class="mobile-nav-item">
        <a href="${baseUrl}cv/" class="mobile-nav-link">
          <i class="icon-document"></i>
          <span>CV</span>
        </a>
      </li>
      <li class="mobile-nav-item">
        <a href="${baseUrl}contact/" class="mobile-nav-link">
          <i class="icon-mail"></i>
          <span>Contact</span>
        </a>
      </li>
    </ul>
  </nav>

  <!-- Backdrop -->
  <div class="backdrop"></div>
</header>
`;

// ========== Enhanced Header Creation ==========
class FGPHeaderManager {
  constructor() {
    this.isMenuOpen = false;
    this.currentTheme = localStorage.getItem("fgp-header-theme") || "dark";
    this.searchSuggestions = [
      "React Native tutorials",
      "Flutter development",
      "JavaScript best practices",
      "Mobile app design",
      "Web components guide",
    ];

    // Environment info
    this.baseUrl = baseUrl;
    this.isLocal = isLocal;

    this.init();
  }

  init() {
    this.createHeader();
    this.attachEventListeners();
    this.setupTheme();
    this.setupKeyboardNavigation();

    console.log(`🚀 FGP Header initialized in ${this.isLocal ? "LOCAL" : "PRODUCTION"} mode`);
    console.log(`📍 Base URL: ${this.baseUrl}`);
  }

  createHeader() {
    let fgp_header = document.querySelector("fgp_header");

    if (!fgp_header) {
      fgp_header = document.createElement("fgp_header");
      fgp_header.id = "fgp_header";
      document.body.insertAdjacentElement("afterbegin", fgp_header);
    }

    fgp_header.innerHTML = fgp_header_html;
    fgp_header.querySelector(".fgp-header").setAttribute("data-theme", this.currentTheme);
  }

  attachEventListeners() {
    // Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
      menuToggle.addEventListener("click", () => this.toggleMobileMenu());
    }

    // Backdrop
    const backdrop = document.querySelector(".backdrop");
    if (backdrop) {
      backdrop.addEventListener("click", () => this.closeMobileMenu());
    }

    // Search functionality
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-button");

    if (searchInput) {
      searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.performSearch();
        }
      });

      searchInput.addEventListener("input", (e) => {
        this.showSearchSuggestions(e.target.value);
      });

      searchInput.addEventListener("focus", () => {
        if (searchInput.value) {
          this.showSearchSuggestions(searchInput.value);
        }
      });

      searchInput.addEventListener("blur", () => {
        setTimeout(() => this.hideSearchSuggestions(), 200);
      });
    }

    if (searchButton) {
      searchButton.addEventListener("click", () => this.performSearch());
    }

    // Theme toggle
    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => this.toggleTheme());
    }

    // Close mobile menu when clicking nav links
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => this.closeMobileMenu());
    });

    // Enhanced navigation tracking
    const allNavLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
    allNavLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        const isInternal = href.startsWith(this.baseUrl) || href.startsWith("/");

        console.log(`Navigation: ${href} (${isInternal ? "internal" : "external"})`);

        // Add loading state for internal links
        if (isInternal && !href.includes("#")) {
          this.addLoadingState(link);
        }
      });
    });
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const backdrop = document.querySelector(".backdrop");

    menuToggle.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", this.isMenuOpen.toString());
    mobileNav.classList.toggle("active");
    backdrop.classList.toggle("active");

    // Prevent body scroll when menu is open
    document.body.style.overflow = this.isMenuOpen ? "hidden" : "";
  }

  closeMobileMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      const menuToggle = document.querySelector(".menu-toggle");
      const mobileNav = document.querySelector(".mobile-nav");
      const backdrop = document.querySelector(".backdrop");

      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("active");
      backdrop.classList.remove("active");

      document.body.style.overflow = "";
    }
  }

  performSearch() {
    const searchInput = document.querySelector(".search-input");
    const query = searchInput.value.trim();

    if (!query) return;

    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}%20Frank%20GP`;
    window.location.href = searchUrl;

    this.hideSearchSuggestions();
    searchInput.value = "";
  }

  showSearchSuggestions(query) {
    if (!query.trim()) {
      this.hideSearchSuggestions();
      return;
    }

    const suggestionsContainer = document.getElementById("searchSuggestions");
    if (!suggestionsContainer) return;

    const filteredSuggestions = this.searchSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredSuggestions.length > 0) {
      suggestionsContainer.innerHTML = filteredSuggestions
        .map(
          (suggestion) => `
          <div class="search-suggestion" onclick="window.fgpHeader.selectSuggestion('${suggestion}')">
            ${suggestion}
          </div>
        `
        )
        .join("");

      suggestionsContainer.style.display = "block";
    } else {
      this.hideSearchSuggestions();
    }
  }

  hideSearchSuggestions() {
    const suggestionsContainer = document.getElementById("searchSuggestions");
    if (suggestionsContainer) {
      suggestionsContainer.style.display = "none";
    }
  }

  selectSuggestion(suggestion) {
    const searchInput = document.querySelector(".search-input");
    if (searchInput) {
      searchInput.value = suggestion;
      this.performSearch();
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === "dark" ? "light" : "dark";
    this.setupTheme();
    localStorage.setItem("fgp-header-theme", this.currentTheme);
  }

  setupTheme() {
    const header = document.querySelector(".fgp-header");
    if (header) {
      header.setAttribute("data-theme", this.currentTheme);
    }
  }

  setupKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      // Close mobile menu with Escape
      if (e.key === "Escape" && this.isMenuOpen) {
        this.closeMobileMenu();
      }

      // Quick search with Ctrl/Cmd + K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        const searchInput = document.querySelector(".search-input");
        if (searchInput) {
          searchInput.focus();
        }
      }

      // Toggle theme with Ctrl/Cmd + Shift + L
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "L") {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  addLoadingState(element) {
    element.classList.add("loading");
    setTimeout(() => {
      element.classList.remove("loading");
    }, 2000);
  }

  // Public API
  updateBaseUrl(newBaseUrl) {
    this.baseUrl = newBaseUrl;
    // Re-render with new URLs if needed
    console.log(`Base URL updated to: ${newBaseUrl}`);
  }

  getCurrentEnvironment() {
    return {
      isLocal: this.isLocal,
      baseUrl: this.baseUrl,
      hostname: window.location.hostname,
    };
  }
}

// Initialize the header
window.fgpHeader = new FGPHeaderManager();

// Expose selectSuggestion method globally for onclick handlers
window.fgpHeader.selectSuggestion = window.fgpHeader.selectSuggestion.bind(window.fgpHeader);
