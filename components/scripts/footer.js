let fgp_footer_html = /*html */ `
<p>Create by Frank GP</p>
`;

var fgp_footer = document.querySelector("footer");

if (!fgp_footer) {
  fgp_footer = document.createElement("footer");
  fgp_footer.id = "fgp_footer";
  document.body.insertAdjacentElement("beforeend", fgp_footer);
}

fgp_footer.innerHTML = fgp_footer_html;
