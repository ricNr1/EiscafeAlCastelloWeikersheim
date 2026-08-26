// Mobile Navigation
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Galerie-Lightbox
const items = [...document.querySelectorAll('.gallery-grid a')];
const lightbox = document.getElementById('lightbox');
const lbImg = lightbox.querySelector('img');
const lbCaption = lightbox.querySelector('figcaption');
let current = 0;

function show(i) {
  current = (i + items.length) % items.length;
  const item = items[current];
  lbImg.src = item.href;
  lbImg.alt = item.querySelector('img').alt;
  lbCaption.textContent = item.dataset.caption || '';
}

items.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    show(i);
    lightbox.showModal();
  });
});

lightbox.querySelector('.lb-close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
lightbox.querySelector('.lb-next').addEventListener('click', () => show(current + 1));

lightbox.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') show(current - 1);
  if (e.key === 'ArrowRight') show(current + 1);
});

// Klick auf den Hintergrund schließt
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.close();
});
