const img = document.getElementById('album');
const music = document.getElementById('music');
img.addEventListener('mouseenter', () => {
    // music.currentTime = 0;
    music.play();

    // startDiscoMode();
})

//commented out, so touch once and enjoy the music!
img.addEventListener('mouseleave', ()=>{
    music.pause();
    // stopDiscoMode()
})

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
    return{h,s,l};
}

function getRetroComplementaryColor(h, s, l) {

    // Hue 
    let clashH = (h + 180) % 360;
    
    // Slightly less saturate for soft appeal
    let clashS = Math.max(s * 0.85, 50);

    // Slight overexposure for vintage feeling
    let clashL = Math.min(l * 1.1, 85);
    
    clashS = Math.round(Math.min(Math.max(clashS, 0), 100));
    clashL = Math.round(Math.min(Math.max(clashL, 0), 100));

    return `hsl(${clashH}, ${clashS}%, ${clashL}%)`;
}

// Function to start the disco effect
function startDiscoMode() {
    document.title = "December - Chelmico";
    discoText.textContent = "Shifeng Hong | 洪世峰"
    // Only start if it's not already running
    if (discoIntervalId === null) {
        // Use setInterval to change the color every 100 milliseconds
        discoIntervalId = setInterval(() => {
            const {h,s,l} = getRandomDiscoColor()
            discoText.style.color = `hsl(${h}, ${s}%, ${l}%)`;
            discoGlass.style.background = getRetroComplementaryColor(h,s,l);
            // discoGlass.style.boxShadow = `0 8px 32px 0 rgba(31, 38, 135, 0.37) TODO: Add disco shadow (light)
        }, 2000); // Adjust this number for speed (lower = faster)
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
        document.title = "👋 Hi there, this is Shifeng Hong";
    }
}
