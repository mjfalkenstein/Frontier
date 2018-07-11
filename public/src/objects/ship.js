'use strict';

let path = require('path'),
    _ = require('lodash'),
    Chassis = require(path.resolve('objects/chassis.js')),
    Hull = require(path.resolve('objects/hull.js')),
    Engines = require(path.resolve('objects/engines.js'));

class Ship{
    constructor(chassisFilepath, enginesFilepath, hullFilepath) {
        this.chassis = new Chassis(chassisFilepath);
        this.hull = new Hull(hullFilepath);
        this.engines = new Engines(enginesFilepath);
        this.shields = null;
        this.hardpoints = [];
        this.hyperdrive = null;
    }

    toJSON() {
        let shipData = {
            'chassis': (this.chassis || {}).toJSON(),
            'hull': (this.hull || {}).toJSON(),
            'engines': (this.engines || {}).toJSON()
        };

        if (this.shields) shipData.shields = this.shields.toJSON();
        if (this.hyperdrive) shipData.hyperdrive = this.hyperdrive.toJSON();
        if (this.hardpoints.length > 0) shipData.hardpoints = [];

        _.forEach(this.hardpoints, (hardpoint) => {
            shipData.hardpoints.push(hardpoint.toJSON());
        });

        return shipData;
    }
}

module.exports = Ship;