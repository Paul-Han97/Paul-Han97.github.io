window.addEventListener("load", function () {
  const head = document.querySelector("head");
  const sidebar = document.querySelector("sidebar");

  const filePath = "../sidebar/sidebar.html";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if ("content" in document.createElement("template")) {
        let link = this.responseXML.querySelector("link");
        let linkClone = document.importNode(link, true);

        let template = this.responseXML.querySelector("template");
        let templateClone = document.importNode(template.content, true);

        head.appendChild(linkClone);
        sidebar.appendChild(templateClone);
        // document.body.appendChild(scriptNodeClone);
      }
    }
  };

  xhr.open("GET", filePath, true);
  xhr.responseType = "document";
  xhr.send();
});
