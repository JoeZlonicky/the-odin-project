class Hashmap {
  constructor(startSize = 16) {
    this.buckets = [];
    this.loadFactor = 0.75;
    this.nOccupiedBuckets = 0;

    this.resize(startSize);
  }

  hash(key) {
    let hashCode = 0;
    const prime = 31;

    for (let i = 0; i < key.length; ++i) {
      hashCode = (prime * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }

    return hashCode;
  }

  get(key) {
    const bucket = this.buckets[this.hash(key)];
    for (const pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return null;
  }

  has(key) {
    const bucket = this.buckets[this.hash(key)];

    for (const pair of bucket) {
      if (pair[0] === key) {
        return true;
      }
    }

    return false;
  }

  set(key, value) {
    const bucket = this.buckets[this.hash(key)];
    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    const wasEmpty = bucket.length === 0;
    bucket.push([key, value]);

    if (wasEmpty) {
      ++this.nOccupiedBuckets;
      this.checkForResize();
    }
  }

  remove(key) {
    const bucket = this.buckets[this.hash(key)];
    for (const [idx, pair] of bucket.entries()) {
      if (pair[0] === key) {
        bucket.splice(idx, 1);
        if (bucket.length === 0) {
          --this.nOccupiedBuckets;
        }
        return true;
      }
    }

    return false;
  }

  length() {
    let count = 0;
    this.buckets.forEach((bucket) => {
      count += bucket.length;
    });
    return count;
  }

  clear() {
    this.buckets.forEach((bucket) => {
      bucket.length = 0;
    });
    this.nOccupiedBuckets = 0;
  }

  keys() {
    const keys = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach((pair) => {
        keys.push(pair[0]);
      });
    });
    return keys;
  }

  values() {
    const values = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach((pair) => {
        values.push(pair[1]);
      });
    });
    return values;
  }

  entries() {
    const entries = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach((pair) => {
        entries.push([...pair]);
      });
    });
    return entries;
  }

  checkForResize() {
    if (this.nOccupiedBuckets > this.buckets.length * this.loadFactor) {
      this.resize(this.buckets.length * 2);
    }
  }

  resize(newSize) {
    const oldBuckets = this.buckets;
    this.buckets = [];
    this.nOccupiedBuckets = 0;

    for (let i = 0; i < newSize; ++i) {
      this.buckets.push([]);
    }

    for (const bucket of oldBuckets) {
      if (bucket.length === 0) continue;

      bucket.forEach((pair) => {
        this.set(pair[0], pair[1]);
      });
    }
  }
}

const test = new Hashmap(1);

test.set('Alice', 2);
test.set('Bob', 'Anderson');

console.log('General test:');
console.log(`Alice = ${test.get('Alice')}`);
console.log(`Has Alice = ${test.has('Alice')}`);
console.log(`Has Charlie = ${test.has('Charlie')}`);
console.log(`Length = ${test.length()}`);
console.table(`Entries = ${JSON.stringify(test.entries())}`);
console.log(`Keys = ${test.keys()}`);
console.log(`Values = ${test.values()}`);

test.remove('Alice');
console.log('\nAfter removing:');
console.log(`Keys = ${test.keys()}`);

test.clear();
console.log('\nAfter clear:');
console.log(`Keys = ${test.keys()}\n`);

for (let i = 0; i < 100; ++i) {
  const sizeBefore = test.buckets.length;
  const s = i.toString();
  test.set(s, i);

  if (sizeBefore !== test.buckets.length) {
    console.log(`${i + 1}: resized from ${sizeBefore} to ${test.buckets.length} buckets!`);
  }
}
