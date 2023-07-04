const search = document.getElementById('search')
const cardsContainer = document.querySelector('.retete-cards .row')
const cards = document.querySelectorAll('.card')
const searchButton = document.querySelector('#search-button')
const favoriteButtons = document.querySelectorAll('#favorite-btn')

// Search input
const urlParams = new URLSearchParams(window.location.search)
const searchQuery = urlParams.get('query')
if (searchQuery) {
  search.value = searchQuery
}

search.addEventListener('keyup', function (e) {
  const currentValue = e.target.value.toLowerCase()

  cards.forEach(function (card) {
    const cardTitle = card.querySelector('h5')
    const titleText = cardTitle.textContent.toLowerCase()

    if (titleText.includes(currentValue)) {
      card.style.display = 'block'
      cardsContainer.insertBefore(card, cardsContainer.firstChild)
    } else {
      card.style.display = 'none'
    }
  })
})
searchButton.addEventListener('click', function (e) {
  const currentValue = search.value.toLowerCase()

  cards.forEach(function (card) {
    const cardTitle = card.querySelector('h5')
    const titleText = cardTitle.textContent.toLowerCase()

    if (titleText.includes(currentValue)) {
      card.style.display = 'block'
      cardsContainer.insertBefore(card, cardsContainer.firstChild)
    } else {
      card.style.display = 'none'
    }
  })
})

// Adauga la favorite
favoriteButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault()

    const currentCard = e.target.closest('.card')
    const clonedCard = currentCard.cloneNode(true)

    const favoritePage = window.open('pages/favorite.html', '_blank')
    favoritePage.onload = () => {
      const favoriteContainer =
        favoritePage.document.querySelector('.favorite-cards')
      favoriteContainer.appendChild(clonedCard)

      const favoriteCards =
        JSON.parse(localStorage.getItem('favoriteCards')) || []
      favoriteCards.push(clonedCard.innerHTML)
      localStorage.setItem('favoriteCards', JSON.stringify(favoriteCards))
    }
  })
})
