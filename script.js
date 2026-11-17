// Paste your deployed Google Web App URL below
const scriptURL = 'YOUR_WEB_APP_URL_HERE'; 

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
