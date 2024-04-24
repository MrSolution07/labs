// Author: CE BULABULA
// date: 03.04.2024
// gradedlab 5
var RandomNum = Math.floor(Math.random() * 100) + 1; // the bounderies are included
var NumOfGuess = 0; 
console.log(RandomNum) // you can see the correct number in the console to mark easily 

function GuessNumber() 
{
    var GuessedNum = parseInt(document.getElementById("number").value);
    var Result = document.getElementById("result");
    var attemptsList = document.getElementById("guesses");

    NumOfGuess++;
    var message;
    var NewItem = document.createElement("li");
    NewItem.textContent = GuessedNum;

    if (GuessedNum > RandomNum) 
    {
        message = "Too big!";
        NewItem.classList.add("high");
    }
    else if (GuessedNum < RandomNum) 
    {
        message = "Too small!";
        NewItem.classList.add("low");
    }
    else 
    {
        message = `You got it right! You are a winner! It took you ${NumOfGuess} attempts to guess the correct number.` // well the question does say that we should display attempts but the screenshoots didn't show that 
        document.getElementById("makeguess").disabled = true;
    }

    Result.textContent = message;
    attemptsList.appendChild(NewItem);

    if (GuessedNum == RandomNum) {
        NewItem.removeAttribute('class');
    }
}

