let userScore = 0;
let compScore = 0;
let tieScore = 0;

const userResultWin = document.querySelector('.user-win p');
const compResultWin = document.querySelector('.comp-win p');
const tieResult = document.querySelector('.tie p');

const userResultImg = document.querySelector('.user-img');
const compResultImg = document.querySelector('.comp-img');

const rockSelection = document.getElementById('rock');
const paperSelection = document.getElementById('paper');
const scissorsSelection = document.getElementById('scissors');

// get random computer choice
const getComputerChoice = () => {
    const choices = ['rock','paper','scissors'];
    const getRandomChoice = Math.floor(Math.random()*3);
    return choices[getRandomChoice]; 
}

// push numbered results to html
const userLose = (user, computer) => {
    compScore++;
    compResultWin.innerHTML = compScore;
}
const userWin = (user, computer) => {
    userScore++;
    userResultWin.innerHTML = userScore;
}
const userTie = (user, computer) => {
    tieScore++;
    tieResult.innerHTML = tieScore;
}

const compareResult = (userChoice) => {
    const compChoice = getComputerChoice();
    const combinedResult = userChoice + compChoice;

    // selected user image changes
    if(userChoice == 'rock'){
        const oldImg  = userResultImg.children[1];

        const image = document.createElement('img');
        image.src = 'images/rock-icon.png';

        userResultImg.replaceChild(image, oldImg);
    }
    if(userChoice == 'paper'){
        const oldImg  = userResultImg.children[1];

        const image = document.createElement('img');
        image.src = 'images/paper-icon.png';

        userResultImg.replaceChild(image, oldImg);
    }
    if(userChoice == 'scissors'){
        const oldImg  = userResultImg.children[1];

        const image = document.createElement('img');
        image.src = 'images/scissors-icon.png';

        userResultImg.replaceChild(image, oldImg);
    }

    // computer selection image changes
    if(compChoice == 'rock'){
        const oldImg  = compResultImg.children[1];

        const image = document.createElement('img');
        image.src = 'images/rock-icon.png';

        compResultImg.replaceChild(image, oldImg);
    }
    if(compChoice == 'paper'){
        const oldImg  = compResultImg.children[1];

        const image = document.createElement('img');
        image.src = 'images/paper-icon.png';

        compResultImg.replaceChild(image, oldImg);
    }
    if(compChoice == 'scissors'){
        const oldImg  = compResultImg.children[1];

        const image = document.createElement('img');
        image.src = 'images/scissors-icon.png';

        compResultImg.replaceChild(image, oldImg);
    }

    // det if user wins, loses or ties
    return combinedResult === 'rockscissors' || combinedResult === 'paperrock' || combinedResult === 'scissorspaper' ? userWin(userChoice, compChoice)
     : combinedResult === 'rockpaper' || combinedResult === 'paperscissors' || combinedResult === 'scissorsrock' ? userLose(userChoice, compChoice)
     : combinedResult === 'rockrock' || combinedResult === 'paperpaper' || combinedResult === 'scissorsscissors' ? userTie(userChoice, compChoice)
     : console.log('undefined');

}

// set select div to clickable
const selectClickable = () => {
    rockSelection.addEventListener('click', () => compareResult('rock'));
    paperSelection.addEventListener('click', () => compareResult('paper'));
    scissorsSelection.addEventListener('click', () => compareResult('scissors'));
}

const main = () => {
    selectClickable();
    getComputerChoice();
}

main();
