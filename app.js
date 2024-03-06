const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


yargs.command({
    command:'add',
    describe:'Add a new note',
    handler:()=> {
        console.log('Adding a new note')
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a new note',
    handler:()=> {
        console.log('Removing a  note')
    }
})

console.log(yargs.argv)