const usernameInput = document.querySelector('#username')
const emailInput = document.querySelector('#email')
const phoneInput = document.querySelector('#phone')
const usernameError = document.querySelector('.username-error-message')
const emailError = document.querySelector('.email-error-message')
const phoneError = document.querySelector('.phone-error-message')
const button = document.querySelector('#button')
const submitted = document.querySelector('.submitted')
const rightContainer = document.querySelector('.contact-right')
const leftContainer = document.querySelector('.contact-left')

usernameInput.addEventListener('change', function (event) {
  const value = event.target.value
  if (value.length < 3) {
    usernameError.innerHTML =
      'Username-ul trebuie sa contina minim 3 caractere.'
  } else {
    usernameError.innerHTML = ''
  }
})

emailInput.addEventListener('change', function (event) {
  const value = event.target.value
  if (value.includes('@gmail') || value.includes('@yahoo')) {
    emailError.innerHTML = ''
  } else {
    emailError.innerHTML =
      'Adresa de email trebuie sa contina @gmail sau @yahoo.'
  }
})

phoneInput.addEventListener('change', function (event) {
  const value = event.target.value
  if (isNaN(value)) {
    phoneError.innerHTML = 'Va rugam sa introduceti doar caractere numerice.'
  } else {
    phoneError.innerHTML = ''
  }
})

button.addEventListener('click', function (event) {
  event.preventDefault()
  const usernameValue = usernameInput.value
  const emailValue = emailInput.value
  const phoneValue = phoneInput.value
  const usernameIsValid = usernameValue.length >= 3
  const emailIsValid =
    emailValue.includes('@gmail') || emailValue.includes('@yahoo')
  const phoneIsValid = !isNaN(phoneValue)
  if (usernameIsValid && emailIsValid && phoneIsValid) {
    rightContainer.style.opacity = '0'
    rightContainer.style.pointerEvents = 'none'
    leftContainer.style.opacity = '0'
    leftContainer.style.pointerEvents = 'none'
    submitted.innerHTML =
      '<p>Multumim pentru inregistrare. </br> Ne vom auzi in curand! 👏</p>'
  }
})
