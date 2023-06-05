const apiKey = 'a45804a9d4e846e2a1baec3ab0c6401d'
const form = document.querySelector('.ingredients-form')
const ingredientsInput = document.querySelector('.ingredients')
const recipesContainer = document.getElementById('recipes-container')
const fridgeContainer = document.querySelector('.fridge')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  const ingredients = ingredientsInput.value
    .split(',')
    .map(ingredient => ingredient.trim())

  const searchParams = ingredients.join(' ')
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
    searchParams
  )}&apiKey=${apiKey}`

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetchRecipes(url, options)
})

function fetchRecipes (url, options) {
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      displayRecipes(data.results)
    })
    .catch(error => {
      console.log('A apărut o eroare:', error)
    })
}

function displayRecipes (recipes) {
  if (recipes.length === 0) {
    recipesContainer.innerHTML =
      '<p>Nu s-au găsit rețete cu ingredientele introduse.</p>'
    return
  }

  const recipesList = document.createElement('ul')

  recipes.forEach(recipe => {
    const recipeItem = document.createElement('li')
    recipeItem.textContent = recipe.title
    recipesList.appendChild(recipeItem)
  })

  recipesContainer.innerHTML = ''
  recipesContainer.appendChild(recipesList)
}
