// Hardcoded computer choiceas bear
const computerChoice = 'Bear';

// Prompt for players name
let playerName = prompt('Welcome to Bear Hunter Ninja! Please enter your name to get started:');

// show player's name in console
let amessage = `You have entered: ${playerName}`;
console.log('The players name is ' + playerName); 

// Let's play message with players name
let letsPlayMessage = playerName;
    alert('Hi ' + letsPlayMessage + ' Let\'s play!!');

// Ask player who they want to be
let playerChoice = prompt('Who are you: Bear, Ninja or Hunter?');

// Prep player's results
let resultMessagePlayer = playerName + ', you choose ' + playerChoice + '!';
    console.log(resultMessagePlayer); 

// Prep computer's results
let resultMessageComputer = 'The computer choose ' + computerChoice + '!';
    console.log(resultMessageComputer); 

// varaible for the results to be displayed
let gameResult = '';

//find winner
   //if there is a tie
if (
    playerChoice === 'Bear' ||
    playerChoice === 'Ninja' ||
    playerChoice === 'Hunter'
) {
    // Use SWITCH to determine outcome
    switch (playerChoice + '-' + computerChoice) {
        //if there is a tie
        case 'Bear-Bear':
        case 'Ninja-Ninja':
        case 'Hunter-Hunter':
            gameResult = "It's a tie!";
            break;

        // if the player wins   
        case 'Bear-Ninja':
        case 'Ninja-Hunter':
        case 'Hunter-Bear':
            gameResult = playerName + ', you win!';
            break;

        // if the computer wins
        case 'Ninja-Bear':
        case 'Hunter-Ninja':
        case 'Bear-Hunter':
            gameResult = 'Computer wins!';
            break;
    }

//if there is a validation issue
} else {
    gameResult = 'Invalid choice. Please choose Bear, Ninja, or Hunter.';
}

//Results in console
console.log(gameResult); 


// Results in HTML
document.getElementById('gameResult').innerHTML =  
    resultMessagePlayer + '<br>' + resultMessageComputer + '<br>' + gameResult;