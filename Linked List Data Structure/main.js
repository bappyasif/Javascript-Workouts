// Basic Format 
/*
const node_one = {
    data:100
}

const node_two = {
    data: 200
}

node_one.next = node_two;
console.log(node_one);

Within Terminal Use Command "node 'working js script name'"
For Example : node main
*/


class Node{
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

const first_node = new Node(100);
console.log(first_node);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert First Node Element
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert Last Node Element
    insertLast(data) {
        let node = new Node(data);
        let current;

        // If Empty, Make Head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // Insert At Specefic Index
    insertAt(data, index) {
        if(index > 0 && index > this.size) {
            return;
        }

        // If First List Item
        if(index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // Set Current To First
        current = this.head;
        let count = 0;

        while(count < index) {
            // Node Before Index Intended
            previous = current;
            count++;
            // Node After Current Index
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // Get Element At Index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // Remove Element At Index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove First
        if(index === 0) {
            this.head = current.next;
        } else {
            // If Index Not Zero
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;        
    }

    // Clear List
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print List Nodes Data
    printLinkedListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

}

const linked_list = new LinkedList();
linked_list.insertFirst(100);
linked_list.insertFirst(200);
linked_list.insertFirst(300);
linked_list.insertLast(400);
linked_list.insertAt(500, 2);
linked_list.getAt(2);
linked_list.removeAt(1);
linked_list.clearList();

console.log(linked_list);
linked_list.printLinkedListData();