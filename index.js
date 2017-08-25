#!/usr/bin/env node

'use strict';

/**
 * Script to do an asynchronous download of all the content from your GoPro
 * Tested with GoPro 4
 *
 * @author Alex Budurovici
 */

const async = require('async');
const request = require('request');
const args = require('minimist')(process.argv.slice(2));


/** @type {String} This never changes and is the IP to your GoPro when you connect to it via WiFi */
let baseUrl = 'http://10.5.5.9';

/** @type {Number} 5 seconds to timeout connection to GoPro */
let requestTimeout = 5000;

/**
 * Method that outputs a help message
 */
function help() {
    let message;

    message = '\nUtility to download content via WiFi from a GoPro\n';
    message += '\nArguments: \n';
    message += '  --help       Prints this message\n';
    message += '  --save-to    Required path where to save the content\n';
    message += '\n\n';
    message += '  Demo: ./index.js --save-to ~/Videos/GoPro\n';

    console.info(message);
}

/** help() was invoked via the CLI */
if (args.help) {
    help();
    process.exit(1);
};

/** --save-to was not set */
if (!args['save-to']) {
    console.error('\n - Error: --save-to is a mandatory argument.\n - Run program with --help to see the help message.\n')
    process.exit(0);
} else {
    /** @type {String} */
    let saveTo = args['save-to'];
};

/**
 * Promised function that fecthes all available media on the GoPro
 *
 * @return {Promise} [description]
 */
let fetchItemsList = () => {
    return new Promise((resolve, reject) => {
        let url = baseUrl + '/gp/gpMediaList';

        request.get(url, {timeout: requestTimeout}, (error, response, body) => {
            if (error) return reject(error);

            console.log(url, error, response, body);

            try {
                resolve(JSON.parse(body));
            } catch (e) {
                reject(e);
            }
        });
    });
};

fetchItemsList()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
