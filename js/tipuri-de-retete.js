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

const cards = document.querySelectorAll('.card')
cards.forEach(card => {
  let randomAniDelay = Math.floor(Math.random() * 500)
  card.style.animation = `fadeIn 1s .${randomAniDelay}s ease forwards`
})
