const userName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitButton = document.querySelector('.btn-contact');
const messageContainer = document.querySelector('.message-container');
const nameErrorMessage = document.querySelector('#name-error-message');
const emailErrorMessage = document.querySelector('#email-error-message');
const messageErrorMessage = document.querySelector('#message-error-message');
const contactContainer = document.querySelector('.contact-form-container');

function validateName() {
  if (userName.value.length < 5) {
    nameErrorMessage.innerHTML = "Numele dumneavoastra trebuie sa contina minim 5 caractere.";
    return false;
  } else {
    nameErrorMessage.innerHTML = "";
    return true;
  }
}

function validateEmail() {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(validRegex)) {
    emailErrorMessage.innerHTML = "";
    return true;
  } else {
    emailErrorMessage.innerHTML = "Va rugam sa introduceti un email valid.";
    return false;
  }
}

function validateMessage() {
  if (message.value.length <= 50) {
    messageErrorMessage.innerHTML = "Va rugam sa introduceti cel putin 50 de caractere.";
    return false;
  } else {
    messageErrorMessage.innerHTML = "";
    return true;
  }
}
userName.addEventListener("change", function(event) {
    const value = event.target.value;
  
    if (value.length < 5) {
      nameErrorMessage.innerHTML =
        "Numele dumneavoastra trebuie sa contina minim 5 caractere.";
    } else {
      nameErrorMessage.innerHTML = "";
    }
  });
  
email.addEventListener("change", function(event) {
      const value = event.target.value; 
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.value.match(validRegex)) {
        emailErrorMessage.innerHTML = "";
        return true;
      } else {
        let text = 'Va rugam sa introduceti un email valid.';
        emailErrorMessage.innerHTML = text;
        return false;
      }
    });
  
message.addEventListener("change", function(event) {
      const value = event.target.value;
      if (message.value.length <= 50) {
          messageErrorMessage.innerHTML = "Va rugam sa introduceti cel putin 50 de caractere.";
        }else{
          messageErrorMessage.innerHTML= ''
        }
    });
submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  if (validateName() && validateEmail() && validateMessage()) {
    contactContainer.style.opacity = '0';
    messageContainer.style.opacity = '1';
  }
});
