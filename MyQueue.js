class QNode {
	constructor(value) {
		this.node = {
			value,
			next: null
		}
	}
}

class MyQueue {
	constructor() {
		this.first = null
		this.last = null
		this.length = 0
	}

	peek() {
		return this.fisrt
	}
	enqueue(value) {
		const newNode = new QNode(value);
		if(this.length === 0){
			this.fisrt = newNode;
			this.last = newNode;
		}else{
			this.last.next = newNode
			this.last = newNode;
		}
		this.length++
		return this;
	}
	dequeue() {
		if(!this.fisrt){
			return null;
		}
		if(this.fisrt === this.last){
			this.last = null
		}
		this.fisrt = this.first.next;
		this.length--
		return this;
	}
}

const myQ = new MyQueue();