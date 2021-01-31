/* 
* we push the element in the end and bubble it down
* parent index is floor of (n -1)/2
* they can be used for scheduling
* example : if you want to push and queue music songs and pick them one by one based on time they are requested
* in MinBinaryHeap the first element has the min value
*/
class MinBinaryHeap{
	constructor(){
		this.values = [];
	}

	insert(val){
		this.values.push(val);
		this.bubbleDown();
		return this;
	}

	bubbleDown(){
		if(!this.values.length) return;
		let index = this.values.length - 1;
		const element = this.values[index];
		while(index > 0){
			let parentIndex = Math.floor((index - 1) / 2);
			const parent = this.values[parentIndex];
			if(element >= parent) break;
			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}

	extractMin(){
		if(!this.values.length) return null;
		const min = this.values[0]; 
		this.values[0] = this.values.pop();
		this.bubbleUp();
		return min;
	}

	bubbleUp(){
		if(!this.values.length) return;
		let index = 0;
		let length = this.values.length;
		const element = this.values[index];
		while(index < this.values.length){
			const lIndex = (2 * index) + 1;
			const rIndex = (2 * index) + 2;
			let lChild, rChild;
			let swap = null;
			if(lIndex < length){
				lChild = this.values[lIndex];
				if(lChild < element){
					swap = lIndex;
				}
			}
			if(rIndex < length){
				rChild = this.values[rIndex];
				if((swap === null && rChild < element) || (swap !== null && rChild < lChild)){
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
	MinBinaryHeap
}