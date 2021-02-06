class Node{
	constructor(val, priority){
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue{
	constructor(){
		this.values = [];
	}

	enqueue(val, priority){
		let node = new Node(val, priority);
		this.values.push(node);
		this.bubbleUp();
	}

	bubbleUp(){
		if(!this.values.length) return;
		let index = this.values.length - 1;
		const element = this.values[index];
		while(index > 0){
			let parentIndex = Math.floor((index - 1) / 2);
			const parent = this.values[parentIndex];
			if(element.priority <= parent.priority) break;
			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}

	dequeue(){
		const max = this.values[0]; 
		const end = this.values.pop();
		if(this.values.length > 0){
			this.values[0] = end;
			this.bubbleDown();			
		}
		return max;
	}

	bubbleDown(){
		let index = 0;
		let length = this.values.length;
		const element = this.values[index];
		while(true){
			const lIndex = (2 * index) + 1;
			const rIndex = (2 * index) + 2;
			let lChild, rChild;
			let swap = null;
			if(lIndex < length){
				lChild = this.values[lIndex];
				if(lChild.priority > element.priority){
					swap = lIndex;
				}
			}
			if(rIndex < length){
				rChild = this.values[rIndex];
				if((swap === null && rChild.priority > element.priority) || (swap !== null && rChild.priority > lChild.priority)){
					swap = rIndex;
				}
			}

			if(swap === null) break;

			this.values[index] = this.values[swap];
			this.values[swap] = element;
			index = swap;
		}
	}

}

module.exports = {
	PriorityQueue
}