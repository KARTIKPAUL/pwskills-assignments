const EventEmitter = require('events');

const emitter = new EventEmitter();

// Get the default maximum number of listeners
const defaultMaxListeners = emitter.getMaxListeners();
console.log('Default maximum listeners:', defaultMaxListeners);

// Set the maximum number of listeners to 5
emitter.setMaxListeners(5);
const newMaxListeners = emitter.getMaxListeners();
console.log('New maximum listeners (after setting):', newMaxListeners);

// Example event handlers (more than 5)
function listener1() {
  console.log('Listener 1 triggered!');
}

function listener2() {
  console.log('Listener 2 triggered!');
}

function listener3() {
  console.log('Listener 3 triggered!');
}

function listener4() {
  console.log('Listener 4 triggered!');
}

function listener5() {
  console.log('Listener 5 triggered!');
}

function listener6() {   // This listener will NOT be added due to the limit
  console.log('Listener 6 triggered!'); // (won't be called)
}

// Add event handlers (only 5 will be added)
emitter.on('myEvent', listener1);
emitter.on('myEvent', listener2);
emitter.on('myEvent', listener3);
emitter.on('myEvent', listener4);
emitter.on('myEvent', listener5);
emitter.on('myEvent', listener6); // This will exceed the limit

// Trigger the event (only the first 5 listeners will be called)
emitter.emit('myEvent');
