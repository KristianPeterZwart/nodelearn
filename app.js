
const EventEmitter = require('events');

const Logger = require('./logger')
const logger = new Logger();

// Register a Listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');

// For Making a noise, produce - signalling an event has happened

// Raise: logging (data: message)