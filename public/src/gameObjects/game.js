'use strict';

let fs = require('fs'),
    path = require('path'),
    _ = require('lodash'),
    SolarSystem = require(path.resolve('gameObjects/solarSystem.js'));

class Game {
    constructor (gameID, dirPath) {
        dirPath = '../' + dirPath + '/';
        let files = fs.readdirSync(dirPath);
        let solarSystems = [];

        _.forEach(files, (file) => {
            solarSystems.push(new SolarSystem(file));
        });

        return {
            'gameID': gameID,
            'solarSystems': solarSystems
        };
    }
}

module.exports = Game;