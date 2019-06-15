// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Event Listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Show Time
function showTime() {
    let timeNow = new Date();
    let hour = timeNow.getHours();
    let min = timeNow.getMinutes();
    let sec = timeNow.getSeconds();

    // Set AM or PM
    // const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    // hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `
        <span class="time-hour">${addLeadingZero(hour)}</span>
        <span class="time-min">${addLeadingZero(min)}</span>
        <span class="time-sec">${addLeadingZero(sec)}</span>
    `;

    setTimeout(showTime, 1000);
}

// Add Leading Zero
const addLeadingZero = function(number) {
    return (number < 10) ? '0'+number : number;
}

// Set Background & Greeting
function setBgGreet() {
    let timeNow = new Date();
    let hour = timeNow.getHours();

    switch(true) {
        case (hour < 12):
            document.body.style.backgroundImage = 'url(img/morning.jpg)';
            document.body.style.color = 'white';
            greeting.textContent = 'Good Morning';
            break;
        case (hour < 18):
            document.body.style.backgroundImage = 'url(img/afternoon.jpg)';
            greeting.textContent = 'Good Afternoon';
            break;
        default:
            document.body.style.backgroundImage = 'url(img/night.jpg)';
            document.body.style.color = 'white';
            greeting.textContent = 'Good Evening';
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // If Enter is pressed
        if (e.which == 13 || e.keyCode == 13) {            
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // If Enter is pressed
        if (e.which == 13 || e.keyCode == 13) {            
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Run
showTime();
setBgGreet();
getName();
getFocus();