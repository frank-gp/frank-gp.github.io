/*
    <script src="https://frankgp.com/component/footer.js"></script>
    <header-component></header-component>
*/

let footer_html = /*html */ `
<!-- html... -->
<p>Create by Frank GP</p>
<!-- html. -->
`;

let footer_css = /*html */ `<style>
  html,
  body {
    height: 100%;
    margin: 0;
  }

  body {
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  header,
  footer {
    background-color: indigo;
    color: white;
    padding: 1rem 5vw;
  }
  footer {
    text-align: center;
    min-height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<!-- html. -->
`;

// ========== footer ==========
var footer = document.querySelector("footer");

if (!footer) {
  footer = document.createElement("footer");
  footer.id = "footer";
  document.body.insertAdjacentElement("beforeend", footer);
}

footer.innerHTML = footer_css + footer_html;
