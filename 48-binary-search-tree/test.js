import Tree from './BinarySearchTree.js';

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

const extensiveTest = () => {
  const test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  test.insert(24);
  console.log('Tree creation and insert(24):');
  prettyPrint(test.root);

  let sum = 0;
  test.levelOrder((node) => (sum += node.value));
  console.log('\nLevel-order traversal');
  console.log(`Visited: ${test.levelOrder()}`);
  console.log(`Sum = ${sum}`);

  sum = 0;
  test.preOrder((node) => (sum += node.value));
  console.log('\nPre-order traversal');
  console.log(`Visited: ${test.preOrder()}`);
  console.log(`Sum = ${sum}`);

  sum = 0;
  test.inOrder((node) => (sum += node.value));
  console.log('\nIn-order traversal');
  console.log(`Visited: ${test.inOrder()}`);
  console.log(`Sum = ${sum}`);

  sum = 0;
  test.postOrder((node) => (sum += node.value));
  console.log('\nPost-order traversal');
  console.log(`Visited: ${test.postOrder()}`);
  console.log(`Sum = ${sum}`);

  const sevenNode = test.find(7);
  console.log('\nFind/depth/height:');
  console.log(`Found seven node: ${sevenNode}`);
  console.log(`Depth of node: ${test.depth(sevenNode)}`);
  console.log(`Height of root: ${test.height(test.root)}`);

  console.log('Balancing:');
  console.log(`Is balanced: ${test.isBalanced()}`);
  test.insert(25);
  console.log(`Still balanced: ${test.isBalanced()}`);

  test.rebalance();
  console.log('After balancing:');
  prettyPrint(test.root);
  console.log(`Is balanced: ${test.isBalanced()}`);

  console.log('Deletion testing:');
  console.log('Delete leaf node(5):');
  test.deleteItem(5);
  prettyPrint(test.root);

  console.log('Delete node with one child(1):');
  test.deleteItem(1);
  prettyPrint(test.root);

  console.log('Delete node with multiple children(4):');
  test.deleteItem(4);
  prettyPrint(test.root);

  console.log('Delete node with multiple children(324):');
  test.deleteItem(324);
  prettyPrint(test.root);

  console.log('Delete root node with multiple children(9):');
  test.deleteItem(9);
  prettyPrint(test.root);
};

const testScenario = () => {
  const testNumbers = [82, 12, 1, 76, 23, 45, 13, 8, 99, 67, 44, 31, 24];
  const tree = new Tree(testNumbers);

  prettyPrint(tree.root);
  console.log(`Is balanced: ${tree.isBalanced()}`);
  console.log(`Level-order: ${tree.levelOrder()}`);
  console.log(`Pre-order: ${tree.preOrder()}`);
  console.log(`In-order: ${tree.inOrder()}`);
  console.log(`Post-order: ${tree.postOrder()}`);

  const newNumbers = testNumbers.map((old) => old + 100);
  newNumbers.forEach((n) => tree.insert(n));

  console.log('');
  prettyPrint(tree.root);
  console.log(`Is balanced: ${tree.isBalanced()}`);

  tree.rebalance();
  console.log('');
  prettyPrint(tree.root);
  console.log(`Is balanced: ${tree.isBalanced()}`);
  console.log(`Level-order: ${tree.levelOrder()}`);
  console.log(`Pre-order: ${tree.preOrder()}`);
  console.log(`In-order: ${tree.inOrder()}`);
  console.log(`Post-order: ${tree.postOrder()}`);
};

// extensiveTest();
testScenario();
