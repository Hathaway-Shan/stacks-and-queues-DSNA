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

// Keep in mind this is a recursive operation.

// console.log(JSON.stringify(B, null, 2)); //returns data as a JSON object with indentation

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // implemented as in previous challenge
    if (node.value > this.value) {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.add(node);
      }
    } else {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.add(node);
      }
    }
  }

  findPerson(name) {
    //if the name value of the node matches we are done

    if (name === this.value) {
      return this.person;
    } else {
      //we check if there is something to the left and if name is less than current value
      if (this.left && name < this.value) {
        //if that is true we call findPerson recursively and begin again then we mirror this on the right
        return this.left.findPerson(name);
      } else if (this.right && name > this.value) {
        return this.right.findPerson(name);
      } else {
        //if there is no match in the tree we return undefined
        return undefined;
      }
    }
  }
}

module.exports = {
  BinaryTreeNode,
  PersonTreeNode,
};
