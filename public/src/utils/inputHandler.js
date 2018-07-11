'use strict';

const readline = require('readline'),
    q = require('q'),
    _ = require('lodash'),
    nlp = require('compromise'),
    mongoose = require('mongoose'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

class InputHandler {
    static promptForInput(player) {
        rl.question('>', (input) => {
            rl.pause();
            console.log(player.name, 'entered:', input);
            rl.resume();
            return this.promptForInput(player);
        });
    }
}

module.exports = InputHandler;