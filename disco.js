
document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('eye-research');
    const target = document.getElementsByClassName("eye-container");

    if (trigger && target) {
        trigger.addEventListener('mouseover', () => {
            target.classList.add('is-visible');
        });

        trigger.addEventListener('mouseout', () => {
            target.classList.remove('is-visible');
        });
    }
});

const img = document.getElementById('album');
const music = document.getElementById('music');

img.addEventListener('mouseenter', () => {
    // music.currentTime = 0;
    music.play();

    //DJ mode
    startDiscoMode()
    
})

//commented out, so touch once and enjoy the music!
// img.addEventListener('mouseleave', ()=>{
//     music.pause();
//     stopDiscoMode()
// })

const discoText = document.getElementById('name');
const discoGlass = document.getElementById('head-navbar');
let discoIntervalId = null; // Variable to hold the interval timer ID

// Function to generate a random HSL color (great for vibrant colors)
function getRandomDiscoColor() {
    // Hue (H): Random value from 0 to 360 (all colors)
    const h = Math.floor(Math.random() * 361);
    // Saturation (S): High saturation for vibrancy (e.g., 90%)
    const s = 90;
    // Lightness (L): Medium lightness to avoid pure black/white (e.g., 60%)
    const l = 60;
    return `hsl(${h}, ${s}%, ${l}%)`;
}

// Function to start the disco effect
function startDiscoMode() {
    document.title = "December - Chelmico";
    // Only start if it's not already running
    if (discoIntervalId === null) {
        // Use setInterval to change the color every 100 milliseconds
        discoIntervalId = setInterval(() => {
            discoText.style.color = getRandomDiscoColor();
            discoGlass.style.background = getRandomDiscoColor();
        }, 1000); // Adjust this number for speed (lower = faster)
    }
}

// Function to stop the disco effect
function stopDiscoMode() {
    if (discoIntervalId !== null) {
        // Clear the interval to stop the repeated function call
        clearInterval(discoIntervalId);
        discoIntervalId = null;
        
        // Reset the text color to a default state
        discoText.style.color = 'white';
        discoGlass.style.background = 'rgba(255, 255, 255, 0.15)';
        document.title = "Hi there, this is Shifeng Hong";
    }
}
