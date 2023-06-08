const subscribeButton = document.querySelector('.btn-newsletter')
const subscribeInput = document.querySelector('#newsletterEmail')
const errorContainer = document.querySelector('.subscribe-error-message')
const newsletterContainer = document.querySelector('.newsletter-container')
const submitContainer = document.querySelector('.submit-container')


function ValidateEmail() {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (subscribeInput.value.match(validRegex)) {
    newsletterContainer.style.opacity = '0'
    submitContainer.innerHTML =
      '<p>Multumim pentru inregistrare. </br> Ne vom auzi in curand! 👏</p>'
    subscribeForm.text1.focus();
    return true;
  } else {
    errorContainer.innerHTML =
      '<p>Email-ul nu este valid</p>'
    return false;
  }
}

subscribeButton.addEventListener('click', function (event) {
  event.preventDefault()
  ValidateEmail()
})

subscribeInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    ValidateEmail()
  }
})
