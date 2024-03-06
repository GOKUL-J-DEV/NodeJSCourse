const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

console.log(process.argv);
console.log(yargs.argv['title']);