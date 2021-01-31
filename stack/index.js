class Node{
	constructor(val){
		this.next = null;
		this.val = val;
	}
}

class Stack{
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val){
		const node = new Node(val);
		if(!this.first){
			this.first = node;
			this.last = node;
		}else{
			node.next = this.first;
			this.first = node;
		}

		++this.size;
		return this;
	}

	pop(){
		if(!this.first) return null;
		const node = this.first;
		if(this.fist === this.last){
			this.last = null;
		}
		this.first = this.first.next;
		node.next = null;
		--this.size;
		return node.val;
	}

	get length(){
		return this.size;
	}

}

module.exports = {
	Stack
}