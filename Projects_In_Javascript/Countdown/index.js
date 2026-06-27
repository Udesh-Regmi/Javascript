const countdown= document.querySelector('#countdown');
const daysEl= document.querySelector('.day');
const hoursEl= document.querySelector('.hour');
const minsEl= document.querySelector('.minute');
const secondsEl= document.querySelector('.second');

const newYears = new Date(2027,0, 1, 0, 0, 0);
const today = new Date().getTime();
const gap = newYears - today;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const textDay = Math.floor(gap / day);
const textHour = Math.floor((gap % day) / hour);
const textMin = Math.floor((gap % hour) / minute);
const textSec = Math.floor((gap % minute) / second);
countdown.innerHTML = `${newYears.toISOString().slice(0, 10)} <br> ${newYears.toLocaleTimeString()}`;


setInterval(() => {
    const today = new Date().getTime();
    const gap = newYears - today;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMin = Math.floor((gap % hour) / minute);
    const textSec = Math.floor((gap % minute) / second);

    daysEl.innerText= `${textDay} days`;
    hoursEl.innerText= `${textHour} hours`;
    minsEl.innerText= `${textMin} mins`;
    secondsEl.innerText= `${textSec} secs`;
}, 1000);