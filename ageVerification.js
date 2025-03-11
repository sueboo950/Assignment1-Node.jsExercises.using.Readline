const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your age: ', (age) => {
    if (parseInt(age) > 21) {
        console.log('You are allowed inside the club.');
    } else {
        console.log('You are not allowed inside the club.');
    }
    rl.close();
});
