class Node {
	constructor(value) {
		this.node = {
			value,
			next: null
		}
	}
}
class MyLinkedList {
	constructor(value) {
		this.head = new Node(value)
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = new Node(value)
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
		const newNode = new Node(value)
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	printList() {
		let myListArray = []
		let currentNode = this.head;
		while (currentNode != null) {
			myListArray.push(currentNode.node.value)
			currentNode = currentNode.next
		}
		return myListArray
	}
	insert(index, value) {
		let currentIndex = 0;
		let currentNode = this.head;
		let prevNode = this.head;
		let newNode = new Node(value);
		if (index === 0) {
			this.prepend(value);
			this.length++;
			return this;
		} else if (index > this.length) {
			this.append(value);
			this.length++;
			return this;
		} else {
			while (currentNode != null) {
				if (currentIndex === index) {
					break;
				}
				prevNode = currentNode;
				currentNode = currentNode.next
				currentIndex++;
			}
			prevNode.next = newNode;
			newNode.next = currentNode;
			this.length++;
			return this;
		}
	}
}

const myLinkedList = new MyLinkedList(24);
myLinkedList.append("09")
myLinkedList.append("1991")
myLinkedList.prepend("Wadhawan");
myLinkedList.prepend("Abhishek");
myLinkedList.insert(1, "*");
myLinkedList.insert(3, "*");

myLinkedList.insert(5, "/");
myLinkedList.insert(7, "/");
console.log(myLinkedList.printList());