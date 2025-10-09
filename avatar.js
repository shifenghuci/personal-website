const avatar = document.getElementById('avatar');
const allAvatars = ["neutral", "neutral_2", "confident", "sad", "thinking", "upset"];

// Function to get a random integer between min and max (inclusive)
function getRandomDelay(min, max) {
    // 1500ms (1.5s) to 4000ms (4s) for a nice pause range
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to select a random avatar from the array
function getRandomAvatar() {
    let newAvatar;
    let randomIndex;
    randomIndex = Math.floor(Math.random() * allAvatars.length);
    newAvatar = allAvatars[randomIndex];
    return newAvatar;
}

// The main loop function
function changeAvatar() {
    // 1. Get a random avatar name that's NOT the current one
    const newAvatarName = getRandomAvatar();
    
    // 2. Set the new image source
    avatar.src = `avatars/${newAvatarName}_blinking.png`;
    
    // 3. Get a random blink delay, shorter than changing emote
    const blinkDelay = getRandomDelay(150, 200);
    setTimeout(() => {avatar.src = `avatars/${newAvatarName}.png`;}, blinkDelay);

    // 4. Restart the loop after the random delay
    const delay = getRandomDelay(4000, 6000);
    setTimeout(changeAvatar, delay);
}

// Start the sequence
// (Wait 1 second before the very first change)
setTimeout(changeAvatar, 2500);