'use strict';

let _ = require('lodash');

module.exports.formatStringToGivenLength = function(input, desiredLength) {
    input = input.toString();
    let difference = input.length - desiredLength;
    if (difference === 0) return input;
    if (difference < 0) {
        return input + (' '.repeat(Math.abs(difference)));
    } else {
        return input.substring(0, desiredLength - 1) + '…';
    }
};

module.exports.formatStringInTextBox = function(input, desiredWidth) {
    desiredWidth -= 4;
    input = input.toString();
    let retString = '```┏' + _.repeat('━', desiredWidth + 2) + '┓\n';
    let lines = splitStringIntoLines(input, desiredWidth - 4);

    _.forEach(lines, (line) => {
        if (!line) {
        retString += '┃' + _.repeat(' ', desiredWidth + 2) + '┃\n';
    } else {
        retString += '┃ ' + line + ' '.repeat(desiredWidth - line.length) + ' ┃\n';
    }
});

    retString += '┗' + _.repeat('━', desiredWidth + 2) + '┛```\n';
    return retString;
};

function splitStringIntoLines(input, desiredWidth) {
    let retLines = [''];
    let currentLine = 0;
    let words = input.split(' ');
    let first = true;
    let currentWidth = 0;

    _.forEach(words, (word) => {
        currentWidth += word.length;
    if (word.includes('\n')) {
        let count = word.match(/\n/g).length;
        word = word.replaceAll('\n', '');
        currentLine += count + 1;
        currentWidth = word.length;
        retLines[currentLine] = word;
    } else {
        if (currentWidth > desiredWidth) {
            currentLine++;
            currentWidth = word.length;
            retLines[currentLine] = word;
        } else {
            if (!first) {
                retLines[currentLine] += ' ';
                currentWidth++;
            }
            retLines[currentLine] += word;
        }
    }
    first = false;
});

    return retLines;
}

String.prototype.replaceAll = function(search, replacement) {
    let target = this;
    return target.split(search).join(replacement);
};

module.exports.getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

module.exports.similarity = function(s1, s2) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    let longerLength = longer.length;
    if (longerLength === 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
};

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    let costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}