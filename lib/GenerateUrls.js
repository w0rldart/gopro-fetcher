'use strict';

const processMultiShot = require('./ProcessMultiShot');

/**
 * Takes items list fetched from GoPro and parses it
 * into an array composed just of actionable urls (i.e.: http://10.5.5.9/videos/DCIM/100GOPRO/GOPR1053.MP4)
 *
 * @param  {Object} items
 * @return {Array}
 */
let generateUrls = (baseUrl, items) => {
    let sourceDir = items.media[0].d;
    let files = items.media[0].fs;

    let urls = [];

    for (let i = 0; i < files.length; i++) {
        let item = files[i];

        /**
         * If b and l are set, that means the respective photo forms a multi shot sequence,
         * and the names (i.e.: G0020990.JPG, G0020991.JPG...) for each one need to be generated
         * and appended at the end of the list to be then processed
         */
        if (item.b && item.l) {
            let shots = processMultiShot(item.n, item.b, item.l);
            shots.map((shot) => {
                files.push(shot);
            });
        }

        let url = baseUrl + '/videos/DCIM/' + sourceDir + '/' + item.n;
        urls.push(url);
    }

    return urls;
};

module.exports = generateUrls;