const subscribeButton = document.querySelector('.btn-newsletter')
const subscribeInput = document.querySelector('#newsletterEmail')
const errorContainer = document.querySelector('.subscribe-error-message')
const newsletterContainer = document.querySelector('.newsletter-container')
const submitContainer = document.querySelector('.submit-container')
const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')

// Email validation Subscribe Input
function validateEmail () {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (subscribeInput.value.match(validRegex)) {
    newsletterContainer.style.opacity = '0'
    submitContainer.innerHTML =
      '<p>Multumim pentru inregistrare. </br> Ne vom auzi in curand! 👏</p>'
    subscribeInput.focus()
    subscribeButton.removeEventListener('click', handleClick)
    subscribeInput.removeEventListener('keydown', handleEnter)
    return true
  } else {
    errorContainer.innerHTML = '<p>Email-ul nu este valid</p>'
    return false
  }
}

function handleClick (event) {
  event.preventDefault()
  validateEmail()
}

function handleEnter (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    validateEmail()
  }
}

subscribeButton.addEventListener('click', handleClick)
subscribeInput.addEventListener('keydown', handleEnter)

// Search Input Navbar
function submitSearchForm (event) {
  event.preventDefault()
  const searchInputValue = searchInput.value
  window.location.href =
    '/search.html?query=' + encodeURIComponent(searchInputValue)
}

// Animatie Logo

window.addEventListener('scroll', function () {
  const logo = document.getElementById('logo')

  if (window.scrollY > 0) {
    logo.classList.remove('large')
  } else {
    logo.classList.add('large')
  }
})
// Navbar Background

window.addEventListener('scroll', function () {
  const navBar = document.querySelector('#nav')

  if (window.scrollY > 0) {
    navBar.classList.add('scrolling')
  } else {
    navBar.classList.remove('scrolling')
  }
})

// Rating Retete

document.addEventListener('DOMContentLoaded', () => {
  const ratingContainers = document.querySelectorAll('.rating')

  ratingContainers.forEach(ratingContainer => {
    const stars = ratingContainer.querySelectorAll('.fa-star')
    const recipeId = ratingContainer.dataset.recipeId

    const savedRating = localStorage.getItem(`rating_${recipeId}`)
    if (savedRating) {
      const rating = parseInt(savedRating)
      if (!isNaN(rating) && rating >= 1 && rating <= stars.length) {
        for (let i = 0; i < rating; i++) {
          stars[i].classList.add('active')
        }
      }
    }

    stars.forEach((star, index1) => {
      star.addEventListener('click', () => {
        stars.forEach((star, index2) => {
          index1 >= index2
            ? star.classList.add('active')
            : star.classList.remove('active')
        })

        const rating = index1 + 1
        localStorage.setItem(`rating_${recipeId}`, rating.toString())
      })
    })
  })
})
