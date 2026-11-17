// Paste your deployed Google Web App URL below
const scriptURL = 'https://script.google.com/macros/s/AKfycbwse8nw2ADUbUUJEIi6odd6-TO_BZYUnqHrNQOBECZyvE8vIOiNz4cRDdBR9o9rYB6r/exec'; 

const form = document.forms['cod-form'];
const submitBtn = document.getElementById('submit-btn');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', e => {
  e.preventDefault(); 
  
  submitBtn.innerText = 'Processing Order...';
  submitBtn.disabled = true;

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      form.style.display = 'none';
      successMessage.style.display = 'block';
    })
    .catch(error => {
      console.error('Error!', error.message);
      submitBtn.innerText = 'Place Order (COD)';
      submitBtn.disabled = false;
      alert("Something went wrong. Please check your connection and try again.");
    });
});
