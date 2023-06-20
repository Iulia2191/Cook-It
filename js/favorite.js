document.addEventListener('DOMContentLoaded', () => {
  const favoriteContainer = document.getElementById('favorite-container')
  const favoriteCards = JSON.parse(localStorage.getItem('favoriteCards'))

  if (favoriteCards && favoriteCards.length > 0) {
    favoriteCards.forEach((cardHTML, index) => {
      const cardWrapper = document.createElement('div')
      cardWrapper.className = 'card-border'

      const card = document.createElement('div')
      card.className = 'col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'
      card.innerHTML = `
        <div class="card" style="width: 18rem;">
          ${cardHTML}
          <button class="remove-btn" data-index="${index}">Sterge</button>
        </div>
      `

      cardWrapper.appendChild(card)
      favoriteContainer.appendChild(cardWrapper)
    })

    const removeButtons = document.querySelectorAll('.remove-btn')
    removeButtons.forEach(button => {
      button.addEventListener('click', e => {
        const index = e.target.dataset.index
        removeCardFromFavorites(index)
        e.target.parentElement.remove()
      })
    })
  } else {
    const noFavoritesMessage = document.createElement('h3')
    noFavoritesMessage.className = 'text-white'
    noFavoritesMessage.textContent = 'Nu ai retete favorite.'
    favoriteContainer.appendChild(noFavoritesMessage)
  }

  function removeCardFromFavorites (index) {
    const favoriteCards = JSON.parse(localStorage.getItem('favoriteCards'))
    favoriteCards.splice(index, 1)
    localStorage.setItem('favoriteCards', JSON.stringify(favoriteCards))
  }
})
