class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.nextNode !== null) current = current.nextNode;

    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  getSize() {
    let current = this.head;
    let size = 0;
    while (current !== null) {
      current = current.nextNode;
      size += 1;
    }

    return size;
  }

  getHead() {
    if (this.head) {
      return this.head.value;
    }
    return null;
  }

  getTail() {
    if (this.head === null) return null;

    let current = this.head;
    while (current.nextNode !== null) current = current.nextNode;

    return current.value;
  }

  at(index) {
    let current = this.head;
    while (index > 0) {
      if (current === null) throw new RangeError('Out of range!');
      current = current.nextNode;
      --index;
    }

    if (current === null) throw new RangeError('Out of range!');
    return current.value;
  }

  popFront() {
    if (this.head === null) throw new RangeError('No front to pop!');

    const frontValue = this.head.value;
    this.head = this.head.nextNode;

    return frontValue;
  }

  popEnd() {
    if (this.head === null) throw new RangeError('No end to pop!');
    if (this.head.nextNode === null) {
      const endValue = this.head.value;
      this.head = null;
      return endValue;
    }

    let current = this.head;
    while (current.nextNode !== null && current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }

    // So now at one before tail
    const endValue = current.nextNode.value;
    current.nextNode = null;

    return endValue;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  // Returns -1 if not found
  findIndex(value) {
    let current = this.head;
    let i = 0;

    while (current !== null) {
      if (current.value === value) return i;
      current = current.nextNode;
      ++i;
    }

    return -1;
  }

  toString() {
    let s = '';
    let current = this.head;
    while (current !== null) {
      s += current.value.toString();
      if (current.nextNode !== null) {
        s += ' -> ';
      }
      current = current.nextNode;
    }

    return s;
  }

  insertAt(value, index) {
    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (index > 1) {
      current = current.nextNode;
      if (current === null) throw new RangeError('Index higher than length!');
      index -= 1;
    }

    // At one before
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }

  removeAt(index) {
    if (index === 0) {
      if (this.head === null) throw new RangeError('No element at index 0!');
      this.head = this.head.nextNode;
      return;
    }

    let current = this.head;
    while (index > 1) {
      current = current.nextNode;
      if (current === null) throw new RangeError('Index higher than length!');
      index -= 1;
    }

    // At one before
    if (current.nextNode === null) throw new RangeError('Index higher than length!');

    current.nextNode = current.nextNode.nextNode;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

const test = new LinkedList();
test.append(4);
test.append(5);
test.append(6);
test.prepend(3);
test.prepend(2);
test.prepend(1);

console.log('append, prepend, toString, getSize, getHead, getTail, at:');
console.log(test.toString());
console.log(`Size: ${test.getSize()}`);
console.log(`Head: ${test.getHead()}`);
console.log(`Tail: ${test.getTail()}`);
console.log(`at(3): ${test.at(3)}`);

test.popFront();
test.popEnd();

console.log('\npopFront, popEnd, contains, findIndex:');
console.log(test.toString());
console.log(`Contains 1: ${test.contains(1)}`);
console.log(`Contains 5: ${test.contains(5)}`);
console.log(`Index of 1: ${test.findIndex(1)}`);
console.log(`Index of 5: ${test.findIndex(5)}`);

test.insertAt(1, 0);
test.insertAt(6, 5);
console.log('\ninsertAt:');
console.log(test.toString());

test.removeAt(0);
test.removeAt(4);
console.log('\nremoveAt:');
console.log(test.toString());
