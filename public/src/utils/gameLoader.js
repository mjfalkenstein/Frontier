'use strict';

let fs = require('fs'),
    path = require('path'),
    _ = require('lodash'),
    q = require('q');

module.exports.createGame = function (dirPath) {
    dirPath = '../' + dirPath + '/';
    let files = fs.readdirSync(dirPath);

    return q.when();
};