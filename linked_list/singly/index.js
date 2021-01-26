//node is what contains the value
class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	//push adds to the end of linked list
	push(val){
		const node = new Node(val);
		if(!this.head){
			this.head = node;
			this.tail = node;			
		}else{
			this.tail.next = node;
			this.tail = this.tail.next;
		}

		++this.length;
		return this;
	}

	//removes one item from the end of list
	pop(){
		if(!this.head){
			return null;
		}
		let node = this.head;
		let prev = node;
		while(node.next){
			prev = node;
			node = node.next;
		}

		prev.next = null;
		this.tail = prev;
		--this.length;
		if(this.length === 0){
			this.head = null;
			this.tail = this.head;
		}
		return node;
	}

	shift(){
		if(!this.head){
			return null;
		}
		const node = this.head;
		this.head = this.head.next;
		node.next = null;
		--this.length;
		if(this.length === 0){
			this.tail = null;
		}
		return node;
	}

	unshift(val){
		const node = new Node(val);
		if(!this.head){
			this.head = node;
			this.tail = node;
		}else{
			this.head.next = this.head;
			this.head = node;
		}
		++this.length;
		return this;
	}

	get(index){
		if(index > this.length || index < 0) return null;
		let count = 0;
		let node = this.head;
		while(count !== index){
			node = node.next;
			count++;
		}
		return node;
	}

	set(index, val){
		const found = this.get(index);
		if(found){
			found.val = val;
			return true;
		}
		return false;
	}

	insert(index, val){

		if(index < 0 || index > this.length) return false;

		if(index === 0){
			this.unshift(value);
			return true;
		}
		if(index === this.length){
			this.push(value);
			return true;
		}

		const prev = this.get(index - 1);
		const next = prev.next;
		const node = new Node(val);
		prev.next = node;
		node.next = next;	
		++this.length;
		return true;	
	}

	remove(index){

		if(index < 0 || index > this.length) return null;

		if(index === 0){
			return this.shift(value);
		}
		if(index === this.length){
			return this.pop(value);
		}

		const prev = this.get(index - 1);
		const next = prev.next;
		prev.next = next.next;
		next.next = null;	
		--this.length;
		return next;	
	}

	reverse(){
		if(!this.head) return null;

		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		while(node){
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}

		return this;
	}

}

module.exports = {
	SinglyLinkedList,
	Node
}