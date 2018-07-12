'use strict';

let fs = require('fs');

class Hyperdrive{
    constructor(filepath = "") {
        let hyperdrivesDataRaw = fs.readFileSync('../data/hyperdrives/' + filepath);
        let hyperdrivesData = JSON.parse(hyperdrivesDataRaw);
        if (filepath.length === 0 || !hyperdrivesData) {
            this.id = filepath;
            this.manufacturer = "";
            this.model = "";
            this.speed = 1;
        } else {
            this.id = filepath;
            this.manufacturer = hyperdrivesData.manufacturer;
            this.model = hyperdrivesData.model;
            this.speed = hyperdrivesData.speed;
        }
    }

    toJSON() {
        return {
            'id': this.id,
            'manufacturer': this.manufacturer,
            'model': this.model,
            'speed': this.speed
        };
    }
}

module.exports = Hyperdrive;