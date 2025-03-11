const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your name: ', (name) => {
    rl.question('Please enter your favorite colors, separated by a comma: ', (colors) => {
        const colorArray = colors.split(',');
        console.log(`Hi ${name}! Your favorite colors are:`);
        colorArray.forEach((color, index) => {
            console.log(`${index + 1}. ${color.trim()}`);
        });
        rl.close();
    });
});
