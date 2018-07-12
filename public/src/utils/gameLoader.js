'use strict';

let fs = require('fs'),
    path = require('path'),
    Game = require(path.resolve('gameObjects/game.js')),
    q = require('q');

module.exports.createGame = function (dirPath, gameID = 0) {
    let promise = q.when();

    promise = promise.then(() => {
        return new Game(gameID, dirPath);
    });

    return promise;
};