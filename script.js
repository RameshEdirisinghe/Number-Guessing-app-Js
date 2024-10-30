const randomNumber = Math.floor(Math.random() * 10) + 1;
let count = 3

function Guess() {
    
    const userNumber = parseInt(document.getElementById("guesNumber").value);
    const feedback = document.getElementById("Feedback");
    const chancesElement = document.getElementById("Chances");


    if (count > 0) {
        if (randomNumber === userNumber) {
            feedback.innerHTML = "Congratulations! The correct answer is " + randomNumber;
            chancesElement.innerHTML = "0"; // End game
        } else {
            count--;
            chancesElement.innerHTML = "Chances Left: " + count;

            if (randomNumber > userNumber) {
                feedback.innerHTML = "Wrong Answer! The correct answer is higher.";
            } else {
                feedback.innerHTML = "Wrong Answer! The correct answer is lower.";
            }

            if (count === 0) {
                feedback.innerHTML = "";
                feedback.innerHTML += " Game Over! The correct answer is " + randomNumber;
            }
        }
    }
}



