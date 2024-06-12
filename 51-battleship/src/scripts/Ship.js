class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits = Math.min(this.hits + 1, this.length);
  }

  isSunk() {
    return this.hits === this.length;
  }

  getHits() {
    return this.hits;
  }
}

export default Ship;
