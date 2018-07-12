'use strict';

const path = require('path'),
    discordUtilities = require(path.resolve('utils/discordUtilities.js')),
    fs = require('fs'),
    Player = require(path.resolve('objects/player.js')),
    inputHandler = require(path.resolve('utils/inputHandler.js')),
    Ship = require(path.resolve('objects/ship.js')),
    SolarSystem = require(path.resolve('objects/solarSystem.js')),
    gameLoader = require(path.resolve('utils/gameLoader.js'));

function main() {
    // return gameLoader.createGame('data').then((game) => {
    //     return discordUtilities.init(game);
    // }).catch((err) => {
    //     console.log('Error occurred during initialization:\n', err);
    // });

    let ship = new Ship('courierChassis.json', 'gforceEngines.json', 'bulwarkHull.json', 'novaShields.json',
        ['thermalLanceHardpoint.json'], 'milleniumHyperdrive.json');
    let sol = new SolarSystem('sol');
    let player = new Player();
    player.ship = ship;
    player.location.currentSystemID = sol.id;
    player.location.currentBodyID = sol.getBodyIDByName('earth');

    console.log(JSON.stringify(player.toJSON(), null, 2));
    console.log(sol.toJSON());

    return inputHandler.promptForInput(player);
}

main();