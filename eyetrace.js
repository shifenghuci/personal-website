document.addEventListener('DOMContentLoaded', () => {
    const eye = document.querySelector('.eye');
    const pupil = document.querySelector('.pupil');

    // Define the maximum distance the pupil can move from the center
    // (Eye radius - Pupil radius / 2 - some buffer)
    const pupilMaxDistance = 30; 

    // Function to handle the eye movement
    const followMouse = (e) => {
        // 1. Get the center coordinates of the main eye element
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // 2. Get the mouse coordinates
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // 3. Calculate the difference (delta)
        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;

        // 4. Calculate the angle (in radians) using arctan2
        // atan2 is better than atan because it handles all four quadrants correctly.
        const angleRad = Math.atan2(deltaY, deltaX);

        // 5. Calculate the distance to move the pupil (always the max distance)
        const pupilX = pupilMaxDistance * Math.cos(angleRad);
        const pupilY = pupilMaxDistance * Math.sin(angleRad);

        // 6. Apply the transformation
        // We maintain the initial centering translation (-50%, -50%) 
        // and add the calculated movement (pupilX, pupilY).
        pupil.style.transform = `translate(
        calc(-50% + ${pupilX}px), 
        calc(-50% + ${pupilY}px)
        )`;
    };

    // Attach the function to the mousemove event on the entire document
    document.addEventListener('mousemove', followMouse);
});