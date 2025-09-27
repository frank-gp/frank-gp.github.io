/*

    <!-- ========== highlight Component... ========== -->
      <script src="https://frank-gp.github.io/lib/highlight.js" type="module"></script>
    <!-- ========== highlight Component. ========== -->
    
 */

let createStyle = (url) => {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;
  document.head.appendChild(link);
  // document.head.insertAdjacentElement("afterbegin", link);
  // document.head.append("afterbegin", link);
};

createStyle("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/base16/dracula.min.css");

import hljs from "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/highlight.min.js";

hljs.highlightAll();
