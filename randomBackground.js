const navbar = document.getElementById('head-navbar');
const projector = document.getElementById('projector');
navbar.addEventListener('mouseenter', () => {
    projector.play();
    
});

navbar.addEventListener('mouseleave', ()=>{
    projector.pause();
});


document.addEventListener('DOMContentLoaded', () => {
const myImage = document.getElementById('reel');
const imageSources = [
    'random/walk.png',
    'random/fruits.png',
    'random/space.png',
    'random/spread.png',
    'random/stare.png',
    'random/frame.png',
    'random/knee.png',
];
let currentImageIndex = 0;
let intervalId;

// Preload images to prevent flickering
imageSources.forEach(src => {
    const img = new Image();
    img.src = src;
});

function startImageCycle() {
    intervalId = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    myImage.src = imageSources[currentImageIndex];
    }, 1800); // Change image every 500ms
}

function stopImageCycle() {
    clearInterval(intervalId);
        // Optional: reset to the initial image
    }

    navbar.addEventListener('mouseenter', startImageCycle);
    navbar.addEventListener('mouseleave', stopImageCycle);
});