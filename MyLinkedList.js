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
			const leader = this.trvarseToIndex(index - 1);
			const holdingPointer = leader.next;
			leader.next = newNode;
			newNode.next = holdingPointer;
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
				const leader = this.trvarseToIndex(index - 1);
				const nodeToBeRemoved = leader.next;
				leader.next = nodeToBeRemoved.next;
			}
			this.length--;
			return this;
		}
	}
	reverse(){
		if(!this.head.next) return this;
		let firstNode = this.head;
		let secondNode = firstNode.next;
		this.tail = this.head
		while(secondNode){
			let temp = secondNode.next;
			secondNode.next = firstNode
			firstNode = secondNode;
			secondNode = temp;
		}
		this.head.next = null;
		this.head = firstNode;
		return this.printList()
	}
}

const myLinkedList = new MyLinkedList(24);
myLinkedList.append("09")
myLinkedList.append("1991")
myLinkedList.prepend("Wadhawan");
myLinkedList.prepend("Abhishek");
// myLinkedList.insert(2, "=")
// myLinkedList.insert(4, "=")
// myLinkedList.insert(5, "=")
// myLinkedList.remove(5)
// myLinkedList.remove(2)
// myLinkedList.remove(4)
// myLinkedList.remove(4)
// myLinkedList.remove(4)
// console.log(myLinkedList.printList());
// console.log(myLinkedList.reverse());
// console.log(myLinkedList);