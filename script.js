// År i footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobilmeny
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Aktiv länk vid scroll (IntersectionObserver)
const links = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('section[id]')];
const io = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px', threshold: [0, 1] }
);
sections.forEach(s => io.observe(s));

// Smooth scroll
links.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    nav.classList.remove('is-open');
    toggle && toggle.setAttribute('aria-expanded', 'false');
  });
});

// Dummy-innehåll (ersätts senare av Sanity)
const blogData = [
  { title: "A calm morning ritual", kicker: "Mindful", date: "2025-03-14", img: "https://picsum.photos/seed/sn01/800/600" },
  { title: "Slow living checklist",   kicker: "List",    date: "2025-04-03", img: "https://picsum.photos/seed/sn02/800/600" },
  { title: "On gentle productivity",  kicker: "Essay",   date: "2025-05-22", img: "https://picsum.photos/seed/sn03/800/600" },
  { title: "A weekend of less",       kicker: "Notes",   date: "2025-06-07", img: "https://picsum.photos/seed/sn04/800/600" },
  { title: "Afternoon tea ritual",    kicker: "Ritual",  date: "2025-07-18", img: "https://picsum.photos/seed/sn05/800/600" },
  { title: "Declutter your screen",   kicker: "Guide",   date: "2025-08-02", img: "https://picsum.photos/seed/sn06/800/600" }
];

const recipeData = [
  { title: "Tomato Basil Spaghetti",  kicker: "Pasta",  date: "2025-02-01", img: "https://picsum.photos/seed/rc01/800/600" },
  { title: "Martini Olive Salad",     kicker: "Salad",  date: "2025-02-22", img: "https://picsum.photos/seed/rc02/800/600" },
  { title: "Vanilla Poached Pears",   kicker: "Dessert",date: "2025-03-02", img: "https://picsum.photos/seed/rc03/800/600" },
  { title: "Herbed Focaccia",         kicker: "Bread",  date: "2025-03-28", img: "https://picsum.photos/seed/rc04/800/600" },
  { title: "Tuscan White Beans",      kicker: "Soup",   date: "2025-04-11", img: "https://picsum.photos/seed/rc05/800/600" },
  { title: "Rosemary Roast Chicken",  kicker: "Main",   date: "2025-05-05", img: "https://picsum.photos/seed/rc06/800/600" }
];

// Renderkort
function renderCards(arr, selector){
  const grid = document.querySelector(selector);
  if (!grid) return;
  grid.innerHTML = arr.map(item => `
    <article class="card">
      <div class="card-media" style="background-image:url('${item.img}'); background-size:cover; background-position:center"></div>
      <div class="card-body">
        <p class="card-kicker">${item.kicker}</p>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-meta">${new Date(item.date).toLocaleDateString('sv-SE', { year:'numeric', month:'short', day:'2-digit' })}</p>
      </div>
    </article>
  `).join('');
}

renderCards(blogData, '.section-blog .posts');
renderCards(recipeData, '.section-recipes .posts');
