fetch(`https://gnews.io/api/v4/top-headlines?country=ao&lang=pt&apikey=${GNEWS_API_KEY}`)
.then(res => res.json())
.then(data => {
  let container = document.getElementById("noticias");
  let destaque = document.getElementById("featured");
  data.articles.forEach((article, index) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${article.title}</h3>
      <img src="${article.image}" width="100%">
      <p>${article.description || ""}</p>
      <a href="artigo.html?url=${encodeURIComponent(article.url)}">Ler notícia</a>
      <a href="https://wa.me/?text=${encodeURIComponent(article.title + " " + article.url)}" target="_blank">Compartilhar no WhatsApp</a>
    `;
    container.appendChild(card);
    if(index === 0){ destaque.innerHTML = card.innerHTML; }
  });
});
