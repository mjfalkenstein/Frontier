'use strict';

let _ = require('lodash'),
    path = require('path'),
    utils = require(path.resolve('utils/utils.js')),
    uuid = require('uuid/v1');

class Player {
    constructor(other, ship = null) {
        this.name = _.get(other, 'name', 'Dade Murphy');
        this.discordUsername = _.get(other, 'discordUsername', 'Zero Cool');
        this.id = 'PLAYER:' + uuid();
        this.ship = ship;
        this.creationState = 0;
        this.location = {
            "currentSystemID": -1,
            "currentBodyID": -1,
            "destinationSystemID": -1,
            "destinationBodyID": -1,
            "travelTimeMS": 0
        };
    }

    toJSON() {
        return {
            'name': this.name,
            'discordUsername': this.discordUsername,
            'id': this.id,
            'ship': this.ship,
            'creationState': this.creationState,
            'location': this.location
        }
    }
}

module.exports = Player;