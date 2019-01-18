// 0. import Queue มาใช้ ใน test
const Queue = require('./Queue');
// 1. สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)

test('queue is empty', () =>{
    const queue = new Queue(3) 
    expect(queue.empty()).toBe(true);
});

// 2. สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20

test('test enq and deq', () =>{
    const queue = new Queue(1)
    expect(queue.enqueue(20)).toBe(true)
    expect(queue.dequeue()).toBe(20)
})
// 3. สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)

test('q is full equal true', () =>{
    const queue = new Queue(1)
    queue.enqueue(30)
    expect(queue.full()).toBe(true)
})
// 4. สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)

test('q is full equal false', ()=>{
    const queue = new Queue(1)
    queue.enqueue(3)
    expect(queue.enqueue(5)).toBe(false)
})
// 5. สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน
test('enq and deq is 1 and 2' ,() =>{
    const queue = new Queue(2)
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
})
// 6. สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null

test('queue is null when dequeue size is 1', () =>{
    const queue = new Queue(1)
    expect(queue.dequeue()).toBe(null)
})

// enqueue until max

test('enque', ()=>{
    const queue = new Queue(3)
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.dequeue()).toBe(1)
})