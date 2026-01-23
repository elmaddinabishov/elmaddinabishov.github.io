document.getElementById("generate").addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
  
    const html = `
  <!DOCTYPE html>
  <html lang="az">
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <link rel="stylesheet" href="assets/css/index.css">
  </head>
  <body>
    <h1>${title}</h1>
    <p>${content.replace(/\n/g, "<br>")}</p>
  </body>
  </html>
    `;
  
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title}.html`;
    a.click();
  
    URL.revokeObjectURL(url);
  });
  