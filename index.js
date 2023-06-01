class LinkedList {
    constructor() {
        this.listHead = null;
    }
     prepend(value) {
        let temp = null;
        if (this.listHead != null) {
            temp = this.listHead;
        }
        this.listHead = new Node(value);
        this.listHead.nextNode = temp;
    }
    append(value) {
        if (this.listHead == null) {
            this.prepend(value);
        } else {
            let temp = this.listHead;
            while (temp.nextNode != null) {
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
        }
    }
    size() {
        let temp = this.listHead;
        let counter = 0;
        while(temp !== null) {
            ++counter;
            temp = temp.nextNode;
        }
        return counter;
    }
    head() {
        return this.listHead;
    }
    tail() {
        let temp = this.listHead;
        while(temp.nextNode !== null) {
            temp = temp.nextNode;
        }
        return temp;
    }
    at(index) {
        let temp = this.listHead;
        while (index !== 0) {
            --index;
            temp = temp.nextNode
        }
        return temp;
    }
    pop() {
        let current = this.listHead;
        let previous = null
        while (current.nextNode != null) {
            previous = current;
            current = current.nextNode
        }
        previous.nextNode = null;

    }
    contains(value) {
        let temp = this.listHead;
        while (temp !== null) {
            if (temp.value === value) {
                return true;
            } else {
                temp = temp.nextNode;
            }
        }
        return false;
    }
    find(value) {
        let temp = this.listHead;
        let index = 0;
        while (temp !== null) {
            if (temp.value === value) {
                return index;
            } else {
                ++index;
                temp = temp.nextNode;
            }
        }
        return null;
    }
    toString() {
        let temp = this.listHead;
        let stringList = "";
        while (temp !== null) {
            stringList += `(${temp.value}) -> `
            temp = temp.nextNode;
        }
        return stringList += "null";
    }
    insertAt(value, index) {
        let currNode = this.listHead
        let prevNode = "";
        for (let i = 0; i <= this.size(); ++i) {
            if (i === index) {
                prevNode.nextNode = new Node(value);
                break;
            } else {
                prevNode = currNode;
                currNode = currNode.nextNode;
            }
        }
        let newCurrNode = this.at(index);
        newCurrNode.nextNode = currNode;
    }
    removeAt(index) {
        let currNode = this.listHead
        let prevNode = "";
        for (let i = 0; i <= this.size(); ++i) {
            if (i === index) {
                prevNode.nextNode = currNode.nextNode;
                break;
            } else {
                prevNode = currNode;
                currNode = currNode.nextNode;
            }
        }
    }
}

class Node  {
    constructor(value) {
        this.nextNode = null;
        this.value = value || null ;
    }
}

const linkedList = new LinkedList();

linkedList.prepend("testU");
linkedList.append("testI");
linkedList.append("testS");
linkedList.prepend("testL");
console.log(linkedList);

console.log(linkedList.size());
console.log(linkedList.head());
console.log(linkedList.tail());
console.log(linkedList.at(0));
console.log(linkedList.at(2));

linkedList.pop();
console.log(linkedList);

console.log(linkedList.contains("testI"));
console.log(linkedList.contains("testO"));
console.log(linkedList.find("testI"));
console.log(linkedList.find("testO"));
console.log(linkedList.toString());

linkedList.insertAt("testS", 3);
linkedList.insertAt("testO", 1);
console.log(linkedList.toString());

linkedList.removeAt(1);
console.log(linkedList.toString());

