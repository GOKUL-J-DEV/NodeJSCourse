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

yargs.command({
    command:'list',
    describe:'Listing all notes',
    handler:()=> {
        console.log('Listing all notes')
    }
})

yargs.command({
    command:'read',
    describe:'Reading a new note',
    handler:()=> {
        console.log('Reading a note')
    }
})

console.log(yargs.argv)