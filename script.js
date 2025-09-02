// Nuvarande år i foten
document.getElementById('year').textContent = new Date().getFullYear();

// Enkel client-side routing
const routes = {
  articles: () => alert('Här kommer ARTICLES: artiklar, recept och listor.'),
  spotify:  () => alert('Här bäddar du in dina Spotify-listor eller länkar till dem.'),
  shop:     () => alert('Här säljer du dina PDF-guider. Byt senare till riktig checkout.'),
  newsletter: () => alert('Nyhetsbrev: 1 € / år. Koppla t.ex. Buttondown, Mailchimp eller ConvertKit.')
};

document.querySelectorAll('[data-route]').forEach(el => {
  el.addEventListener('click', (e) => {
    const k = el.getAttribute('data-route');
    if (routes[k]) {
      e.preventDefault();
      routes[k]();
    }
  });
});

// Tangentbordsgenväg: tryck "/" för att fokusera första länken
document.addEventListener('keydown', (e) => {
  if (e.key === '/') {
    e.preventDefault();
    const first = document.querySelector('.menu a');
    if (first) first.focus();
  }
});

