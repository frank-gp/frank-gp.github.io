// ===========================================
// FRANK GP - MOBILE APP DEVELOPMENT LANDING PAGE
// ===========================================

// Mobile Menu Functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.remove("active");
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Header Scroll Effect
function initHeaderScrollEffect() {
  let lastScrollTop = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// Price Calculator Logic
function calculatePrice() {
  const appType = document.getElementById("appType").value;
  const platforms = document.getElementById("platforms").value;
  const backend = document.getElementById("backend").value;
  const design = document.getElementById("design").value;
  const timeline = document.getElementById("timeline").value;

  // Base prices for different app types
  const basePrices = {
    simple: 800,
    medium: 1500,
    complex: 3000,
    enterprise: 5000,
  };

  // Platform multipliers
  const platformMultipliers = {
    single: 1,
    cross: 1.3,
  };

  // Backend additional costs
  const backendPrices = {
    none: 0,
    simple: 500,
    complex: 1200,
  };

  // Design additional costs
  const designPrices = {
    basic: 0,
    custom: 600,
    premium: 1200,
  };

  // Timeline multipliers
  const timelineMultipliers = {
    standard: 1,
    fast: 1.3,
    extended: 0.9,
  };

  // Calculate base price
  let basePrice = basePrices[appType] || basePrices.simple;
  basePrice *= platformMultipliers[platforms] || 1;
  basePrice += backendPrices[backend] || 0;
  basePrice += designPrices[design] || 0;
  basePrice *= timelineMultipliers[timeline] || 1;

  // Add feature costs
  const featureCheckboxes = document.querySelectorAll('input[name="features"]:checked');
  let featuresTotal = 0;
  featureCheckboxes.forEach((checkbox) => {
    featuresTotal += parseInt(checkbox.value);
  });

  // Calculate final price range
  const totalMin = Math.round(basePrice + featuresTotal);
  const totalMax = Math.round((basePrice + featuresTotal) * 1.4);

  // Update display
  document.getElementById(
    "priceEstimate"
  ).textContent = `$${totalMin.toLocaleString()} - $${totalMax.toLocaleString()}`;
}

// Initialize Price Calculator
function initPriceCalculator() {
  const calculatorInputs = document.querySelectorAll('#calculatorForm select, #calculatorForm input[type="checkbox"]');
  calculatorInputs.forEach((input) => {
    input.addEventListener("change", calculatePrice);
  });

  // Initial calculation
  calculatePrice();
}

// Contact Form Handler
function initContactForm() {
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      company: document.getElementById("company").value,
      budget: document.getElementById("budget").value,
      description: document.getElementById("description").value,
      timeline: document.getElementById("projectTimeline").value,
    };

    // Validate required fields
    if (!formData.name || !formData.email || !formData.description) {
      alert("Please fill in all required fields (Name, Email, and Project Description).");
      return;
    }

    // Create WhatsApp message
    const message = createWhatsAppMessage(formData);

    // Open WhatsApp with the message
    const whatsappURL = `https://wa.me/51972328553?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    // Optional: Reset form after submission
    // document.getElementById('contactForm').reset();
  });
}

// Create WhatsApp Message
function createWhatsAppMessage(data) {
  return `Hi Frank! I'm interested in mobile app development.
  
  *Project Details:*
  👤 Name: ${data.name}
  📧 Email: ${data.email}
  🏢 Company: ${data.company || "N/A"}
  💰 Budget: ${data.budget || "To be discussed"}
  ⏰ Timeline: ${data.timeline || "Flexible"}
  
  📱 *Project Description:*
  ${data.description}
  
  Looking forward to discussing this project with you!`;
}

// Intersection Observer for Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe sections for scroll animations
  const sections = document.querySelectorAll(".services, .technologies, .portfolio, .calculator, .contact");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
}

// Close mobile menu when clicking outside
function initMobileMenuOutsideClick() {
  document.addEventListener("click", function (e) {
    const mobileMenu = document.getElementById("mobileMenu");
    const toggleButton = document.querySelector(".mobile-menu-toggle");

    if (!mobileMenu.contains(e.target) && !toggleButton.contains(e.target)) {
      mobileMenu.classList.remove("active");
    }
  });
}

// Keyboard Navigation
function initKeyboardNavigation() {
  document.addEventListener("keydown", function (e) {
    // Close mobile menu with Escape key
    if (e.key === "Escape") {
      closeMobileMenu();
    }

    // Quick navigation with Alt + number keys
    if (e.altKey && e.key >= "1" && e.key <= "5") {
      e.preventDefault();
      const sections = ["#services", "#technologies", "#portfolio", "#calculator", "#contact"];
      const targetSection = document.querySelector(sections[parseInt(e.key) - 1]);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}

// Form Validation Helpers
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showFormError(message) {
  // Create or update error message
  let errorDiv = document.getElementById("form-error");
  if (!errorDiv) {
    errorDiv = document.createElement("div");
    errorDiv.id = "form-error";
    errorDiv.style.cssText = `
        background: var(--error);
        color: white;
        padding: 1rem;
        border-radius: 6px;
        margin-bottom: 1rem;
        display: none;
      `;
    document.getElementById("contactForm").prepend(errorDiv);
  }

  errorDiv.textContent = message;
  errorDiv.style.display = "block";

  // Auto-hide after 5 seconds
  setTimeout(() => {
    errorDiv.style.display = "none";
  }, 5000);
}

// Enhanced Form Validation
function validateContactForm(formData) {
  // Check required fields
  if (!formData.name.trim()) {
    showFormError("Please enter your name.");
    return false;
  }

  if (!formData.email.trim()) {
    showFormError("Please enter your email address.");
    return false;
  }

  if (!validateEmail(formData.email)) {
    showFormError("Please enter a valid email address.");
    return false;
  }

  if (!formData.description.trim()) {
    showFormError("Please describe your project.");
    return false;
  }

  if (formData.description.trim().length < 10) {
    showFormError("Please provide more details about your project (at least 10 characters).");
    return false;
  }

  return true;
}

// Analytics and Tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
  // Placeholder for analytics tracking
  console.log(`Event: ${eventName}`, eventData);

  // Example: Google Analytics 4
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', eventName, eventData);
  // }
}

// Loading States
function showLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.opacity = "0.7";
    element.style.pointerEvents = "none";
  }
}

function hideLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.opacity = "1";
    element.style.pointerEvents = "auto";
  }
}

// Console Welcome Message
function showWelcomeMessage() {
  console.log(`
  🚀 Frank GP - Mobile App Developer
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  📱 Specializing in:
  • React Native & Flutter Development
  • Cross-platform Mobile Apps
  • UI/UX Design
  • App Store Publishing
  • Technical Consulting
  
  💼 Perfect for:
  • Startups & Entrepreneurs
  • MVP Development
  • Custom Mobile Solutions
  
  📞 Ready to start your project?
  Contact: fgp555@gmail.com
  WhatsApp: +51 972 328 553
  
  🎯 Quick Navigation:
  • Alt + 1: Services
  • Alt + 2: Technologies  
  • Alt + 3: Portfolio
  • Alt + 4: Pricing Calculator
  • Alt + 5: Contact
  
  Let's build something amazing together! 🎉
    `);
}

// Performance Monitoring
function initPerformanceMonitoring() {
  // Log page load time
  window.addEventListener("load", () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${Math.round(loadTime)}ms`);

    // Track slow loading
    if (loadTime > 3000) {
      trackEvent("slow_page_load", { loadTime: Math.round(loadTime) });
    }
  });
}

// Error Handling
function initErrorHandling() {
  window.addEventListener("error", (e) => {
    console.error("JavaScript Error:", e.error);
    trackEvent("javascript_error", {
      message: e.message,
      filename: e.filename,
      lineno: e.lineno,
    });
  });
}

// Main Initialization Function
function initApp() {
  try {
    // Core functionality
    initSmoothScrolling();
    initHeaderScrollEffect();
    initPriceCalculator();
    initContactForm();
    initScrollAnimations();

    // UI enhancements
    initMobileMenuOutsideClick();
    initKeyboardNavigation();

    // Monitoring and analytics
    initPerformanceMonitoring();
    initErrorHandling();
    showWelcomeMessage();

    // Track page view
    trackEvent("page_view", { page: "landing_page" });

    console.log("Frank GP Landing Page initialized successfully! 🚀");
  } catch (error) {
    console.error("Error initializing app:", error);
    trackEvent("init_error", { error: error.message });
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initApp);

// Initialize if DOM is already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// Export functions for potential external use
window.FrankGP = {
  toggleMobileMenu,
  closeMobileMenu,
  calculatePrice,
  trackEvent,
};
