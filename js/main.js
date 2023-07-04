const subscribeButton = document.querySelector('.btn-newsletter')
const subscribeInput = document.querySelector('#newsletterEmail')
const errorContainer = document.querySelector('.subscribe-error-message')
const newsletterContainer = document.querySelector('.newsletter-container')
const submitContainer = document.querySelector('.submit-container')
const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')

// Email validation
function ValidateEmail () {
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
  ValidateEmail()
}

function handleEnter (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    ValidateEmail()
  }
}

subscribeButton.addEventListener('click', handleClick)
subscribeInput.addEventListener('keydown', handleEnter)

// Search
function submitSearchForm (event) {
  event.preventDefault()
  const searchInputValue = searchInput.value
  window.location.href =
    '/search.html?query=' + encodeURIComponent(searchInputValue)
}

// Animatie Logo

window.addEventListener('scroll', function () {
  var logo = document.getElementById('logo')

  if (window.scrollY > 0) {
    logo.classList.remove('large')
  } else {
    logo.classList.add('large')
  }
})
