const clock = document.querySelector("#clock")

function numericDigitsOneToTwo(time) {
    return String(time).padStart(2,"0")
}

function displayTime() {
    const date = new Date()
    const timeNow = numericDigitsOneToTwo(date.getHours());
    const minuteNow = numericDigitsOneToTwo(date.getMinutes());
    let secNow = numericDigitsOneToTwo(date.getSeconds());
    clock.innerText = `${timeNow}:${minuteNow}:${secNow}`

}
displayTime()
setInterval(displayTime,1000)
