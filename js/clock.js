const clockHour = document.querySelector(".clock__column__hour");
const clockMinute = document.querySelector(".clock__column:last-child > span");
const clockSecond = document.querySelector(".clock__column__second");

function numericDigitsOneToTwo(time) {
    return String(time).padStart(2,"0")
}

function displayTime() {
    const date = new Date()
    const timeNow = numericDigitsOneToTwo(date.getHours());
    const minuteNow = numericDigitsOneToTwo(date.getMinutes());
    const secNow = numericDigitsOneToTwo(date.getSeconds());
    clockHour.innerText = timeNow;
    clockMinute.innerText = minuteNow;
    clockSecond.innerText = secNow;
}
displayTime()
setInterval(displayTime,1000)
