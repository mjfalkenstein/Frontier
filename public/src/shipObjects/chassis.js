'use strict';

let fs = require('fs');

class Ship{
    constructor(filepath = "") {
        let chassisDataRaw = fs.readFileSync('../data/chassis/' + filepath);
        let chassisData = JSON.parse(chassisDataRaw);
        if (filepath.length === 0 || !chassisData) {
            this.id = filepath;
            this.manufacturer = "";
            this.model = "";
            this.startingScreenText = "";
            this.borderCharacters = "";
            this.maxFuel = 0;
            this.maxNumHardpoints = 0;
            this.cargo = [];
            this.maxCargo = 0;
        } else {
            this.id = filepath;
            this.manufacturer = chassisData.manufacturer;
            this.model = chassisData.model;
            this.startingScreenText = chassisData.startingScreenText;
            this.borderCharacters = chassisData.borderCharacters;
            this.maxFuel = chassisData.maxFuel;
            this.maxNumHardpoints = chassisData.maxNumHardpoints;
            this.cargo = chassisData.cargo;
            this.maxCargo = chassisData.maxCargo;
        }
    }

    toJSON() {
        return {
            'id': this.id,
            'manufacturer': this.manufacturer,
            'model': this.model,
            'startingScreenText': this.startingScreenText,
            'borderCharacters': this.borderCharacters,
            'maxFuel': this.maxFuel,
            'maxNumHardpoints': this.maxNumHardpoints,
            'cargo': this.cargo,
            'maxCargo': this.maxCargo
        };
    }
}

module.exports = Ship;