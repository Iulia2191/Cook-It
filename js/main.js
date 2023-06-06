const subscribeButton = document.querySelector('.btn-newsletter')
const subscribeInput = document.querySelector('#newsletterEmail')
const errorContainer = document.querySelector('.subscribe-error-message')
const newsletterContainer = document.querySelector('.newsletter')
// Email Validation

console.log('hi')

subscribeButton.addEventListener('click', function (event) {
  event.preventDefault()
  const emailValue = subscribeInput.value
  const emailIsValid = emailValue.includes('@')
  if (emailIsValid) {
    newsletterContainer.style.opacity = '0'
    errorContainer.innerHTML =
      '<p>Multumim pentru inregistrare. </br> Ne vom auzi in curand! 👏</p>'
  } else {
    errorContainer.innerHTML =
      '<p>Email-ul trebuie sa contina caracterul "@"</p>'
  }
})

subscribeInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    const emailValue = subscribeInput.value
    const emailIsValid = emailValue.includes('@')
    if (emailIsValid) {
      newsletterContainer.style.opacity = '0'
      errorContainer.innerHTML =
        '<p>Multumim pentru inregistrare. </br> Ne vom auzi in curand! 👏</p>'
    } else {
      errorContainer.innerHTML = '<p>Email-ul trebuie sa contina caracterul "@"'
    }
  }
})
