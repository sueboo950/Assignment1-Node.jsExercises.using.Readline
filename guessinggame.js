const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const targetNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

const guessNumber = () => {
    if (attempts > 0) {
        rl.question(`Guess a number between 1 and 10 (${attempts} attempts left): `, (guess) => {
            if (parseInt(guess) === targetNumber) {
                console.log('Congratulations! You guessed the correct number.');
                rl.close();
            } else {
                attempts--;
                if (attempts === 0) {
                    console.log('Sorry, you lose. The correct number was ' + targetNumber);
                    rl.close();
                } else {
                    console.log('Incorrect guess. Try again.');
                    guessNumber();
                }
            }
        });
    }
};

guessNumber();
