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
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //.....insertAt(element, index) .....//
  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("Please enter a valid index");
    } else {
      let node = new Node(element);
      let current, previous;
      current = this.head;

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let iterator = 0;
        while (iterator < index) {
          previous = current;
          current = current.next;
          iterator++;
        }
        node.next = current;
        previous.next = node;
      }
      this.size++;
    }
  }
  //.....removeFrom(index) .....//
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Please Enter a valid index");
    } else {
      let current,
        previous,
        iterator = 0;
      current = this.head;
      previous = current;

      if (index === 0) {
        this.head = current.next;
      } else {
        while (iterator < index) {
          previous = current;
          current = current.next;
          iterator++;
        }
        console.log(previous);
        console.log(current);
        previous.next = current.next;
      }
      this.size--;
    }
  }
}

const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(50);

list.insertAt(60, 3);

list.removeFrom(2);

console.log(list);
