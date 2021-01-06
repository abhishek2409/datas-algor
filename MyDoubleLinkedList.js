class DNode {
	constructor(value) {
		this.node = {
			value,
			next: null,
			prev: null
		}
	}
}

class MyDoubleLinkedList {
	constructor(value) {
		this.head = new DNode(value);
		this.tail = this.head;
		this.length = 1
	}
	append(value) {
		const newNode = new DNode(value)
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
		const newNode = new DNode(value);
		newNode.next = this.head;
		this.head.prev = newNode;
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
	trvarseToIndex(index) {
		let currentIndex = 0;
		let currentNode = this.head;
		while (currentIndex != index) {
			currentNode = currentNode.next
			currentIndex++;
		}
		return currentNode
	}
	insert(index, value) {
		let newNode = new DNode(value);
		if (index === 0) {
			this.prepend(value);
			this.length++;
			return this;
		} else if (index > this.length) {
			this.append(value);
			this.length++;
			return this;
		} else {
			const leader = this.trvarseToIndex(index - 1);
			const holdingPointer = leader.next;
			leader.next = newNode;
			newNode.next = holdingPointer;
			newNode.prev = leader;
			holdingPointer.prev = newNode;
			this.length++;
			return this;
		}
	}
	remove(index) {
		if (index === 0) {
			this.head = this.head.next;
			this.length--;
			return this;
		} else {
			if ((index === this.length - 1) || (index > this.length - 1)) {
				const leader = this.trvarseToIndex(index - 1);
				leader.next = null;
			} else {
				const leader = this.trvarseToIndex(index - 1); // 1
				const nodeToBeRemoved = leader.next; // 2
				const nextToRemovedNode = nodeToBeRemoved.next;
				leader.next = nextToRemovedNode;
				nextToRemovedNode.prev = leader;
			}
			this.length--;
			return this;
		}
	}
}

const myDDList = new MyDoubleLinkedList(24)
myDDList.append("09")
myDDList.append("1991")
myDDList.prepend("Wadhawan");
myDDList.prepend("Abhishek");
myDDList.insert(2, "=")
// myDDList.insert(4, "=")
// myDDList.insert(5, "=")
// myDDList.remove(5)
// myDDList.remove(2)
// myDDList.remove(4)
// myDDList.remove(4)
// myDDList.remove(4)
// console.log(myDDList.printList());
// console.log(myDDList);