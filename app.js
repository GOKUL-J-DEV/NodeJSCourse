const chalk = require('chalk')
const getNotes = require('./notes.js')

const command = process.argv
console.log(command);

if(command === 'add'){
console.log('adding notes');
}else if (command === 'remove'){
    console.log('removing notes')
}