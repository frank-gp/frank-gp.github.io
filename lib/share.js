/* 

      <section class="share_container">
        <!-- <link rel="stylesheet" href="https://frank-gp.github.io/icon/icomoon/style.css" /> -->
        <facebook-button> Share on Facebook <i class="icon-facebook"></i> </facebook-button>
        <twitter-button> Share on Twitter <i class="icon-twitter"></i> </twitter-button>
        <whatsapp-button> WhatsApp <i class="icon-whatsapp"></i> </whatsapp-button>
        <script src="https://frank-gp.github.io/component/share.js"></script>
      </section>

*/


let stylesGlobal = `
<link rel="stylesheet" href="https://frank-gp.github.io/icon/icomoon/style.css" />

<style>
.facebook-button, .twitter-button, .whatsapp-button {
    display: inline-block;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
    margin-bottom: 5px;
    cursor:pointer;
}
</style>

`;

// Facebook Button Component
class FacebookButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Define the CSS styles using a template string
    const styles = `<style>.facebook-button {background-color: #1877f2;}</style>`;

    const button = document.createElement("a");
    button.classList.add("facebook-button");
    button.innerHTML = `${this.innerHTML}`;
    button.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;

    // Append the styles and button to the shadow root
    this.shadowRoot.innerHTML = stylesGlobal + styles;
    this.shadowRoot.appendChild(button);
  }
}
customElements.define("facebook-button", FacebookButton);

// Twitter Button Component
class TwitterButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Define the CSS styles using a template string
    const styles = `<style>.twitter-button {background-color: #1DA1F2;}</style>`;

    const button = document.createElement("a");
    button.classList.add("twitter-button");
    button.innerHTML = `${this.innerHTML}`;
    button.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`;

    // Append the styles and button to the shadow root
    this.shadowRoot.innerHTML = stylesGlobal + styles;
    this.shadowRoot.appendChild(button);
  }
}
customElements.define("twitter-button", TwitterButton);

//   ==========  ==========

// JavaScript code for the web component
class WhatsappButton extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root for the web component
    this.attachShadow({ mode: "open" });

    // Define the CSS styles using a template string
    const styles = `<style>.whatsapp-button {background-color: #25D366;}</style>`;

    // Create the button element
    const button = document.createElement("a");
    button.classList.add("whatsapp-button");
    button.innerHTML = `${this.innerHTML}`;

    // Handle the button click event
    button.addEventListener("click", () => {
      // Get the current page title
      const pageTitle = document.title;

      // Generate the WhatsApp API URL with the page title and URL as the text parameter
      const text = `${pageTitle}\n\n${window.location.href}`;
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;

      // Open the WhatsApp API URL in a new window with minimal UI
      window.open(whatsappUrl, "_blank", "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=600,height=400");
    });

    // Append the styles and button to the shadow root
    this.shadowRoot.innerHTML = stylesGlobal + styles;
    this.shadowRoot.appendChild(button);
  }
}

// Define the web component
customElements.define("whatsapp-button", WhatsappButton);
