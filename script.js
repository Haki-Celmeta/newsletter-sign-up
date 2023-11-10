const input = document.querySelector('#email');
const error = document.querySelector('.error');
const subscribeButton = document.querySelector('#subscribe-button');
const mainContainer = document.querySelector('.main-container');
const successMessage = document.querySelector('.message-container');

const emailValidation =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

/**
 * Display the error and change background color and border of input
 */
function errorState() {
  error.style.display = 'block';
  input.style.border = '1px solid red';
  input.style.backgroundColor = 'rgb(255 203 200)';
}

subscribeButton.addEventListener('click', () => {
  if (input.value.match(emailValidation)) {
    mainContainer.style.display = 'none';
    successMessage.style.display = 'flex';
  } else {
    errorState();
  }
})