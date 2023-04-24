class ListNode<T> {
  val: T;
  next: ListNode<T> | null;
  constructor(val: T, next: ListNode<T> | null = null) {
    this.val = val;
    this.next = next;
  }
}

interface ILinkedList<T> {
  addToFront: (element: T) => void;
  addToEnd: (element: T) => void;
  addAtIndex: (index: number, val: T) => void;
  deleteAtIndex: (index: number) => void;
  deleteAtBeginning: () => void;
  deleteAtEnd: () => void;
  getArray: () => T[];
}

class LinkedList<T> implements ILinkedList<T> {
  private head: ListNode<T> | null;
  constructor() {
    this.head = null;
  }

  addToFront(val: T) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteAtBeginning() {
    if (this.head == null) {
      return;
    }
    this.head = this.head.next;
  }

  addToEnd(val: T) {
    const newNode = new ListNode(val);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = newNode;
  }

  deleteAtEnd() {
    if (this.head == null) {
      return;
    }
    if (this.head.next == null) {
      this.head = null;
      return;
    }
    let cur = this.head;
    while (cur.next != null && cur.next.next != null) {
      cur = cur.next;
    }
    cur.next = null;
  }

  addAtIndex(index: number, val: T) {
    const newNode = new ListNode(val);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let cur = this.head;
    for (let i = 0; i < index - 1 && cur !== null; ++i) {
      cur = cur.next;
    }
    if (cur === null) {
      return;
    }
    newNode.next = cur.next;
    cur.next = newNode;
  }

  deleteAtIndex(index: number) {
    if (this.head === null) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let cur = this.head;
    for (let i = 0; i < index - 1 && cur !== null; ++i) {
      if (cur.next) cur = cur.next;
    }
    if (cur === null || cur.next === null) {
      return;
    }
    cur.next = cur.next.next;
  }

  getArray(): T[] {
    const result: T[] = [];
    let cur = this.head;
    while (cur !== null) {
      result.push(cur.val);
      cur = cur.next;
    }
    return result;
  }
}

export const linkedList = new LinkedList<number>();
