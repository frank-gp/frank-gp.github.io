/*
    <script src="https://frank-gp.github.io/component/fgp_footer.js"></script>
    <footer-component></footer-component>
*/

const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

let baseUrl;
if (isLocal) {
  baseUrl = "/"; // en local usa rutas relativas
} else {
  baseUrl = "https://frank-gp.github.io/"; // en producción usa URLs completas
}

// CSS dinámico
const cssFiles = ["component/footer.css"].map((file) => baseUrl + file);

cssFiles.forEach((cssFile) => {
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = cssFile;
  document.head.appendChild(linkElement);
});

let fgp_footer_html = /*html */ `
<footer class="fgp-footer">
  <div class="footer-container">
    <!-- Main Footer Content -->
    <div class="footer-content">
      <!-- Brand Section -->
      <div class="footer-brand">
        <div class="footer-logo">
          <div class="logo-icon">FGP</div>
          <div class="brand-text">
            <h3>Frank GP</h3>
            <p>Mobile & Web Developer</p>
          </div>
        </div>
        <p class="brand-description">
          Crafting digital experiences with React Native, Flutter, and modern web technologies. 
          Helping startups and entrepreneurs bring their ideas to life.
        </p>
        <div class="social-links">
          <a href="https://github.com/frank-gp" target="_blank" aria-label="GitHub">
            <i class="icon-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/franklingp/" target="_blank" aria-label="LinkedIn">
            <i class="icon-linkedin"></i>
          </a>
          <a href="https://twitter.com/frankgp555" target="_blank" aria-label="Twitter">
            <i class="icon-twitter"></i>
          </a>
          <a href="mailto:fgp555@gmail.com" aria-label="Email">
            <i class="icon-mail"></i>
          </a>
          <a href="https://wa.me/51972328553" target="_blank" aria-label="WhatsApp">
            <i class="icon-whatsapp"></i>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="https://frank-gp.github.io/">Home</a></li>
          <li><a href="https://frank-gp.github.io/about/">About</a></li>
          <li><a href="https://frank-gp.github.io/portfolio/">Portfolio</a></li>
          <li><a href="https://frank-gp.github.io/cv/">CV</a></li>
        </ul>
      </div>

      <!-- Services -->
      <div class="footer-links">
        <h4>Services</h4>
        <ul>
          <li><a href="https://frank-gp.github.io/app/">Web Apps</a></li>
          <li><a href="https://frank-gp.github.io/lib/">Libraries</a></li>
          <li><a href="https://frank-gp.github.io/component/">Components</a></li>
          <li><a href="https://frank-gp.github.io/support/">Support</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="footer-contact">
        <h4>Get In Touch</h4>
        <div class="contact-item">
          <i class="icon-mail"></i>
          <span>fgp555@gmail.com</span>
        </div>
        <div class="contact-item">
          <i class="icon-phone"></i>
          <span>+51 972 328 553</span>
        </div>
        <div class="contact-item">
          <i class="icon-location"></i>
          <span>Puno, Peru</span>
        </div>
        <a href="https://frank-gp.github.io/contact/" class="contact-button">
          <i class="icon-arrow-right"></i>
          Contact Me
        </a>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <div class="copyright">
          <p>&copy; <span id="currentYear">2024</span> Frank GP. All rights reserved.</p>
          <p class="made-with">Made with <span class="heart">♥</span> using modern web technologies</p>
        </div>
        <div class="footer-bottom-links">
          <a href="https://frank-gp.github.io/privacy/">Privacy Policy</a>
          <span class="separator">•</span>
          <a href="https://frank-gp.github.io/terms/">Terms of Service</a>
          <span class="separator">•</span>
          <button class="theme-toggle-footer" aria-label="Toggle theme">
            <i class="icon-sun"></i>
            <i class="icon-moon"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Back to Top -->
    <button class="back-to-top" aria-label="Back to top" id="backToTop">
      <i class="icon-arrow-up"></i>
    </button>
  </div>
</footer>
`;

// ========== Enhanced Footer Creation ==========
class FGPFooterManager {
  constructor() {
    this.currentTheme = localStorage.getItem("fgp-header-theme") || "dark";
    this.scrollThreshold = 300;

    this.init();
  }

  init() {
    this.createFooter();
    this.setCurrentYear();
    this.attachEventListeners();
    this.setupTheme();
    this.setupScrollBehavior();

    console.log("🔗 FGP Footer initialized successfully!");
  }

  createFooter() {
    let fgp_footer = document.querySelector("fgp_footer");

    if (!fgp_footer) {
      fgp_footer = document.createElement("fgp_footer");
      fgp_footer.id = "fgp_footer";
      document.body.insertAdjacentElement("beforeend", fgp_footer);
    }

    fgp_footer.innerHTML = fgp_footer_html;
    fgp_footer.querySelector(".fgp-footer").setAttribute("data-theme", this.currentTheme);
  }

  setCurrentYear() {
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  attachEventListeners() {
    // Theme toggle
    const themeToggle = document.querySelector(".theme-toggle-footer");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => this.toggleTheme());
    }

    // Back to top button
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
      backToTop.addEventListener("click", () => this.scrollToTop());
    }

    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('.footer-links a[href^="https://frank-gp.github.io"]');
    internalLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        // Add loading state
        this.addLoadingState(link);

        // Remove loading state after navigation
        setTimeout(() => {
          this.removeLoadingState(link);
        }, 2000);
      });
    });

    // Social links tracking
    const socialLinks = document.querySelectorAll(".social-links a");
    socialLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const platform = this.getSocialPlatform(link.href);
        console.log(`Social link clicked: ${platform}`);
        // Here you could add analytics tracking
      });
    });

    // Contact button interaction
    const contactButton = document.querySelector(".contact-button");
    if (contactButton) {
      contactButton.addEventListener("click", () => {
        console.log("Contact button clicked");
        // Add any special tracking or effects
      });
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === "dark" ? "light" : "dark";
    this.setupTheme();
    localStorage.setItem("fgp-header-theme", this.currentTheme);

    // Sync with header theme if it exists
    const header = document.querySelector(".fgp-header");
    if (header) {
      header.setAttribute("data-theme", this.currentTheme);
    }
  }

  setupTheme() {
    const footer = document.querySelector(".fgp-footer");
    if (footer) {
      footer.setAttribute("data-theme", this.currentTheme);
    }
  }

  setupScrollBehavior() {
    window.addEventListener("scroll", () => {
      this.handleScroll();
    });
  }

  handleScroll() {
    const backToTop = document.getElementById("backToTop");
    if (!backToTop) return;

    const scrollY = window.scrollY;

    if (scrollY > this.scrollThreshold) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  getSocialPlatform(url) {
    if (url.includes("github")) return "GitHub";
    if (url.includes("linkedin")) return "LinkedIn";
    if (url.includes("twitter")) return "Twitter";
    if (url.includes("mailto")) return "Email";
    if (url.includes("wa.me")) return "WhatsApp";
    return "Unknown";
  }

  addLoadingState(element) {
    element.classList.add("loading");
  }

  removeLoadingState(element) {
    element.classList.remove("loading");
  }

  // Public API methods
  updateContactInfo(info) {
    const contactItems = document.querySelectorAll(".contact-item span");
    if (info.email && contactItems[0]) {
      contactItems[0].textContent = info.email;
    }
    if (info.phone && contactItems[1]) {
      contactItems[1].textContent = info.phone;
    }
    if (info.location && contactItems[2]) {
      contactItems[2].textContent = info.location;
    }
  }

  updateSocialLinks(links) {
    const socialContainer = document.querySelector(".social-links");
    if (!socialContainer || !links) return;

    socialContainer.innerHTML = "";
    Object.entries(links).forEach(([platform, url]) => {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.setAttribute("aria-label", platform);
      link.innerHTML = `<i class="icon-${platform.toLowerCase()}"></i>`;
      socialContainer.appendChild(link);
    });
  }

  // Lifecycle methods
  destroy() {
    window.removeEventListener("scroll", this.handleScroll);
    console.log("🔗 FGP Footer destroyed");
  }
}

// Initialize the footer
window.fgpFooter = new FGPFooterManager();

// Sync theme with header if header is loaded
document.addEventListener("DOMContentLoaded", () => {
  const headerTheme = localStorage.getItem("fgp-header-theme");
  if (headerTheme && window.fgpFooter) {
    window.fgpFooter.currentTheme = headerTheme;
    window.fgpFooter.setupTheme();
  }
});
