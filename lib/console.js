/* 

    <section id="consoleLog"></section>
    <script src="https://frank-gp.github.io/lib/console.js" sync></script>
    <script>
        console.log("console_in_dom");
    </script>

*/

var originalConsoleLog = console.log;
var consoleLogElement = document.getElementById("consoleLog");

if (!consoleLogElement) {
  consoleLogElement = document.createElement("section");
  consoleLogElement.id = "consoleLog";
  document.body.insertAdjacentElement("afterbegin", consoleLogElement);
}

console.log = function (message) {
  originalConsoleLog.apply(console, arguments);
  var logMessageElement = document.createElement("p");
  logMessageElement.textContent = message;
  consoleLogElement.appendChild(logMessageElement);
};

document.head.innerHTML += /* html */ `
<style>
#consoleLog {
  background-color: #113;
  color: white;
  padding: 0.3em 1em;
  font-family: monospace;
}
</style>`;
