'use strict';

const proxyrequire = require('proxyrequire');
const test = require('tape');

const generateUrls = require('../lib/GenerateUrls');

// Stubs
const stubMediaList = require('./stubs/gpMediaList');
const stubMediaListPhotos = require('./stubs/gpMediaList.photos');
const stubMediaListMultiShot = require('./stubs/gpMediaList.multishot');
const stubMediaListVideos = require('./stubs/gpMediaList.videos');

let baseUrl = 'http://10.5.5.9';

test('generate urls for photos', (assert) => {
    let expected = [
        'http://10.5.5.9/videos/DCIM/100GOPRO/GOPR0938.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/GOPR0939.JPG'
    ];

    let output = generateUrls(baseUrl, stubMediaListPhotos);

    assert.deepEqual(expected, output, 'Generate photo urls');
    assert.equal(2, output.length, 'Amount of generated photo urls');

    assert.end();
});

test('generate urls for multi shot photos', (assert) => {
    let expected = [
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010980.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010960.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010981.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010982.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010983.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010984.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010985.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010986.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010987.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010988.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010989.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010961.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010962.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010963.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010964.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010965.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010966.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010967.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010968.JPG',
        'http://10.5.5.9/videos/DCIM/100GOPRO/G0010969.JPG'
    ];

    let output = generateUrls(baseUrl, stubMediaListMultiShot);

    assert.deepEqual(expected, output, 'Generate multi photo shot urls');
    assert.equal(20, output.length, 'Amount of generated multi photo shot urls');

    assert.end();
});

