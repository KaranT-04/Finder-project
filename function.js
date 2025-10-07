function toggleMenu() {
  const menu = document.getElementById('categoryMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function filterByRating(star) {
  document.querySelectorAll('.card-item').forEach(card => { 
    const r = parseInt(card.dataset.rating);
    card.style.display = r >= star ? 'block' : 'none';
  });
}