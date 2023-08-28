const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

//?   Defined Class Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//?   LinkedList Class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

//?   Reverse linked list Between position left to position right
const reverseBetween = ({ head }, left, right) => {
  if (head === null || left === right) return head;

  let nodeBeforeLeft = head;
  let i = 1;

  while (i < left) {
    nodeBeforeLeft = nodeBeforeLeft.next;
    i++;
  }
  let workingNode = nodeBeforeLeft.next;

  while (left < right) {
    let extractNode = workingNode.next;
    workingNode.next = extractNode.next;
    extractNode.next = nodeBeforeLeft.next;
    nodeBeforeLeft.next = extractNode;
    left++;
  }
  // console.log(head.next);
  return head.next;
};

//?   create Linked list based on LinkedList and Node class
const createLinkedList = (size, values, range) => {
  let list = new LinkedList();
  list.add(0);
  for (let value of values) {
    list.add(value);
  }
  let [left, right] = range;
  let reverseList = reverseBetween(list, left, right);
  console.log(reverseList);
};

const getSize = () => {
  return new Promise((resolve) => {
    rl.question("", (input) => {
      let size = parseInt(input.split(" "));
      resolve(size);
    });
  });
};

//?   Get elements that will be set as the value of node....!!
const getNodeValues = () => {
  return new Promise((resolve) => {
    rl.question("", (input) => {
      let values = input.split(" ").map(Number);
      resolve(values);
    });
  });
};

//?   Get left and right for reverse the nodes of the list from position left to position right
const getRange = () => {
  return new Promise((resolve) => {
    rl.question("", (input) => {
      let range = input.split(" ").map(Number);
      resolve(range);
    });
  });
};

//?   getNodeValues() and getRange() function Call Synchronously
const getAllInput = async () => {
  const size = await getSize();
  const values = await getNodeValues();
  const range = await getRange();
  createLinkedList(size, values, range);

  rl.close();
};

getAllInput();
