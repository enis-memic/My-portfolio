const fullName = document.getElementById('contact-name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function storeData() {
  const data = {
    userName: fullName.value,
    userEmail: email.value,
    userMessage: message.value,
  };
  localStorage.setItem('form', JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded', () => {
  const newData = localStorage.getItem('form');
  if (newData) {
    const mainData = JSON.parse(newData);
    fullName.value = mainData.userName;
    email.value = mainData.userEmail;
    message.value = mainData.userMessage;
  }
});

fullName.onchange = storeData;
email.onchange = storeData;
message.onchange = storeData;
