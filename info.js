
// function sayHello(name) {
//     console.log("Hello " + name );
// }

// sayHello("Kris");

console.log(); // global

setTimeout()
clearTimeout()

setInterval()
clearInterval()

window.console.log

var message = '';
global.



var url = 'https://mylogger.io/log';

function log(message) {
    // Send an HTTPS request
    console.log(message);
}

module.exports.log = log;
module.exports.endPoint = url;



________________________________________________________________


const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);

// Template string
// ES6 / ES2015 : ECMAScript 6


console.log(`Total Memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);



fs.readdir('$', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
    });

    // Brings back Error if


    fs.readdir('./', function(err, files) {
        if (err) console.log('Error', err);
        else console.log('Result', files);
        });
        
// Asynchronous without error
