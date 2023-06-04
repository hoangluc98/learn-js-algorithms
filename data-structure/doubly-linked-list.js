// Insertion - O(1)
// Removal - O(1) -> O(n)
// Searching - O(n)
// Access - O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return null;

        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            poppedNode.prev = null;
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.head) return null;

        const shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return shiftedNode;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let i, returnedNode;
        const mid = Math.floor(this.length / 2);

        if (index <= mid) {
            i = 0;
            returnedNode = this.head;
            while (i !== index) {
                returnedNode = returnedNode.next;
                i++;
            }
        } else {
            i = this.length - 1;
            returnedNode = this.tail;
            while (i !== index) {
                returnedNode = returnedNode.prev;
                i--;
            }
        }

        return returnedNode;
    }

    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }

        return false;
    }
    
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        const newNode = new Node(val);
        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;

        newNode.next = nextNode;
        nextNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();

        const prevNode = this.get(index - 1);
        const removedNode = prevNode.next;
        const nextNode = prevNode.next.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        removedNode.next = null;
        removedNode.prev = null;
        this.length--;

        return removedNode;
    }

    reverse() {
        if (this.length === 0) return null;

        let reservedNode = this.head;
        let currentNode = this.head.next;
        this.head = this.tail;
        this.tail = reservedNode;
        reservedNode.next = null;
        reservedNode.prev = currentNode;

        while (currentNode.next) {
            const tempNode = currentNode;
            currentNode = currentNode.next;
            tempNode.next = reservedNode;
            tempNode.prev = currentNode;
            reservedNode = tempNode;
        }

        return this;
    }
}

const list = new DoublyLinkedList();
list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)
console.log(list);
