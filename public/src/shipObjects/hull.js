'use strict';

let fs = require('fs');

class Hull{
    constructor(filepath = "") {
        let hullDataRaw = fs.readFileSync('../data/hulls/' + filepath);
        let hullData = JSON.parse(hullDataRaw);
        if (filepath.length === 0 || !hullData) {
            this.id = filepath;
            this.manufacturer = "";
            this.model = "";
            this.armor = 0;
            this.maxHealth = 1;
        } else {
            this.id = filepath;
            this.manufacturer = hullData.manufacturer;
            this.model = hullData.model;
            this.armor = hullData.armor;
            this.maxHealth = hullData.maxHealth;
        }
    }

    toJSON() {
        return {
            'id': this.id,
            'manufacturer': this.manufacturer,
            'model': this.model,
            'armor': this.armor,
            'maxHealth': this.maxHealth
        };
    }
}

module.exports = Hull;