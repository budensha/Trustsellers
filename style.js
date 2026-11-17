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
document.addEventListener
