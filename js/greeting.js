const loginForm = document.body.querySelector("#login-form")
const loginFormInput = document.body.querySelector("#login-form input")
const greetingMassege = document.body.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "Username"

function paintGreeting(savedUsername) {
    greetingMassege.innerText = `Hi ${savedUsername}`;
    greetingMassege.classList.remove(HIDDEN_CLASSNAME)
}
function handleSubmitEvent(event) {
    event.preventDefault();
    const username = loginFormInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username)
};
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",handleSubmitEvent);
} else {
    paintGreeting(savedUsername);
}


