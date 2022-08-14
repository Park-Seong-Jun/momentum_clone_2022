const loginForm = document.body.querySelector("#login-form")
const loginFormInput = document.body.querySelector("#name-input")
const greetingMassege = document.body.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "Username"

function appearApp() {
    const clock = document.querySelector(".clock");
    const quoteMessage = document.querySelector("#quote-message");
    const toDoForm = document.querySelector("#todo");
    const bookMark = document.querySelector("#book-mark");
    clock.classList.remove("hidden");
    toDoForm.classList.remove("hidden");
    weather.classList.remove("hidden");
    quoteMessage.classList.remove("hidden");
    bookMark.classList.remove("hidden");
}

function paintGreeting(savedUsername) {
    
    const clockHour = document.querySelector(".clock__column__hour");
    const timeGreeting = parseInt(clockHour.innerText)

    if(timeGreeting > 6 && timeGreeting < 10) {
        greetingMassege.innerText = `좋은 아침이야, ${savedUsername}`;
    } else if(timeGreeting > 12 && timeGreeting <= 15) {
        greetingMassege.innerText = `좋은 오후야, ${savedUsername}`;
    } else if(timeGreeting > 18 && timeGreeting <= 20) {
        greetingMassege.innerText = `좋은 저녁이야, ${savedUsername}`;
    } else if(timeGreeting > 22 && timeGreeting <23 ) {
        greetingMassege.innerText = `잘 자, ${savedUsername}`;
    } else {
        greetingMassege.innerText = `안녕, ${savedUsername}`;
    }
    
    loginForm.style.display = "none";
    greetingMassege.classList.remove(HIDDEN_CLASSNAME);
}
function handleSubmitEvent(event) {
    event.preventDefault();
    const username = loginFormInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username)
    appearApp()
};
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",handleSubmitEvent);
    
} else {
    paintGreeting(savedUsername);
    appearApp()
}


