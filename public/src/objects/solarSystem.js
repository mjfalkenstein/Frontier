'use strict';

let fs = require('fs'),
    path = require('path'),
    _ = require('lodash'),
    utils = require(path.resolve('utils/utils.js')),
    SpaceBody = require(path.resolve('objects/spaceBody.js'));

class SolarSystem{
    constructor(filename) {
        let solarSystemDataRaw = fs.readFileSync('../data/solarSystems/' + filename + '.json');
        let solarSystemData = JSON.parse(solarSystemDataRaw);
        if (!solarSystemData) {
            this.id = filename;
            this.name = "";
            this.bodies = [];
        } else {
            let spaceBodies = [];
            _.forEach(solarSystemData.bodies, (bodyName) => {
                spaceBodies.push(new SpaceBody(bodyName));
            });
            this.id = filename;
            this.name = solarSystemData.name;
            this.bodies = spaceBodies;
        }
    }

    getBodyIDByName(name) {
        for (let i = 0; i < this.bodies.length; i++){
            let body = this.bodies[i];
            if(body.name.toLowerCase() === name.toLowerCase()) {
                return i;
            }
        }
    }

    listSolarMap(delimiter) {
        let retString = '';
        _.forEach(this.bodies, (body) => {
            retString += delimiter +
                         utils.formatStringToGivenLength(body.name, 10) + ' | ' +
                         utils.formatStringToGivenLength(body.distanceAU, 10) + 'AU\n';
        });
        return retString.substring(0, retString.length - 1);
    }

    toJSON() {
        let solarSystemData = {
            'id': this.id,
            'name': this.name,
            'bodies': []
        };

        _.forEach(this.bodies, (solarSystem) => {
            solarSystemData.bodies.push(solarSystem.toJSON());
        });

        return solarSystemData;
    }
}

module.exports = SolarSystem;