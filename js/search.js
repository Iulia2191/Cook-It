const search = document.getElementById('search');
const cardsContainer = document.querySelector('.retete-cards .row');

search.addEventListener('keyup', e => {
  let currentValue = e.target.value.toLowerCase();
  let cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    let cardTitle = card.querySelector('h5');
    if (cardTitle.textContent.toLowerCase().includes(currentValue)) {
      card.style.display = 'block';
      
      cardsContainer.insertBefore(card, cardsContainer.firstChild);
    } else {
      card.style.display = 'none';
    }
  });
});

