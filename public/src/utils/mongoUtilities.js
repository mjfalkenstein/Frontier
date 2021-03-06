'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    mongoTarget = 'mongodb://localhost:27017/frontierDB';

module.exports.connect = function () {
    return mongoose.connect(mongoTarget);
};

module.exports.initGame = function () {

};

module.exports.saveGame = function () {

};

module.exports.loadGame = function () {

};

module.exports.savePlayer = function () {

};

module.exports.loadPlayer = function () {

};

module.exports.saveShip = function () {

};

module.exports.loadShip = function () {

};

module.exports.saveSystem = function () {

};

module.exports.loadSystem = function () {

};

module.exports.saveSpaceBody = function () {

};

module.exports.loadSpaceBody = function () {

};

let playerSchema = new Schema({
    name: String,
    discordUsername: String,
    id: String,
    ship: Schema.Types.ObjectId,
    creationState: Number,
    location: {
        currentSystemID: Schema.Types.ObjectId,
        currentBodyID: Schema.Types.ObjectId,
        destinationSystemID: Schema.Types.ObjectId,
        destinationBodyID: Schema.Types.ObjectId,
        travelTimeMS: {type: Number, default: 0}
    },
    updated: {type: Date, default: Date.now}
});

let shipSchema = new Schema({
    chassis: String,
    hull: String,
    engines: String,
    shields: String,
    hardpoints: [String],
    hyperdrive: String,
    currentHealth: Number,
    currentShields: Number
});

let systemSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    bodies: [Schema.Types.ObjectId]
});

let spaceBodySchema = new Schema({
    name: String,
    distanceAU: Number
});

let gameSchema = new Schema({
    id: Schema.Types.ObjectId,
    systems: [Schema.Types.ObjectId]
});

module.exports = {
    'playerSchema': mongoose.model('player', playerSchema),
    'shipSchema': mongoose.model('ship', shipSchema),
    'systemSchema': mongoose.model('system', systemSchema),
    'spaceBodySchema': mongoose.model('spaceBody', spaceBodySchema),
    'gameSchema': mongoose.model('game', gameSchema)
};