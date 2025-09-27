/*
    <script src="https://frank-gp.github.io/component/footer.js"></script>
    <header-component></header-component>
*/

let footer_html = /*html */ `
<!-- html... -->
<p>Create by Frank GP</p>
<!-- html. -->
`;
let footer_css = /*html */ `<!-- html... -->
<style>
    :host {
        display: block;
        color: var(--color1);
        background: indigo;
        padding: 1em;
        text-align: center;
    }
</style>
<!-- html. -->`;

class footerComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = footer_html + footer_css;
  }
}
customElements.define("footer-component", footerComponent);
