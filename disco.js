const img = document.getElementById('album');
const music = document.getElementById('music');
img.addEventListener('mouseenter', () => {
    // music.currentTime = 0;
    music.play();

    startDiscoMode();
})

//commented out, so touch once and enjoy the music!
img.addEventListener('mouseleave', ()=>{
    music.pause();
    stopDiscoMode()
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
    // 1. 计算互补色相 (H)：相差 180 度。
    // 使用模运算确保 H 值仍在 0-360 范围内。
    let clashH = (h + 180) % 360;

    // 2. 调整饱和度 (S) 和亮度 (L) 以实现“复古”效果。
    
    // **饱和度调整 (S)：**
    // 略微降低饱和度（例如 85%），让颜色更柔和、不那么刺眼，避免“俗气”的纯撞色。
    // 同时设置一个最低饱和度（例如 50%），以确保撞色效果明显。
    let clashS = Math.max(s * 0.85, 50);

    // **亮度调整 (L)：**
    // 略微调整亮度（例如提高 10%），以增加颜色之间的层次感或陈旧感。
    // 同时设置一个最大亮度（例如 85%），避免颜色太白。
    let clashL = Math.min(l * 1.1, 85);
    
    // 确保 S 和 L 在 0-100 范围内，并取整。
    clashS = Math.round(Math.min(Math.max(clashS, 0), 100));
    clashL = Math.round(Math.min(Math.max(clashL, 0), 100));

    // 3. 返回 CSS HSL 格式的字符串。
    // 注意：CSS 的 HSL 函数要求 S 和 L 带有百分号。
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
