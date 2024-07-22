const EventEmitter = require('events');

// Create an event emitter object
const emitter = new EventEmitter();

// Define a listener function
const listenerFunction = (data) => {
  console.log('Event triggered with data:', data);
};

// Add the listener for the 'myEvent' event
emitter.on('myEvent', listenerFunction);

// Trigger the event with some data
emitter.emit('myEvent', 'Hello, world!');

// Now, remove the event listener
emitter.removeListener('myEvent', listenerFunction);

// Try triggering the event again (the listener won't be called)
emitter.emit('myEvent', 'This message won\'t be logged.');
