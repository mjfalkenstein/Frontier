'use strict';

const path = require('path'),
    discordUtilities = require(path.resolve('utils/discordUtilities.js')),
    fs = require('fs'),
    Player = require(path.resolve('gameObjects/player.js')),
    inputHandler = require(path.resolve('utils/inputHandler.js')),
    Ship = require(path.resolve('shipObjects/ship.js')),
    SolarSystem = require(path.resolve('gameObjects/solarSystem.js')),
    gameLoader = require(path.resolve('utils/gameLoader.js'));

function main() {
    return gameLoader.createGame('data/solarSystems').then((game) => {
        let ship = new Ship('courierChassis.json', 'gforceEngines.json', 'bulwarkHull.json', 'novaShields.json',
            ['thermalLanceHardpoint.json'], 'milleniumHyperdrive.json');
        let player = new Player();
        player.ship = ship;
        player.location.currentSystemID = game.solarSystems[0].id;
        player.location.currentBodyID = game.solarSystems[0].getBodyIDByName('earth');

        console.log(JSON.stringify(player.toJSON(), null, 2));
        console.log(game.solarSystems[0].toJSON());

        return inputHandler.promptForInput(player);
    }).catch((err) => {
        console.log('Error occurred during initialization:\n', err);
    });
}

main();