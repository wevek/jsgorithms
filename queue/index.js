class Node{
	constructor(val){
		this.next = null;
		this.val = val;
	}
}

//We go like this   pop from front <========================== add at end

class Queue{
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val){
		const node = new Node(val);
		if(!this.first){
			this.first = node;
			this.last = node;
		}else{
			this.last.next = node;
			this.last = node;
		}

		++this.size;
		return this;
	}

	dequeue(){
		if(!this.first) return null;
		const node = this.first;
		if(this.first === this.last){
			this.last = null;
		}
		this.first = this.first.next;
		--this.size;
		return node.val;

	}

	get length(){
		return this.size;
	}
}

module.exports = {
	Queue
}