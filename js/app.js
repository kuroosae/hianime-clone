const trendingAnime = [
  {
    title: "Attack on Titan",
    image: "https://via.placeholder.com/200x300?text=AOT"
  },
  {
    title: "One Piece",
    image: "https://via.placeholder.com/200x300?text=One+Piece"
  },
  {
    title: "Jujutsu Kaisen",
    image: "https://via.placeholder.com/200x300?text=JJK"
  }
];

const latestAnime = [
  {
    title: "Demon Slayer Ep 1",
    image: "https://via.placeholder.com/200x300?text=Demon+Slayer"
  },
  {
    title: "Chainsaw Man Ep 1",
    image: "https://via.placeholder.com/200x300?text=Chainsaw+Man"
  }
];

function renderAnime(list, elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = "";

  list.forEach(anime => {
   card.innerHTML = `
  <a href="anime.html" style="text-decoration:none;color:white">
    <img src="${anime.image}">
    <h4>${anime.title}</h4>
  </a>
`;

    container.appendChild(card);
  });
}

renderAnime(trendingAnime, "trending");
renderAnime(latestAnime, "latest");

