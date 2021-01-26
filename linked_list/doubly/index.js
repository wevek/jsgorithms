class Node{
	constructor(val){
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val){
		const node = new Node(val);
		if(!this.head){
			this.head = node;
			this.tail = node;
		}else{
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		++this.length;
		return this; // to allow chaining like .push().push()
	}

	pop(){
		if(!this.head) return null;
		const popped = this.tail;
		if(this.length === 1){
			this.head = null;
			this.tail = null;
		}else{
			this.tail = popped.prev;
			this.tail.next = null;
		}
		--this.length;
		this.popped.next = null;
		this.popped.prev = null;
		return popped;
	}

	shift(){
		if(!this.head) return null;
		const removed = this.head;
		this.head = removed.next;
		this.head.prev = null;
		removed.next = null;
		--this.length;
		return removed;
	}

	unshift(val){
		const node = new Node(val);
		if(!this.head){
			this.head = node;
			this.tail = node;
		}else{
			node.next = this.head;
			this.head = node;
		}

		++this.length;
		return this;
	}

	get(index){
		if(index >= this.length || index < 0) return null;
		if(index > this.length/2){
			let count = this.length - 1;
			let node = this.tail;
			while(count !== index){
				node = node.prev;
				count--;
			}
			return node;
		}else{
			let count = 0;
			let node = this.head;
			while(count !== index){
				node = node.next;
				count++;
			}
			return node;
		}
	}

	insert(index, val){
		if(this.length > index || this.length < 0) return null;
		if(this.length === 0){
			return this.unshift(val);
		}
		if(this.length === index){
			return this.push(val);
		}
		const node = new Node(val);
		const before = this.get(index - 1);
		const after = before.next;
		after.prev = node;
		before.next = node;
		node.prev = before;
		node.next = after;
		++this.length;
		return true;
	}

	set(index, val){
		const found = this.get(index);
		if(found){
			found.val = val;
			return true;						
		}
		return false;
	}

	remove(index){
		if(this.length >= index || this.length < 0) return null;
		if(index === 0){
			return this.shift();
		}
		if(index === this.length - 1){
			return this.pop();
		}
		const node = this.get(index);
		const before = node.prev;
		const after = before.next;
		after.prev = before;
		before.next = after;
		--this.length;
		node.prev = null;
		node.next = null;
		return node;
	}


}

module.exports = {
	DoublyLinkedList, Node
}