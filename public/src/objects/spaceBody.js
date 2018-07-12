'use strict';

let fs = require('fs');

class SpaceBody{
    constructor(filepath = "") {
        let spaceBodyDataRaw = fs.readFileSync('../data/spaceBodies/' + filepath + '.json');
        let spaceBodyData = JSON.parse(spaceBodyDataRaw);
        if (filepath.length === 0 || !spaceBodyData) {
            this.id = filepath;
            this.name = "";
            this.distanceAU = 0;
        } else {
            this.id = filepath;
            this.name = spaceBodyData.name;
            this.distanceAU = spaceBodyData.distanceAU;
        }
    }

    toJSON() {
        return {
            'name': this.name,
            'distanceAU': this.distanceAU
        };
    }
}

module.exports = SpaceBody;