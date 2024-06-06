class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
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
    return this.head;
  }

  getTail() {
    if (this.head === null) return null;

    let current = this.head;
    while (current.nextNode !== null) current = current.nextNode;

    return current;
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
      s += s.toString();
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
    }

    let current = this.head;
  }

  removeAt(index) {}
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

const test = new LinkedList();
test.append(1);
test.append(2);
test.append(3);
console.log(test);
