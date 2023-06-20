const favoriteButtons = document.querySelectorAll('#favorite-btn')

favoriteButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault()

    const currentCard = e.target.closest('.card')
    const clonedCard = currentCard.cloneNode(true)

    const favoritePage = window.open('./favorite.html', '_blank')
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
