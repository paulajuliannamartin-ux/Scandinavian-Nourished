// Fyller i aktuellt år
document.getElementById("year").textContent = new Date().getFullYear();

// Exempel-poster (kan bytas ut mot Sanity senare)
const blogPosts = [
  { title: "A calm morning ritual", image: "https://via.placeholder.com/400x250", excerpt: "Simple ways to start your day with ease." },
  { title: "Slow living inspiration", image: "https://via.placeholder.com/400x250", excerpt: "Ideas for finding balance in a busy world." }
];

const recipePosts = [
  { title: "Italian Red Pasta", image: "https://via.placeholder.com/400x250", excerpt: "A warm and nourishing recipe with rich flavors." },
  { title: "Green Garden Salad", image: "https://via.placeholder.com/400x250", excerpt: "Fresh, crisp, and perfectly simple." }
];

function renderPosts(posts, selector) {
  const container = document.querySelector(selector);
  posts.forEach(post => {
    const el = document.createElement("div");
    el.className = "post";
    el.innerHTML = `
      <img src="${post.image}" alt="${post.title}" style="width:100%; border-radius:8px;" />
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
    `;
    container.appendChild(el);
  });
}

renderPosts(blogPosts, ".blog .post-grid");
renderPosts(recipePosts, ".recipes .post-grid");

