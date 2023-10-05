class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    // Add a new node with this value to the end of list
    if (this.listHead == null) this.prepend(value);
    else {
      let temp = this.listHead;
      while (temp.nextNode != null) temp = temp.nextNode;
      temp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    // Add a new node with this value to the start of list
    let temp = null;
    if (this.listHead != null) temp = this.listHead;
    this.listHead = new Node(value);
    this.listHead.nextNode = temp;
  }

  printSize() {
    // Return total # of nodes in the list
    let temp = this.listHead;
    let counter = 0;
    while (temp != null) {
      counter++;
      temp = temp.nextNode;
    }
    return counter;
  }

  printHead() {
    // Return the value first node in list
    let headValue = "null";
    if (this.listHead != null) headValue = this.listHead.value;
    return headValue;
  }

  printTail() {
    // Return the value of last node in list
    let temp = this.listHead;
    let tailValue = "null";
    while (temp != null) {
      if (temp.nextNode == null) tailValue = temp.value;
      temp = temp.nextNode;
    }
    return tailValue;
  }

  at(index) {
    // Return the value of node at index
    let temp = this.listHead;
    let indexValue = "null";
    let currentIndex = 0;
    while (currentIndex <= index) {
      indexValue = temp.value;
      temp = temp.nextNode;
      currentIndex++;
    }
    return indexValue;
  }

  contains(value) {
    // Returns true if value in list, otherwise returns null
    let temp = this.listHead;
    while (temp != null) {
      if (temp.value == value) return true;
      if (temp.value != value) temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    // Returns the index of the value, or null if not in list
    let temp = this.listHead;
    let currentIndex = 0;
    while (temp != null) {
      if (temp.value == value) return currentIndex;
      if (temp.value != value) {
        temp = temp.nextNode;
        currentIndex++;
      }
    }
    return null;
  }

  toString() {
    // Returns a string of each value in list
    // (value) => (value) => (value) => null
    let temp = this.listHead;
    let stringValue = "";
    while (temp != null) {
      stringValue += `(${temp.value}) => `;
      if (temp.nextNode == null) stringValue += "null";
      temp = temp.nextNode;
    }
    return stringValue;
  }
}

class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

// Testing
const fruitList = new LinkedList();

fruitList.append("Banana");
fruitList.prepend("Apple");
fruitList.append("Cantaloupe");
fruitList.append("Date");
fruitList.append("Elderberry");
console.log(`Size: ${fruitList.printSize()}`);
console.log(`String: ${fruitList.toString()}`);
console.log(`Head: ${fruitList.printHead()}`);
console.log(`Tail: ${fruitList.printTail()}`);
console.log(`Index 2 has a value of: ${fruitList.at(2)}`);
console.log(`Is Date in List: ${fruitList.contains("Date")}`);
console.log(`Is Carrot in List: ${fruitList.contains("Carrot")}`);
console.log(`What is the Index of Date: ${fruitList.find("Date")}`);
