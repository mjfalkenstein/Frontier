'use strict';

let path = require('path'),
    _ = require('lodash'),
    Chassis = require(path.resolve('shipObjects/chassis.js')),
    Hull = require(path.resolve('shipObjects/hull.js')),
    Engines = require(path.resolve('shipObjects/engines.js')),
    Shields = require(path.resolve('shipObjects/shields.js')),
    Hardpoint = require(path.resolve('shipObjects/hardpoint.js')),
    Hyperdrive = require(path.resolve('shipObjects/hyperdrive.js'));

class Ship{
    constructor(chassisFilepath, enginesFilepath, hullFilepath, shieldsFilepath,
                hardpointFilepaths, hyperdriveFilepath) {
        this.chassis = new Chassis(chassisFilepath);
        this.hull = new Hull(hullFilepath);
        this.engines = new Engines(enginesFilepath);
        this.shields = null;
        this.hardpoints = [];
        this.hyperdrive = null;

        if (shieldsFilepath) this.shields = new Shields(shieldsFilepath);
        if (hyperdriveFilepath) this.hyperdrive = new Hyperdrive(hyperdriveFilepath);
        if (hardpointFilepaths && hardpointFilepaths.length > 0) {
            _.forEach(hardpointFilepaths, (hardpointFilepath) => {
                this.hardpoints.push(new Hardpoint(hardpointFilepath));
            });
        }

        this.currentHealth = this.hull.maxHealth;
        this.currentShields = this.shields ? this.shields.maxHealth : 0;
    }

    toJSON() {
        let shipData = {
            'currentHealth': this.currentHealth,
            'currentShields': this.currentShields,
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