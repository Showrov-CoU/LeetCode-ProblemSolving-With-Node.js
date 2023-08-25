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
  //.........add(element)...........//
  add(element) {
    let node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      console.log(current.element, "1st");
      while (current.next) {
        current = current.next;
        console.log(current.element, "2nd");
      }
      current.next = node;
    }
    this.size++;
  }

  //.....insertAt(element, index) .....//
}

const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
console.log(list);
