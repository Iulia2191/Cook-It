const search = document.getElementById('search')
const cardsContainer = document.querySelector('.retete-cards .row')
const cards = document.querySelectorAll('.card')
const searchButton = document.querySelector('#search-button')
const noResultsMessage = document.querySelector('#no-results-message')

// Search input
function performSearch () {
  const currentValue = search.value.toLowerCase()
  let hasResults = false

  cards.forEach(function (card) {
    const cardTitle = card.querySelector('h5')
    const titleText = cardTitle.textContent.toLowerCase()

    if (titleText.includes(currentValue)) {
      card.style.display = 'block'
      cardsContainer.insertBefore(card, cardsContainer.firstChild)
      hasResults = true
    } else {
      card.style.display = 'none'
    }
  })

  if (!hasResults) {
    noResultsMessage.style.display = 'block'
  } else {
    noResultsMessage.style.display = 'none'
  }
}

const urlParams = new URLSearchParams(window.location.search)
const searchQuery = urlParams.get('query')
if (searchQuery) {
  search.value = searchQuery
  performSearch()
}

searchButton.addEventListener('click', function (e) {
  performSearch()
})

search.addEventListener('keyup', function (e) {
  performSearch()
})

search.addEventListener('input', function (e) {
  if (search.value === '') {
    cards.forEach(function (card) {
      card.style.display = 'block'
      cardsContainer.appendChild(card)
    })

    const url = new URL(window.location.href)
    url.searchParams.delete('query')
    window.history.replaceState({}, '', url)
  }
})
