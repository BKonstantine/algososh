import { ElementTypes } from "../../types/element-states";

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
  deleteAtFront: () => void;
  deleteAtEnd: () => void;
  getArray: () => T[];
  getSize: () => number;
}

class LinkedList<T> implements ILinkedList<T> {
  private head: ListNode<T> | null;
  private size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addToFront(val: T) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  deleteAtFront() {
    if (this.head === null) {
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  addToEnd(val: T) {
    const newNode = new ListNode(val);
    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return;
    }

    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = newNode;
    this.size++;
  }

  deleteAtEnd() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      this.head = null;
      return;
    }
    let cur = this.head;
    while (cur.next != null && cur.next.next != null) {
      cur = cur.next;
    }
    cur.next = null;
    this.size--;
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
    this.size++;
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
    this.size--;
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

  getSize(): number {
    return this.size;
  }
}

export const linkedList = new LinkedList<ElementTypes>();
