class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  toString() {
    return this.value.toString();
  }
}

class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) throw new Error('Duplicate values are not allowed in this implementation!');

      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
        continue;
      }

      if (current.left === null) {
        current.left = newNode;
        return;
      }
      current = current.left;
    }
  }

  deleteItem(value) {
    if (this.root === null) return;
    if (this.root.value === value) {
      this.deleteNode(this.root, null, false);
      return;
    }

    let current = this.root;
    while (current !== null) {
      if (current.left !== null && current.left.value === value) {
        this.deleteNode(current.left, current, false);
        return;
      }

      if (current.right !== null && current.right.value === value) {
        this.deleteNode(current.right, current, true);
        return;
      }

      // Continue traversing
      if (value > current.value) {
        current = current.right;
        continue;
      }
      current = current.left;
    }

    throw new Error('Value not found in tree!');
  }

  deleteNode(node, parent, isRight) {
    // Leaf node case
    if (node.left === null && node.right === null) {
      if (node === this.root) {
        this.root = null;
        return;
      }

      if (isRight) {
        parent.right = null;
      } else {
        parent.left = null;
      }
      return;
    }

    // Single child case
    if (node.left === null || node.right === null) {
      if (node === this.root) {
        this.root = node.right === null ? node.left : node.right;
        return;
      }

      if (isRight) {
        parent.right = node.right === null ? node.left : node.right;
      } else {
        parent.left = node.right === null ? node.left : node.right;
      }
      return;
    }

    // Two children case
    const replaceNode = (nextBiggest) => {
      if (node === this.root) {
        this.root = nextBiggest;
        return;
      }
      if (isRight) {
        parent.right = nextBiggest;
      } else {
        parent.left = nextBiggest;
      }
    };

    let nextBiggest = node.right;
    if (nextBiggest.left === null) {
      nextBiggest.left = node.left;
      replaceNode(nextBiggest);
      return;
    }

    while (nextBiggest.left) {
      if (nextBiggest.left.left === null) {
        const parentOfDisplaced = nextBiggest;
        nextBiggest = nextBiggest.left;
        nextBiggest.left = node.left;
        if (nextBiggest.right) {
          parentOfDisplaced.left = nextBiggest.right;
        }
        nextBiggest.right = node.right;
        replaceNode(nextBiggest);
        return;
      }
      nextBiggest = nextBiggest.left;
    }
  }

  find(value) {
    let current = this.root;
    while (current !== null) {
      if (value === current.value) return current;

      if (value > current.value) {
        current = current.right;
        continue;
      }
      current = current.left;
    }
    throw new Error('Value not found in tree!');
  }

  // Returns visited values
  levelOrder(callback = null) {
    if (this.root === null) return;

    const queue = [this.root];
    const values = [];

    while (queue.length > 0) {
      const current = queue.shift();
      if (callback !== null) {
        callback(current);
      } else {
        values.push(current.value);
      }

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return values;
  }

  preOrder(callback = null) {
    if (this.root === null) return;

    const visited = [];
    this.preOrderRecursive(this.root, visited, callback);
    return visited;
  }

  preOrderRecursive(node, visited, callback = null) {
    if (callback !== null) {
      callback(node);
    }
    visited.push(node.value);

    if (node.left) {
      this.preOrderRecursive(node.left, visited, callback);
    }
    if (node.right) {
      this.preOrderRecursive(node.right, visited, callback);
    }
  }

  inOrder(callback = null) {
    if (this.root === null) return;

    const visited = [];
    this.inOrderRecursive(this.root, visited, callback);
    return visited;
  }

  inOrderRecursive(node, visited, callback = null) {
    if (node.left) {
      this.inOrderRecursive(node.left, visited, callback);
    }

    if (callback !== null) {
      callback(node);
    }
    visited.push(node.value);

    if (node.right) {
      this.inOrderRecursive(node.right, visited, callback);
    }
  }

  postOrder(callback = null) {
    if (this.root === null) return;

    const visited = [];
    this.postOrderRecursive(this.root, visited, callback);
    return visited;
  }

  postOrderRecursive(node, visited, callback = null) {
    if (node.left) {
      this.postOrderRecursive(node.left, visited, callback);
    }

    if (node.right) {
      this.postOrderRecursive(node.right, visited, callback);
    }

    if (callback !== null) {
      callback(node);
    }
    visited.push(node.value);
  }

  height(node) {
    let h = 0;
    if (node.left) {
      h = Math.max(h, 1 + this.height(node.left));
    }
    if (node.right) {
      h = Math.max(h, 1 + this.height(node.right));
    }

    return h;
  }

  depth(node) {
    let d = 0;

    let current = this.root;
    while (current !== node) {
      if (node.value > current.value) current = current.right;
      else if (node.value < current.value) current = current.left;

      if (current === null) {
        throw new Error('Node not found in tree!');
      }

      ++d;
    }
    return d;
  }

  isBalanced() {
    if (this.root === null) return true;

    const leftHeight = this.root.left ? this.height(this.root.left) : 0;
    const rightHeight = this.root.right ? this.height(this.root.right) : 0;

    return Math.abs(leftHeight - rightHeight) <= 1;
  }

  rebalance() {
    const valuesInOrder = this.inOrder();
    this.root = buildTree(valuesInOrder);
  }
}

function buildTree(arr) {
  arr = [...new Set(arr)]; // Remove duplicates
  arr.sort((a, b) => a - b);

  return buildTreeRecursive(arr, 0, arr.length - 1);
}

function buildTreeRecursive(arr, start, end) {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  const root = new Node(arr[mid]);

  root.left = buildTreeRecursive(arr, start, mid - 1);
  root.right = buildTreeRecursive(arr, mid + 1, end);

  return root;
}

export default Tree;
