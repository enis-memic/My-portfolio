document.querySelector('.submit').addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const errorEmail = document.querySelector('.error');

  const right = (str) => str === str.toLowerCase();

  if (!right(email)) {
    e.preventDefault();
    errorEmail.textContent = 'Please check if your email is in lowercase letters!!!';
  }
});
