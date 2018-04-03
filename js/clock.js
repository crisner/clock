let hourHand = document.querySelector('.hour-hand');
let minuteHand = document.querySelector('.minute-hand');
let secondHand = document.querySelector('.second-hand');

setInterval(setTime, 1000);
function setTime () {
    // Get time information
    let today = new Date();
    let currHour = today.getHours();
    let currMins = today.getMinutes();
    let currSeconds = today.getSeconds();
    let hourDeg = (currHour/12) * 360;
    let minDeg = currMins * 6;
    let secDeg = currSeconds * 6;
    // Move the hands on the clock
    hourHand.style.transform = 'translate(-50%, 5%) rotate(' + hourDeg + 'deg)';
    minuteHand.style.transform = 'translate(-50%, 5%) rotate(' + minDeg + 'deg)';
    secondHand.style.transform = 'translate(-50%, 5%) rotate(' + secDeg + 'deg)';
    // Avoid animating hands backwards on reaching zero
    removeTransition(currSeconds, secondHand, minuteHand, hourHand);
};

// Momentarily remove transition
function removeTransition (currTime, prop1, prop2, prop3) {
    if (currTime === 0) {
        prop1.style.transitionProperty = 'none';
        prop2.style.transitionProperty = 'none';
        prop3.style.transitionProperty = 'none';
    } else {
        prop1.style.transitionProperty = 'inherit';
        prop2.style.transitionProperty = 'inherit';
        prop3.style.transitionProperty = 'inherit';
    }
}