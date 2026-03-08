// artigo.js
const params = new URLSearchParams(window.location.search);
const url = params.get("url");
document.getElementById("conteudo").innerHTML = `
<p>Leia a notícia completa no site original:</p>
<a href="${url}" target="_blank">${url}</a>
`;
