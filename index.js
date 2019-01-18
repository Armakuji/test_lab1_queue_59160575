const Queue = require('./Queue');

const queue = new Queue(3);
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(11)
console.log('tail is',queue.tail)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log('tail is',queue.tail)