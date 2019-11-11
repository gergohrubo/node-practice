const chalk = require('chalk');

const blue = chalk.blue
console.log(blue('Hello world!'));

// or importing functions using object destructuring
const { red, green, yellow } = require('chalk')

console.log(`
    CPU: ${red('90%')}
    RAM: ${green('40%')}
    DISK: ${yellow('70%')}
`);