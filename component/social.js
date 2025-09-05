/*
    <!-- ========== social component... ========== -->
    <section class="social"></section>
    <script src="https://frank-gp.github.io/component/social.js" defer></script>
    <!-- ========== social component. ========== -->
*/

var socialClass = document.querySelector(".social");

if (socialClass) {
  socialFunction();
}

function socialFunction() {
  // Enhanced Social Component with modern features
  const socialData = {
    instagram: {
      url: "https://instagram.com/fgp555",
      icon: "icon-instagram",
      color: "#E4405F",
      label: "Instagram",
      description: "Follow my daily updates",
    },
    youtube: {
      url: "https://youtube.com/fgp555",
      icon: "icon-youtube",
      color: "#FF0000",
      label: "YouTube",
      description: "Subscribe for tutorials",
    },
    github: {
      url: "https://github.com/frank-gp",
      icon: "icon-github",
      color: "#333",
      label: "GitHub",
      description: "Check my repositories",
    },
    linkedin: {
      url: "https://linkedin.com/in/franklingp",
      icon: "icon-linkedin",
      color: "#0077B5",
      label: "LinkedIn",
      description: "Professional network",
    },
    codepen: {
      url: "https://codepen.io/fgp555",
      icon: "icon-codepen",
      color: "#000",
      label: "CodePen",
      description: "Creative coding projects",
    },
    whatsapp: {
      url: "https://wa.me/51972328553?text=Hello,%20Frank%20GP!",
      icon: "icon-whatsapp",
      color: "#25D366",
      label: "WhatsApp",
      description: "Send me a message",
    },
    email: {
      url: "mailto:fgp555@gmail.com",
      icon: "icon-mail",
      color: "#EA4335",
      label: "Email",
      description: "Get in touch directly",
    },
    paypal: {
      url: "https://paypal.me/fgp555",
      icon: "icon-paypal",
      color: "#00457C",
      label: "PayPal",
      description: "Support my work",
    },
  };

  let social = /*html*/ `
    <style>
      @import url("https://frank-gp.github.io/icon/icomoon/style.css");
      
      .social {
        --primary-color: #6366f1;
        --background: #ffffff;
        --background-secondary: #f8fafc;
        --text-primary: #1e293b;
        --text-secondary: #64748b;
        --border-color: #e2e8f0;
        --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        --border-radius: 1rem;
        --spacing-sm: 0.5rem;
        --spacing-md: 1rem;
        --spacing-lg: 1.5rem;
        --spacing-xl: 2rem;
        
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        padding: var(--spacing-xl) var(--spacing-md);
      }

      .social-container {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
      }

      .social-header {
        margin-bottom: var(--spacing-xl);
      }

      .social-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: var(--spacing-sm);
        background: linear-gradient(135deg, var(--primary-color), #10b981);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .social-description {
        color: var(--text-secondary);
        font-size: 1.1rem;
        line-height: 1.6;
        max-width: 500px;
        margin: 0 auto;
      }

      .social-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-xl);
      }

      .social-card {
        background: var(--background);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        padding: var(--spacing-lg);
        text-decoration: none;
        color: var(--text-primary);
        transition: var(--transition);
        position: relative;
        overflow: hidden;
        box-shadow: var(--shadow);
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
      }

      .social-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: var(--card-color);
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }

      .social-card:hover::before {
        transform: scaleX(1);
      }

      .social-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
        border-color: var(--card-color);
      }

      .social-icon-container {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: var(--background-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition);
        flex-shrink: 0;
      }

      .social-card:hover .social-icon-container {
        background: var(--card-color);
        transform: scale(1.1);
      }

      .social-icon {
        font-size: 1.5rem;
        color: var(--card-color);
        transition: var(--transition);
      }

      .social-card:hover .social-icon {
        color: white;
      }

      .social-content {
        flex: 1;
        text-align: left;
      }

      .social-label {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: var(--text-primary);
      }

      .social-card:hover .social-label {
        color: var(--card-color);
      }

      .social-desc {
        font-size: 0.9rem;
        color: var(--text-secondary);
        line-height: 1.4;
      }

      .social-compact {
        display: flex;
        justify-content: center;
        gap: var(--spacing-md);
        flex-wrap: wrap;
        margin-top: var(--spacing-lg);
      }

      .social-compact-link {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--background-secondary);
        border: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: var(--transition);
        position: relative;
        overflow: hidden;
      }

      .social-compact-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--link-color);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .social-compact-link:hover::before {
        opacity: 1;
      }

      .social-compact-link:hover {
        transform: translateY(-2px) scale(1.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .social-compact-icon {
        font-size: 1.25rem;
        color: var(--link-color);
        transition: var(--transition);
        z-index: 1;
        position: relative;
      }

      .social-compact-link:hover .social-compact-icon {
        color: white;
      }

      .social-stats {
        margin-top: var(--spacing-xl);
        padding: var(--spacing-lg);
        background: var(--background-secondary);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
      }

      .social-stats-title {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: var(--spacing-md);
      }

      .social-stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: var(--spacing-md);
      }

      .social-stat {
        text-align: center;
      }

      .social-stat-number {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-color);
        display: block;
      }

      .social-stat-label {
        font-size: 0.875rem;
        color: var(--text-secondary);
      }

      /* Animations */
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .social-card {
        animation: fadeInUp 0.6s ease-out;
      }

      .social-card:nth-child(1) { animation-delay: 0.1s; }
      .social-card:nth-child(2) { animation-delay: 0.2s; }
      .social-card:nth-child(3) { animation-delay: 0.3s; }
      .social-card:nth-child(4) { animation-delay: 0.4s; }
      .social-card:nth-child(5) { animation-delay: 0.5s; }
      .social-card:nth-child(6) { animation-delay: 0.6s; }
      .social-card:nth-child(7) { animation-delay: 0.7s; }
      .social-card:nth-child(8) { animation-delay: 0.8s; }

      /* Responsive Design */
      @media (max-width: 768px) {
        .social-grid {
          grid-template-columns: 1fr;
          gap: var(--spacing-md);
        }

        .social-title {
          font-size: 1.75rem;
        }

        .social-description {
          font-size: 1rem;
        }

        .social-compact {
          gap: var(--spacing-sm);
        }

        .social-compact-link {
          width: 45px;
          height: 45px;
        }

        .social-compact-icon {
          font-size: 1.1rem;
        }
      }

      @media (max-width: 480px) {
        .social {
          padding: var(--spacing-lg) var(--spacing-sm);
        }

        .social-card {
          flex-direction: column;
          text-align: center;
          gap: var(--spacing-sm);
        }

        .social-content {
          text-align: center;
        }

        .social-stats-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        .social {
          --background: #1e293b;
          --background-secondary: #334155;
          --text-primary: #f1f5f9;
          --text-secondary: #cbd5e1;
          --border-color: #475569;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
          --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
        }
      }

      /* Focus styles for accessibility */
      .social-card:focus,
      .social-compact-link:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
      }

      /* Print styles */
      @media print {
        .social {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
    </style>

    <div class="social-container">
      <div class="social-header">
        <h2 class="social-title">Let's Connect</h2>
        <p class="social-description">
          Follow me on social media for updates, tutorials, and behind-the-scenes content. 
          Let's build something amazing together!
        </p>
      </div>

      <!-- Main Social Cards -->
      <div class="social-grid">
        ${Object.entries(socialData)
          .map(
            ([key, social]) => `
          <a 
            href="${social.url}" 
            class="social-card" 
            target="_blank" 
            rel="noopener noreferrer"
            style="--card-color: ${social.color}"
            aria-label="${social.label} - ${social.description}"
          >
            <div class="social-icon-container">
              <i class="social-icon ${social.icon}"></i>
            </div>
            <div class="social-content">
              <div class="social-label">${social.label}</div>
              <div class="social-desc">${social.description}</div>
            </div>
          </a>
        `
          )
          .join("")}
      </div>

      <!-- Compact Social Links -->
      <div class="social-compact">
        ${Object.entries(socialData)
          .map(
            ([key, social]) => `
          <a 
            href="${social.url}" 
            class="social-compact-link" 
            target="_blank" 
            rel="noopener noreferrer"
            style="--link-color: ${social.color}"
            aria-label="${social.label}"
            title="${social.label} - ${social.description}"
          >
            <i class="social-compact-icon ${social.icon}"></i>
          </a>
        `
          )
          .join("")}
      </div>

      <!-- Social Stats (Optional) -->
      <div class="social-stats">
        <h3 class="social-stats-title">Connect & Follow</h3>
        <div class="social-stats-grid">
          <div class="social-stat">
            <span class="social-stat-number">5+</span>
            <span class="social-stat-label">Years Experience</span>
          </div>
          <div class="social-stat">
            <span class="social-stat-number">50+</span>
            <span class="social-stat-label">Projects Completed</span>
          </div>
          <div class="social-stat">
            <span class="social-stat-number">24h</span>
            <span class="social-stat-label">Response Time</span>
          </div>
          <div class="social-stat">
            <span class="social-stat-number">100%</span>
            <span class="social-stat-label">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Insert the enhanced social component
  document.querySelector(".social").innerHTML = social;

  // Add interactive features
  addSocialInteractivity();

  console.log("🔗 Enhanced Social Component initialized successfully!");
}

function addSocialInteractivity() {
  // Track social link clicks
  const socialLinks = document.querySelectorAll(".social-card, .social-compact-link");

  socialLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const platform = link.getAttribute("aria-label")?.split(" - ")[0] || "Unknown";
      console.log(`Social link clicked: ${platform}`);

      // Add click animation
      link.style.transform = "scale(0.95)";
      setTimeout(() => {
        link.style.transform = "";
      }, 150);

      // Optional: Add analytics tracking here
      // trackSocialClick(platform, link.href);
    });
  });

  // Add hover sound effect (optional)
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      // Optional: Add subtle hover sound
      // playHoverSound();
    });
  });

  // Add keyboard navigation enhancements
  socialLinks.forEach((link) => {
    link.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        link.click();
      }
    });
  });

  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".social-card").forEach((card) => {
    card.style.animationPlayState = "paused";
    observer.observe(card);
  });
}

// Optional: Analytics tracking function
function trackSocialClick(platform, url) {
  // Example analytics implementation
  if (typeof gtag !== "undefined") {
    gtag("event", "social_click", {
      social_platform: platform,
      social_url: url,
    });
  }
}

// Optional: Hover sound effect
function playHoverSound() {
  // Example hover sound implementation
  const audio = new Audio(
    "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LLgyYHKHi+8t2QQAkUXrTp567aOgEAAE..."
  );
  audio.volume = 0.1;
  audio.play().catch(() => {}); // Ignore audio play errors
}
