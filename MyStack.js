class SNode {
	constructor(value) {
		this.node = {
			value,
			next: null
		}
	}
}

class MyStack {
	constructor() {
		this.top = null
		this.bottom = null
		this.length = 0
	}

	peek() {
		return this.top;
	}
	push(value) {
		const newNode = new SNode(value);
		if (this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const holdingPointer = this.top;
			this.top = newNode;
			this.top.next = holdingPointer
		}
		this.length++;
		return this;
	}
	pop() {
		if (this.length) {
			this.top = this.top.next;
			this.length--
			return this;
		}
		return null

	}
}

const myStack = new MyStack();
myStack.push("YouTube");
myStack.push("Studio");
myStack.push("Google");
myStack.pop();
// console.log(myStack.peek());