// 3D Tilt Effect Logic
const card = document.getElementById('productCard');

// Track mouse movement to rotate the card
document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Apply rotation based on mouse position
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset card position when mouse leaves the screen
document.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// Remove transition when moving so it feels responsive
document.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});

// Form Submission to Google Sheets
const form = document.getElementById('orderForm');
const statusMessage = document.getElementById('statusMessage');

// Replace with your actual Google Apps Script Web App URL
const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'; 

form.addEventListener('submit', e => {
    e.preventDefault();
    const submitBtn = form.querySelector('.buy-btn');
    submitBtn.innerText = 'Processing...';
    
    // Package the form data
    let requestBody = new FormData(form);

    // Send data to the spreadsheet
    fetch(scriptURL, { method: 'POST', body: requestBody })
        .then(response => {
            statusMessage.style.color = '#00ff88';
            statusMessage.innerText = 'Order placed successfully! We will contact you soon.';
            form.reset();
            submitBtn.innerText = 'Place COD Order';
        })
        .catch(error => {
            statusMessage.style.color = '#ff4757';
            statusMessage.innerText = 'Error placing order. Please try again.';
            submitBtn.innerText = 'Place COD Order';
        });
});
