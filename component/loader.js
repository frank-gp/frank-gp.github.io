/* 
    <link rel="preload" as="image" id="loaderImg" href="https://frank-gp.github.io/favicon.ico" />
    <script src="https://frank-gp.github.io/component/loader.js"></script>
*/

class FGPLoader {
  constructor() {
    this.loaderImgElement = document.getElementById("loaderImg");
    this.loaderImg = this.loaderImgElement ? this.loaderImgElement.href : "https://frank-gp.github.io/favicon.ico";
    this.startTime = performance.now();
    this.minLoadTime = 1000; // Minimum loading time in ms
    this.maxLoadTime = 10000; // Maximum loading time before force hide
    this.isLoaded = false;
    this.loadingMessages = [
      "Loading amazing content...",
      "Preparing your experience...",
      "Almost ready...",
      "Just a moment...",
      "Setting things up...",
    ];
    this.currentMessageIndex = 0;

    this.init();
  }

  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.createLoader());
    } else {
      this.createLoader();
    }
  }

  createLoader() {
    const loaderHTML = /* html */ `
      <div class="fgp-loader" id="fgpLoader">
        <div class="loader-backdrop"></div>
        <div class="loader-content">
          <div class="loader-brand">
            <div class="loader-icon">
              <div class="icon-image"></div>
              <div class="loader-spinner"></div>
            </div>
            <div class="loader-text">
              <h2 class="loader-title">Frank GP</h2>
              <p class="loader-subtitle">Mobile & Web Developer</p>
            </div>
          </div>
          
          <div class="loader-progress">
            <div class="progress-bar">
              <div class="progress-fill" id="progressFill"></div>
            </div>
            <div class="progress-text" id="progressText">Loading...</div>
          </div>
          
          <div class="loader-message" id="loaderMessage">
            ${this.loadingMessages[0]}
          </div>
        </div>

        <style>
          .fgp-loader {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            opacity: 1;
            visibility: visible;
            transition: opacity 0.5s ease, visibility 0.5s ease;
          }

          .fgp-loader.hidden {
            opacity: 0;
            visibility: hidden;
          }

          .loader-backdrop {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            z-index: -1;
          }

          .loader-backdrop::before {
            content: '';
            position: absolute;
            inset: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%236366f1" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.5;
          }

          .loader-content {
            text-align: center;
            color: white;
            max-width: 400px;
            padding: 2rem;
          }

          .loader-brand {
            margin-bottom: 3rem;
          }

          .loader-icon {
            position: relative;
            width: 120px;
            height: 120px;
            margin: 0 auto 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .icon-image {
            width: 80px;
            height: 80px;
            background-image: url(${this.loaderImg});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            z-index: 2;
            position: relative;
            animation: logoFloat 3s ease-in-out infinite;
          }

          .loader-spinner {
            position: absolute;
            inset: 0;
            border: 3px solid rgba(99, 102, 241, 0.3);
            border-top: 3px solid #6366f1;
            border-radius: 50%;
            animation: spin 2s linear infinite;
          }

          .loader-title {
            font-size: 2rem;
            font-weight: 700;
            margin: 0 0 0.5rem 0;
            background: linear-gradient(135deg, #6366f1, #10b981);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: titleGlow 2s ease-in-out infinite alternate;
          }

          .loader-subtitle {
            font-size: 1.1rem;
            color: #cbd5e1;
            margin: 0;
            opacity: 0.8;
          }

          .loader-progress {
            margin-bottom: 2rem;
          }

          .progress-bar {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            margin-bottom: 1rem;
          }

          .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #6366f1, #10b981);
            border-radius: 2px;
            transition: width 0.3s ease;
            width: 0%;
            animation: progressGlow 2s ease-in-out infinite;
          }

          .progress-text {
            font-size: 0.9rem;
            color: #94a3b8;
            margin-bottom: 0.5rem;
          }

          .loader-message {
            font-size: 1rem;
            color: #e2e8f0;
            font-weight: 500;
            min-height: 1.5rem;
            animation: messageSlide 0.5s ease-in-out;
          }

          /* Animations */
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes logoFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes titleGlow {
            0% { filter: brightness(1); }
            100% { filter: brightness(1.2); }
          }

          @keyframes progressGlow {
            0%, 100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.3); }
            50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.6); }
          }

          @keyframes messageSlide {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeOut {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.95); }
          }

          .fgp-loader.fade-out {
            animation: fadeOut 0.5s ease-out forwards;
          }

          /* Responsive */
          @media (max-width: 480px) {
            .loader-content {
              padding: 1rem;
            }

            .loader-icon {
              width: 100px;
              height: 100px;
            }

            .icon-image {
              width: 60px;
              height: 60px;
            }

            .loader-title {
              font-size: 1.75rem;
            }

            .loader-subtitle {
              font-size: 1rem;
            }
          }

          /* Prefers reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .loader-spinner {
              animation: none;
            }

            .icon-image {
              animation: none;
            }

            .loader-title {
              animation: none;
            }

            .progress-fill {
              animation: none;
            }
          }
        </style>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", loaderHTML);
    this.startProgressSimulation();
    this.startMessageRotation();
    this.setupEventListeners();

    console.log("🔄 FGP Loader initialized");
  }

  startProgressSimulation() {
    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");
    let progress = 0;

    const updateProgress = () => {
      if (progress < 90) {
        // Simulate realistic loading progress
        const increment = Math.random() * 15 + 5;
        progress = Math.min(progress + increment, 90);

        if (progressFill) {
          progressFill.style.width = `${progress}%`;
        }

        if (progressText) {
          progressText.textContent = `Loading... ${Math.round(progress)}%`;
        }

        // Variable timing for realistic feel
        const nextDelay = Math.random() * 300 + 200;
        setTimeout(updateProgress, nextDelay);
      }
    };

    // Start progress simulation
    setTimeout(updateProgress, 500);
  }

  startMessageRotation() {
    setInterval(() => {
      this.currentMessageIndex = (this.currentMessageIndex + 1) % this.loadingMessages.length;
      const messageElement = document.getElementById("loaderMessage");

      if (messageElement) {
        messageElement.style.animation = "none";
        messageElement.offsetHeight; // Trigger reflow
        messageElement.textContent = this.loadingMessages[this.currentMessageIndex];
        messageElement.style.animation = "messageSlide 0.5s ease-in-out";
      }
    }, 2000);
  }

  setupEventListeners() {
    // Handle page load
    if (document.readyState === "complete") {
      this.handlePageLoad();
    } else {
      window.addEventListener("load", () => this.handlePageLoad());
    }

    // Handle images loading
    this.trackImageLoading();

    // Force hide after maximum time
    setTimeout(() => {
      if (!this.isLoaded) {
        console.warn("🔄 Loader force hidden after maximum time");
        this.hideLoader(true);
      }
    }, this.maxLoadTime);
  }

  trackImageLoading() {
    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    if (images.length === 0) return;

    images.forEach((img) => {
      if (img.complete) {
        loadedImages++;
      } else {
        img.addEventListener("load", () => {
          loadedImages++;
          this.updateImageProgress(loadedImages, images.length);
        });

        img.addEventListener("error", () => {
          loadedImages++;
          this.updateImageProgress(loadedImages, images.length);
        });
      }
    });

    this.updateImageProgress(loadedImages, images.length);
  }

  updateImageProgress(loaded, total) {
    const percentage = (loaded / total) * 100;
    const progressText = document.getElementById("progressText");

    if (progressText && total > 0) {
      progressText.textContent = `Loading images... ${loaded}/${total}`;
    }
  }

  handlePageLoad() {
    const elapsedTime = performance.now() - this.startTime;
    const remainingTime = Math.max(this.minLoadTime - elapsedTime, 0);

    // Complete progress animation
    this.completeProgress();

    // Hide loader after minimum time
    setTimeout(() => {
      this.hideLoader();
    }, remainingTime);
  }

  completeProgress() {
    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");

    if (progressFill) {
      progressFill.style.width = "100%";
    }

    if (progressText) {
      progressText.textContent = "Ready! 100%";
    }
  }

  hideLoader(forced = false) {
    if (this.isLoaded) return;

    this.isLoaded = true;
    const loader = document.getElementById("fgpLoader");

    if (loader) {
      loader.classList.add("fade-out");

      setTimeout(() => {
        loader.remove();

        // Dispatch custom event
        document.dispatchEvent(
          new CustomEvent("fgpLoaderComplete", {
            detail: {
              loadTime: performance.now() - this.startTime,
              forced: forced,
            },
          })
        );

        console.log(
          `🔄 Loader hidden ${forced ? "(forced)" : ""} after ${Math.round(performance.now() - this.startTime)}ms`
        );
      }, 500);
    }
  }

  // Public API
  static forceHide() {
    const loader = document.getElementById("fgpLoader");
    if (loader && !loader.classList.contains("fade-out")) {
      const instance = window.fgpLoaderInstance;
      if (instance) {
        instance.hideLoader(true);
      }
    }
  }

  static updateMessage(message) {
    const messageElement = document.getElementById("loaderMessage");
    if (messageElement) {
      messageElement.textContent = message;
    }
  }

  static setProgress(percentage) {
    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");

    if (progressFill) {
      progressFill.style.width = `${Math.min(Math.max(percentage, 0), 100)}%`;
    }

    if (progressText) {
      progressText.textContent = `Loading... ${Math.round(percentage)}%`;
    }
  }
}

// Initialize loader
if (typeof window !== "undefined") {
  window.fgpLoaderInstance = new FGPLoader();
  window.FGPLoader = FGPLoader;

  // Listen for loader completion
  document.addEventListener("fgpLoaderComplete", (e) => {
    console.log("🎉 Page loaded successfully!", e.detail);
  });
}
