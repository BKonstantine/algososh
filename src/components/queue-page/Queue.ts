interface IQueue<T> {
  enqueue: (item: T) => void;
  dequeue: () => void;
  peak: () => T | null;
}

class Queue<T> implements IQueue<T> {
  container: (T | null)[] = [];
  head = 0;
  tail = 0;
  private readonly size: number = 0;
  private length: number = 0;

  constructor(size: number) {
    this.size = size;
    this.container = Array(size);
  }

  enqueue = (item: T) => {
    if (this.length >= this.size) {
      throw new Error("Maximum length exceeded");
    } else {
      this.container[this.tail % this.size] = item;
      this.tail++;
      this.length++;
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      throw new Error("No elements in the queue");
    } else {
      delete this.container[this.head % this.size];
      this.head++;
      this.length--;
    }
  };

  peak = (): T | null => {
    if (this.isEmpty()) {
      throw new Error("No elements in the queue");
    }
    if (!this.isEmpty()) {
      return this.container[this.head % this.size];
    } else {
      return null;
    }
  };

  isEmpty = () => this.length === 0;
}

export const queue = new Queue<string>(7);
