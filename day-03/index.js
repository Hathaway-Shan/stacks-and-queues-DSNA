class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  //this is an implicit this to a function in any instance method add(this, node)
  add(node) {
    //we know B is the root of the tree so we need to filter either to the right or left based on value
    //where greater goes to the right and less goes to the left

    if (node.value > this.value) {
      if (this.right === null) {
        //if there is no node to the right AND our currentNode is greater than root "B" we place current node to the right of root
        this.right = node;
      } else {
        //if a node to the right does exist we need to recursively check until placement is correct
        this.right.add(node);
      }

      //then we need to check factors for the left side with the same logic
    } else {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.add(node);
      }
    }
  }
}

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);

// console.log(JSON.stringify(B, null, 2));
