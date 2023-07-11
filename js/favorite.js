const favoriteButtons = document.querySelectorAll('#favorite-btn')
const favoriteContainer = document.getElementById('favorite-container')

// Adaugă la favorite

favoriteButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    let card = event.target.closest('.card')
    let cardData = {
      title: card.querySelector('.card-title').textContent,
      imageUrl: card.querySelector('.card-img-top').getAttribute('src'),
      recipeUrl: card.querySelector('.btn').getAttribute('href')
    }

    var favoriteRecipes = localStorage.getItem('favoriteRecipes')
    if (favoriteRecipes) {
      favoriteRecipes = JSON.parse(favoriteRecipes)
      favoriteRecipes.push(cardData)
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes))
    } else {
      favoriteRecipes = [cardData]
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes))
    }
    updateFavoriteRecipes()
  })
})

function updateFavoriteRecipes () {
  const favoriteRecipes =
    JSON.parse(localStorage.getItem('favoriteRecipes')) || []

  favoriteContainer.innerHTML = ''
  if (favoriteRecipes.length > 0) {
    favoriteRecipes.forEach((recipe, index) => {
      const card = createRecipeCard(recipe, index)
      favoriteContainer.appendChild(card)
    })
  } else {
    const emptyMessage = document.createElement('h4')
    emptyMessage.classList.add('text-white')
    emptyMessage.textContent = 'Nu ai retete favorite'
    favoriteContainer.appendChild(emptyMessage)
  }
}

function createRecipeCard (recipe, index) {
  const card = document.createElement('div')
  card.classList.add('card')

  // Imagine
  const image = document.createElement('img')
  image.classList.add('card-img-top')
  image.setAttribute('src', recipe.imageUrl)
  card.appendChild(image)

  // Titlul
  const title = document.createElement('h2')
  title.classList.add('card-title')
  title.textContent = recipe.title
  card.appendChild(title)

  // Buton Vezi reteta
  const link = document.createElement('a')
  link.classList.add('btn')
  link.setAttribute('href', recipe.recipeUrl)
  link.textContent = 'Vezi reteta'
  card.appendChild(link)

  // Buton Sterge
  const removeButton = document.createElement('button')
  removeButton.classList.add('remove-btn')
  removeButton.textContent = 'Sterge'
  removeButton.addEventListener('click', function () {
    removeRecipeFromFavorites(index)
  })
  card.appendChild(removeButton)
  return card
}

function removeRecipeFromFavorites (index) {
  const favoriteRecipes =
    JSON.parse(localStorage.getItem('favoriteRecipes')) || []

  if (index >= 0 && index < favoriteRecipes.length) {
    favoriteRecipes.splice(index, 1)
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes))

    updateFavoriteRecipes()
  }
}

updateFavoriteRecipes()
