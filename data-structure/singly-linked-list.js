// Insertion - O(1)
// Removal - O(1) -> O(n)
// Searching - O(n)
// Access - O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;

        const shiftedNode = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }

        return shiftedNode;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let i = 0;
        let returnedNode = this.head;

        while (i !== index) {
            returnedNode = returnedNode.next;
            i++;
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
        newNode.next = nextNode;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.shift(val);
        if (index === this.length - 1) return this.pop(val);

        const prevNode = get(index - 1);
        const removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        removedNode.next = null;
        this.length--;

        return removedNode;
    }

    reverse() {
        if (this.length === 0) return null;

        let reservedNode = this.head;
        let nextNode = this.head.next;
        this.head = this.tail;
        this.tail = reservedNode;
        reservedNode.next = null;

        while (nextNode) {
            const tempNode = nextNode;
            nextNode = nextNode.next;
            tempNode.next = reservedNode;
            reservedNode = tempNode;
        }

        return this;
    }
}

const list = new SinglyLinkedList();
list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)
console.log(list);
