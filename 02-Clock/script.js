const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondsDegress = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegress}deg)`;

    const minute = now.getMinutes();
    const minutesDegress = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegress}deg)`;

    const hour = now.getHours();
    const hoursDegress = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegress}deg)`;

}

setInterval(setDate, 1000);