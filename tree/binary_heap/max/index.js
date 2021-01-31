/* 
* we push the element in the end and bubble it up
* parent index is floor of (n -1)/2
* they can be used for scheduling
* example : if you want to push and queue music songs and pick them one by one based on time they are requested
* in MaxBinaryHeap the first element has the max value
*/
class MaxBinaryHeap{
	constructor(){
		this.values = [];
	}

	insert(val){
		this.values.push(val);
		this.bubbleUp();
		return this;
	}

	bubbleUp(){
		if(!this.values.length) return;
		let index = this.values.length - 1;
		const element = this.values[index];
		while(index > 0){
			let parentIndex = Math.floor((index - 1) / 2);
			const parent = this.values[parentIndex];
			if(element <= parent) break;
			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}

	extractMax(){
		if(!this.values.length) return null;
		const max = this.values[0]; 
		this.values[0] = this.values.pop();
		this.bubbleDown();
		return max;
	}

	bubbleDown(){
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
				if(lChild > element){
					swap = lIndex;
				}
			}
			if(rIndex < length){
				rChild = this.values[rIndex];
				if((swap === null && rChild > element) || (swap !== null && rChild > lChild)){
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
	MaxBinaryHeap
}