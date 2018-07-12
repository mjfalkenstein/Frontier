'use strict';

let fs = require('fs');

class Engines{
    constructor(filepath = "") {
        let enginesDataRaw = fs.readFileSync('../data/engines/' + filepath);
        let enginesData = JSON.parse(enginesDataRaw);
        if (filepath.length === 0 || !enginesData) {
            this.id = filepath;
            this.manufacturer = "";
            this.model = "";
            this.speed = 0;
        } else {
            this.id = filepath;
            this.manufacturer = enginesData.manufacturer;
            this.model = enginesData.model;
            this.speed = enginesData.speed;
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

module.exports = Engines;