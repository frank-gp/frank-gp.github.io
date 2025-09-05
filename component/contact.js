/***
    
    <!-- contact component... -->

    <!-- <link rel="stylesheet" href="https://frank-gp.github.io/icon/icomoon/style.css" /> -->
    
    
    <section class="contact"></section>
    <script src="https://frank-gp.github.io/component/contact.js" defer></script>


    <!-- contact component... -->

 ***/

var classContact = document.querySelector(".contact");

if (classContact) {
  ContactFunction();
}

function ContactFunction() {
  // ========== Enhanced Contact Component ==========
  let section_contact = document.querySelector(".contact");

  let contact_css = /* css */ `
        /* Contact Component - Modern Design */
        .contact {
          --primary-color: #6366f1;
          --primary-hover: #5855eb;
          --success-color: #10b981;
          --error-color: #ef4444;
          --warning-color: #f59e0b;
          --text-primary: #1e293b;
          --text-secondary: #475569;
          --text-muted: #64748b;
          --background: #ffffff;
          --background-secondary: #f8fafc;
          --background-tertiary: #e2e8f0;
          --border-color: #d1d5db;
          --border-focus: var(--primary-color);
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          --border-radius: 0.75rem;
          --spacing-sm: 0.5rem;
          --spacing-md: 1rem;
          --spacing-lg: 1.5rem;
          --spacing-xl: 2rem;
          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          
          background: var(--background);
          padding: var(--spacing-xl);
          border-radius: var(--border-radius);
          max-width: 600px;
          margin: 2rem auto;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-color);
          position: relative;
          overflow: hidden;
        }
    
        .contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-color), var(--success-color));
        }
    
        .contact * {
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
    
        .contact-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }
    
        .contact-header h1 {
          color: var(--text-primary);
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: var(--spacing-sm);
          background: linear-gradient(135deg, var(--primary-color), var(--success-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
    
        .contact-header p {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.5;
        }
    
        .contact hr {
          border: none;
          border-bottom: 1px solid var(--border-color);
          margin: var(--spacing-lg) 0;
        }
    
        .form-group {
          position: relative;
          margin-bottom: var(--spacing-lg);
        }
    
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }
    
        .input-container {
          position: relative;
        }
    
        .contact input,
        .contact textarea {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius);
          font-size: 1rem;
          font-family: inherit;
          color: var(--text-primary);
          background: var(--background);
          transition: var(--transition);
          outline: none;
        }
    
        .contact input::placeholder,
        .contact textarea::placeholder {
          color: var(--text-muted);
        }
    
        .contact input:focus,
        .contact textarea:focus {
          border-color: var(--border-focus);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          transform: translateY(-1px);
        }
    
        .contact input:valid,
        .contact textarea:valid {
          border-color: var(--success-color);
        }
    
        .contact input.error,
        .contact textarea.error {
          border-color: var(--error-color);
          animation: shake 0.3s ease-in-out;
        }
    
        .contact textarea {
          min-height: 120px;
          max-height: 300px;
          resize: vertical;
          font-family: inherit;
        }
    
        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          font-size: 1.125rem;
          transition: var(--transition);
          z-index: 2;
        }
    
        .contact input:focus ~ .input-icon,
        .contact textarea:focus ~ .input-icon {
          color: var(--primary-color);
        }
    
        .textarea-container .input-icon {
          top: 1.75rem;
          transform: none;
        }
    
        .error-message {
          color: var(--error-color);
          font-size: 0.875rem;
          margin-top: var(--spacing-sm);
          display: none;
          align-items: center;
          gap: 0.25rem;
        }
    
        .error-message.show {
          display: flex;
        }
    
        .success-message {
          color: var(--success-color);
          font-size: 0.875rem;
          margin-top: var(--spacing-sm);
          display: none;
          align-items: center;
          gap: 0.25rem;
        }
    
        .success-message.show {
          display: flex;
        }
    
        .character-counter {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-align: right;
          margin-top: 0.25rem;
        }
    
        .character-counter.warning {
          color: var(--warning-color);
        }
    
        .character-counter.error {
          color: var(--error-color);
        }
    
        .submit-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--spacing-md);
          margin-top: var(--spacing-xl);
          flex-wrap: wrap;
        }
    
        .checkbox-container {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          flex: 1;
        }
    
        .checkbox-wrapper {
          position: relative;
          display: inline-block;
        }
    
        .checkbox-input {
          opacity: 0;
          position: absolute;
          width: 20px;
          height: 20px;
          margin: 0;
          cursor: pointer;
        }
    
        .checkbox-custom {
          width: 20px;
          height: 20px;
          border: 2px solid var(--border-color);
          border-radius: 4px;
          background: var(--background);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          cursor: pointer;
        }
    
        .checkbox-input:checked + .checkbox-custom {
          background: var(--success-color);
          border-color: var(--success-color);
        }
    
        .checkbox-custom::after {
          content: '✓';
          color: white;
          font-size: 14px;
          font-weight: bold;
          opacity: 0;
          transform: scale(0);
          transition: all 0.2s ease;
        }
    
        .checkbox-input:checked + .checkbox-custom::after {
          opacity: 1;
          transform: scale(1);
        }
    
        .checkbox-input:disabled + .checkbox-custom {
          opacity: 0.5;
          cursor: not-allowed;
        }
    
        .checkbox-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          cursor: pointer;
          user-select: none;
        }
    
        .btn-submit {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: white;
          border: none;
          padding: 0.875rem 2rem;
          border-radius: var(--border-radius);
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          position: relative;
          overflow: hidden;
          min-width: 140px;
          justify-content: center;
        }
    
        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
        }
    
        .btn-submit:active:not(:disabled) {
          transform: translateY(0);
        }
    
        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
    
        .btn-submit.loading {
          pointer-events: none;
        }
    
        .btn-submit .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: none;
        }
    
        .btn-submit.loading .loading-spinner {
          display: block;
        }
    
        .btn-submit.loading .btn-text {
          display: none;
        }
    
        .confirmation-message {
          display: none;
          text-align: center;
          padding: var(--spacing-xl);
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(99, 102, 241, 0.1));
          border-radius: var(--border-radius);
          border: 1px solid var(--success-color);
        }
    
        .confirmation-message.show {
          display: block;
          animation: slideInUp 0.5s ease-out;
        }
    
        .confirmation-message h2 {
          color: var(--success-color);
          font-size: 1.5rem;
          margin-bottom: var(--spacing-md);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
        }
    
        .confirmation-message p {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
          line-height: 1.6;
        }
    
        .btn-back {
          background: var(--background-secondary);
          color: var(--text-primary);
          border: 2px solid var(--border-color);
          padding: 0.75rem 1.5rem;
          border-radius: var(--border-radius);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-sm);
        }
    
        .btn-back:hover {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
          transform: translateY(-1px);
        }
    
        /* Animations */
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
    
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
    
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
    
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
    
        .form-group {
          animation: fadeIn 0.5s ease-out;
        }
    
        .form-group:nth-child(1) { animation-delay: 0.1s; }
        .form-group:nth-child(2) { animation-delay: 0.2s; }
        .form-group:nth-child(3) { animation-delay: 0.3s; }
        .form-group:nth-child(4) { animation-delay: 0.4s; }
    
        /* Responsive Design */
        @media (max-width: 768px) {
          .contact {
            margin: 1rem;
            padding: var(--spacing-lg);
          }
    
          .form-row {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }
    
          .submit-section {
            flex-direction: column;
            align-items: stretch;
          }
    
          .checkbox-container {
            order: 1;
            justify-content: center;
          }
    
          .btn-submit {
            order: 2;
            width: 100%;
          }
    
          .contact-header h1 {
            font-size: 1.75rem;
          }
        }
    
        @media (max-width: 480px) {
          .contact {
            padding: var(--spacing-md);
          }
    
          .contact input,
          .contact textarea {
            padding: 0.875rem 0.875rem 0.875rem 2.5rem;
          }
    
          .input-icon {
            left: 0.75rem;
            font-size: 1rem;
          }
        }
    
        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          .contact {
            --text-primary: #f1f5f9;
            --text-secondary: #cbd5e1;
            --text-muted: #94a3b8;
            --background: #1e293b;
            --background-secondary: #334155;
            --background-tertiary: #475569;
            --border-color: #475569;
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
          }
        }
    
        /* Focus visible for accessibility */
        .contact input:focus-visible,
        .contact textarea:focus-visible,
        .btn-submit:focus-visible,
        .btn-back:focus-visible {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }
      `;

  let style_contact = document.createElement("style");
  style_contact.innerHTML = contact_css;
  section_contact.insertAdjacentElement("beforebegin", style_contact);

  let contact_html = `
        <div class="contact-header">
          <h1>Get In Touch</h1>
          <p>Have a question or want to work together? I'd love to hear from you.</p>
        </div>
    
        <form id="contactForm" novalidate>
          <div class="form-group">
            <div class="form-row">
              <div class="input-container">
                <input 
                  type="text" 
                  placeholder="Your full name" 
                  name="name" 
                  id="name" 
                  required 
                  autocomplete="name"
                />
                <i class="input-icon icon-user"></i>
                <div class="error-message" id="nameError">
                  <i class="icon-alert-circle"></i>
                  <span>Please enter your full name</span>
                </div>
                <div class="success-message" id="nameSuccess">
                  <i class="icon-check-circle"></i>
                  <span>Looks good!</span>
                </div>
              </div>
    
              <div class="input-container">
                <input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  name="email" 
                  id="email" 
                  required 
                  autocomplete="email"
                />
                <i class="input-icon icon-mail"></i>
                <div class="error-message" id="emailError">
                  <i class="icon-alert-circle"></i>
                  <span>Please enter a valid email address</span>
                </div>
                <div class="success-message" id="emailSuccess">
                  <i class="icon-check-circle"></i>
                  <span>Valid email!</span>
                </div>
              </div>
            </div>
          </div>
    
          <div class="form-group">
            <div class="input-container">
              <input 
                type="text" 
                placeholder="Subject (optional)" 
                name="subject" 
                id="subject" 
                autocomplete="off"
              />
              <i class="input-icon icon-tag"></i>
            </div>
          </div>
    
          <div class="form-group">
            <div class="input-container textarea-container">
              <textarea 
                placeholder="Tell me about your project, ideas, or just say hello..." 
                name="message" 
                id="message" 
                required
                maxlength="1000"
              ></textarea>
              <i class="input-icon icon-message-square"></i>
              <div class="character-counter" id="characterCounter">0 / 1000</div>
              <div class="error-message" id="messageError">
                <i class="icon-alert-circle"></i>
                <span>Please enter your message (minimum 10 characters)</span>
              </div>
              <div class="success-message" id="messageSuccess">
                <i class="icon-check-circle"></i>
                <span>Great message!</span>
              </div>
            </div>
          </div>
    
          <div class="submit-section">
            <div class="checkbox-container">
              <div class="checkbox-wrapper">
                <input 
                  type="checkbox" 
                  class="checkbox-input" 
                  name="form_checkbox" 
                  id="robotCheck" 
                  required 
                  disabled
                />
                <div class="checkbox-custom"></div>
              </div>
              <label for="robotCheck" class="checkbox-label">
                I'm not a robot and agree to be contacted
              </label>
            </div>
    
            <button class="btn-submit" type="submit" id="submitBtn" disabled>
              <div class="loading-spinner"></div>
              <span class="btn-text">
                <i class="icon-send"></i>
                Send Message
              </span>
            </button>
          </div>
        </form>
    
        <div class="confirmation-message" id="confirmationMessage">
          <h2>
            <i class="icon-check-circle"></i>
            Message Sent Successfully!
          </h2>
          <p>
            Thank you for reaching out! I've received your message and will get back to you within 24 hours.
          </p>
          <button class="btn-back" onclick="resetForm()">
            <i class="icon-arrow-left"></i>
            Send Another Message
          </button>
        </div>
      `;

  section_contact.innerHTML = contact_html;

  // ========== Enhanced Form Logic ==========
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const robotCheck = document.getElementById("robotCheck");
  const submitBtn = document.getElementById("submitBtn");
  const characterCounter = document.getElementById("characterCounter");

  // Validation patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const namePattern = /^[a-zA-ZÀ-ÿ\s]{2,50}$/;

  // Initialize
  robotCheck.value = location.href;

  // Real-time validation
  function validateField(input, pattern = null, minLength = 0) {
    const value = input.value.trim();
    const errorElement = document.getElementById(input.id + "Error");
    const successElement = document.getElementById(input.id + "Success");

    let isValid = true;

    if (input.hasAttribute("required") && !value) {
      isValid = false;
    } else if (pattern && value && !pattern.test(value)) {
      isValid = false;
    } else if (minLength && value.length < minLength) {
      isValid = false;
    }

    // Update UI
    input.classList.toggle("error", !isValid && value);

    if (errorElement) {
      errorElement.classList.toggle("show", !isValid && value);
    }

    if (successElement) {
      successElement.classList.toggle("show", isValid && value);
    }

    return isValid;
  }

  // Event listeners for real-time validation
  nameInput.addEventListener("input", () => {
    validateField(nameInput, namePattern);
    checkFormValidity();
  });

  emailInput.addEventListener("input", () => {
    validateField(emailInput, emailPattern);
    checkFormValidity();
  });

  messageInput.addEventListener("input", () => {
    const value = messageInput.value;

    // Update character counter
    characterCounter.textContent = `${value.length} / 1000`;
    characterCounter.classList.toggle("warning", value.length > 800);
    characterCounter.classList.toggle("error", value.length > 950);

    // Auto-resize textarea
    messageInput.style.height = "auto";
    messageInput.style.height = Math.min(messageInput.scrollHeight, 300) + "px";

    validateField(messageInput, null, 10);
    checkFormValidity();
  });

  // Enable checkbox after user interacts with form
  let hasInteracted = false;
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("focus", () => {
      if (!hasInteracted) {
        hasInteracted = true;
        setTimeout(() => {
          robotCheck.disabled = false;
        }, 1000);
      }
    });
  });

  robotCheck.addEventListener("change", checkFormValidity);

  function checkFormValidity() {
    const isNameValid = validateField(nameInput, namePattern);
    const isEmailValid = validateField(emailInput, emailPattern);
    const isMessageValid = validateField(messageInput, null, 10);
    const isRobotChecked = robotCheck.checked;

    const isFormValid = isNameValid && isEmailValid && isMessageValid && isRobotChecked;
    submitBtn.disabled = !isFormValid;
  }

  // Form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    await submitForm();
  });

  function validateForm() {
    const isNameValid = validateField(nameInput, namePattern);
    const isEmailValid = validateField(emailInput, emailPattern);
    const isMessageValid = validateField(messageInput, null, 10);

    if (!nameInput.value.trim()) {
      showFieldError(nameInput, "Please enter your full name");
      return false;
    }

    if (!emailPattern.test(emailInput.value.trim())) {
      showFieldError(emailInput, "Please enter a valid email address");
      return false;
    }

    if (messageInput.value.trim().length < 10) {
      showFieldError(messageInput, "Message must be at least 10 characters long");
      return false;
    }

    if (!robotCheck.checked) {
      alert("Please confirm you are not a robot");
      return false;
    }

    return true;
  }

  function showFieldError(input, message) {
    input.classList.add("error");
    const errorElement = document.getElementById(input.id + "Error");
    if (errorElement) {
      errorElement.querySelector("span").textContent = message;
      errorElement.classList.add("show");
    }
    input.focus();
  }

  async function submitForm() {
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add("loading");

    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim() || "Contact Form Submission",
      message: messageInput.value.trim(),
      currentUrl: window.location.href,
      timestamp: new Date().toISOString(),
    };

    try {
      // Determine URL based on environment
      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const url = isLocal ? "http://localhost:3000/api/email/submit" : "https://fgp.one/api/email/submit";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        showSuccessMessage();
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      showErrorMessage(error.message);
    } finally {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
    }
  }

  function showSuccessMessage() {
    form.style.display = "none";
    document.getElementById("confirmationMessage").classList.add("show");
  }

  function showErrorMessage(message = "An error occurred while submitting the form. Please try again.") {
    alert(message);
  }

  // Global function for reset
  window.resetForm = function () {
    form.style.display = "block";
    document.getElementById("confirmationMessage").classList.remove("show");
    form.reset();

    // Clear validation states
    [nameInput, emailInput, messageInput].forEach((input) => {
      input.classList.remove("error");
      const errorElement = document.getElementById(input.id + "Error");
      const successElement = document.getElementById(input.id + "Success");
      if (errorElement) errorElement.classList.remove("show");
      if (successElement) successElement.classList.remove("show");
    });

    // Reset character counter
    characterCounter.textContent = "0 / 1000";
    characterCounter.className = "character-counter";

    // Reset textarea height
    messageInput.style.height = "auto";

    // Reset checkbox
    robotCheck.checked = false;
    robotCheck.disabled = true;
    hasInteracted = false;

    // Reset submit button
    submitBtn.disabled = true;

    // Focus first input
    nameInput.focus();
  };

  // Initialize form
  checkFormValidity();

  console.log("📝 Modern Contact Form initialized successfully!");
}
