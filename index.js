#!/usr/bin/env node
var program = require('commander');
var fs = require('fs');
var prettyjson = require('prettyjson');

program
    .arguments('<command>')
    .option('-l, --location <location>', 'The failure location')
    .option('-n, --notify <email>', 'The email to send a notification')
    .action(function(command) {
        fs.readFile(`${command}.json`, 'utf8', function (err, data) {
            if (err) throw err;
            console.log(prettyjson.render(JSON.parse(data)))
            if (program.notify) {
                console.log(`Emailing ${program.notify} with the above diagnostic data`)
            }
        });
    })
    .parse(process.argv);



