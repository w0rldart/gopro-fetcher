'use strict';

/**
 * Builds an array with names of the files part of a multi shot
 *
 * @param  {String} name   Filename
 * @param  {Number} start  Sequence start
 * @param  {Number} finish Sequence finsh
 *
 * @return {Array}
 */
let processMultiShot = (name, start, finish) => {
    name = name.replace(start + '.JPG', '');

    let shots = [];
    let i = parseInt(start) + 1; // Don't include the one already listed

    for (i; i <= finish; i++) {
        shots.push({n: name + i + '.JPG'});
    }

    return shots;
};

module.exports = processMultiShot;