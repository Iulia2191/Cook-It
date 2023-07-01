const search = document.getElementById('search')
const cardsContainer = document.querySelector('.retete-cards .row')

search.addEventListener('keyup', e => {
  let currentValue = e.target.value.toLowerCase()
  let cards = document.querySelectorAll('.card')

  cards.forEach(card => {
    let cardTitle = card.querySelector('h5')
    if (cardTitle.textContent.toLowerCase().includes(currentValue)) {
      card.style.display = 'block'

      cardsContainer.insertBefore(card, cardsContainer.firstChild)
    } else {
      card.style.display = 'none'
    }
  })
})

const favoriteButtons = document.querySelectorAll('#favorite-btn')

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
