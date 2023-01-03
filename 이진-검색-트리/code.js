class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (current.value > value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  has(value) {
    let current = this.root;
    while (current !== null) {
      if (current.value === value) return true;

      if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

const tree = new BST();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree)
console.log(tree.has(22))
