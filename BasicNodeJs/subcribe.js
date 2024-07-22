const EventEmitter = require('events');

const subscriber = new EventEmitter();

subscriber.on('subscribe', (data) => {
  console.log(`Thanks For Suncribe to College Wallah`);
});

subscriber.emit('subscribe', 'college wallah');