function displayResult() {
  let codeHTML = document.getElementById("html").value;
  let codeCSS = document.getElementById("css").value;
  let codeJS = document.getElementById("js").value;
  let resultEL = document.getElementById("result");

  resultEL.contentDocument.body.innerHTML = `${codeHTML} <style>${codeCSS}</style>`;
  resultEL.contentWindow.eval(codeJS)
}
