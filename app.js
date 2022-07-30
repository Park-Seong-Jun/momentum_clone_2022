function cheakDrinkage() {
    const inputAge = parseInt(prompt("Please write your name"))

    if (isNaN(inputAge) || inputAge < 0) {
        alert("Please write real number")
    } else if(inputAge <= 18){
        alert("You can't drink yet...")
    } else if(inputAge <= 50) {
        alert("You can drink!")
    } else if(inputAge === 100) {
        alert("Wow,you are wise!")
    } else if(inputAge >= 80) {
        alert("You can drink but it's not good to your health")
    } 
};


cheakDrinkage()