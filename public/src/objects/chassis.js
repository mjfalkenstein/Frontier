'use strict';

let fs = require('fs');

class Ship{
    constructor(filepath = "") {
        let chassisDataRaw = fs.readFileSync('../data/chassis/' + filepath);
        let chassisData = JSON.parse(chassisDataRaw);
        if (filepath.length === 0 || !chassisData) {
            this.id = -1;
            this.manufacturer = "";
            this.model = "";
            this.startingScreenText = "";
            this.borderCharacters = "";
            this.maxFuel = 0;
            this.cargo = [];
            this.maxCargo = 0;
        } else {
            this.id = chassisData.id;
            this.manufacturer = chassisData.manufacturer;
            this.model = chassisData.model;
            this.startingScreenText = chassisData.startingScreenText;
            this.borderCharacters = chassisData.borderCharacters;
            this.maxFuel = chassisData.maxFuel;
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
            'cargo': this.cargo,
            'maxCargo': this.maxCargo
        };
    }
}

module.exports = Ship;