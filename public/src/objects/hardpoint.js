'use strict';

let fs = require('fs');

class Hardpoint{
    constructor(filepath = "") {
        let hardpointsDataRaw = fs.readFileSync('../data/hardpoints/' + filepath);
        let hardpointsData = JSON.parse(hardpointsDataRaw);
        if (filepath.length === 0 || !hardpointsData) {
            this.id = filepath;
            this.manufacturer = "";
            this.model = "";
            this.miningTime = -1;
            this.damage = 1;
        } else {
            this.id = filepath;
            this.manufacturer = hardpointsData.manufacturer;
            this.model = hardpointsData.model;
            this.miningTime = hardpointsData.miningTime;
            this.damage = hardpointsData.damage;
        }
    }

    toJSON() {
        return {
            'id': this.id,
            'manufacturer': this.manufacturer,
            'model': this.model,
            'miningTime': this.miningTime,
            'damage': this.damage
        };
    }
}

module.exports = Hardpoint;