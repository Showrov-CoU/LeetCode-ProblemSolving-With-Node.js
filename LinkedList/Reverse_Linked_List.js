class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    let node = new Node(element);
    let current = this.head;
    if (this.head === null) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

const createList = (input) => {
  let list = new LinkedList();

  for (let element of input) {
    list.add(element);
  }

  reverseList(list);
};

const reverseList = ({ head, size }) => {
  let newHead = null,
    current = head,
    after = head;

  while (current) {
    after = current.next;
    current.next = newHead;
    newHead = current;
    current = after;
  }
  console.log(newHead);
};

process.stdin.on("data", (data) => {
  let input = data.toString().trim().split(" ").map(Number);
  createList(input);
});
