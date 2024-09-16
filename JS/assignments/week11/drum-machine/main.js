// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');

// This function is called every 600ms
function update() {

    // Play the 'tick' sound
    tick.play();
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
