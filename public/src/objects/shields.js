'use strict';

let fs = require('fs');

class Shields{
    constructor(filepath = "") {
        let shieldsDataRaw = fs.readFileSync('../data/shields/' + filepath);
        let shieldsData = JSON.parse(shieldsDataRaw);
        if (filepath.length === 0 || !shieldsData) {
            this.id = filepath;
            this.manufacturer = "";
            this.model = "";
            this.maxHealth = 1;
            this.rechargeDelay = 1;
        } else {
            this.id = filepath;
            this.manufacturer = shieldsData.manufacturer;
            this.model = shieldsData.model;
            this.maxHealth = shieldsData.maxHealth;
            this.rechargeDelay = shieldsData.rechargeDelay
        }
    }

    toJSON() {
        return {
            'id': this.id,
            'manufacturer': this.manufacturer,
            'model': this.model,
            'maxHealth': this.maxHealth,
            'rechargeDelay': this.rechargeDelay
        };
    }
}

module.exports = Shields;