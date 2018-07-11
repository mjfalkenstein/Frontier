'use strict';

let fs = require('fs');

class Hull{
    constructor(filepath = "") {
        let hullDataRaw = fs.readFileSync('../data/hulls/' + filepath);
        let hullData = JSON.parse(hullDataRaw);
        if (filepath.length === 0 || !hullData) {
            this.id = -1;
            this.manufacturer = "";
            this.model = "";
            this.armor = 0;
            this.health = 1;
        } else {
            this.id = hullData.id;
            this.manufacturer = hullData.manufacturer;
            this.model = hullData.model;
            this.armor = hullData.armor;
            this.health = hullData.armor;
        }
    }

    toJSON() {
        return {
            'id': this.id,
            'manufacturer': this.manufacturer,
            'model': this.model,
            'armor': this.armor,
            'health': this.health
        };
    }
}

module.exports = Hull;