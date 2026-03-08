async function atualizarNoticias(){
  let res = await fetch(`https://gnews.io/api/v4/top-headlines?country=ao&lang=pt&apikey=${GNEWS_API_KEY}`);
  let dados = await res.json();
  let container = document.getElementById("noticias");
  let destaque = document.getElementById("featured");
  container.innerHTML = "";
  dados.articles.forEach((noticia, index)=>{
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${noticia.title}</h3>
      <img src="${noticia.image}" width="100%">
      <p>${noticia.description || ""}</p>
      <a href="artigo.html?url=${encodeURIComponent(noticia.url)}">Ler notícia</a>
      <a href="https://wa.me/?text=${encodeURIComponent(noticia.title + " " + noticia.url)}" target="_blank">Compartilhar no WhatsApp</a>
    `;
    container.appendChild(card);
    if(index === 0){ destaque.innerHTML = card.innerHTML; }
  });
}
atualizarNoticias();
setInterval(atualizarNoticias, 600000);
