class Node{
	constructor(val){
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const q = require("../../queue");

class BinarySearchTree{
	constructor(){
		this.root = null;
	}

	insert(val){
		const node = new Node(val);
		if(!this.root){
			this.root = node;
			return this;
		}

		let current = this.root;

		while(true){
			if(node.val < current.val){
				if(!current.left){
					current.left = node;
					return this;
				}
				current = current.left;		
			}else{
				if(!current.right){
					current.right = node;
					return this;
				}
				current = current.right;
			}			
		}
	}


	find(val){
		if(!this.root) return false;

		let current = this.root;
		let found = false;
		while(current && !found){
			if(val < current.val){
				current = current.left;
			}else if(val > current.val){
				current =current.right;
			}else{
				found = true;
			}
		}

		return found;
	}

	BFS(){
		const result = [];
		const queue = new q.Queue();
		let node = this.root;
		if(!node) return result;

		queue.enqueue(node)

		while(queue.length){
			let node = queue.dequeue();
			result.push(node.val);
			node.left && queue.enqueue(node.left);
			node.right && queue.enqueue(node.right);
		}
		return result;
	}

	width(){
		const result = [];
		let width = 0;
		const queue = new q.Queue();
		let node = this.root;
		if(!node) return result;

		queue.enqueue(node)

		while(queue.length){
			let count = queue.length;
			width = Math.max(count, width);
			while(count--){
				let node = queue.dequeue();
				result.push(node.val);
				node.left && queue.enqueue(node.left);
				node.right && queue.enqueue(node.right);
			}
		}
		return width;
	}

	height(){
		let root = this.root;
		function traverse(node){
			if(!node) return 0;
			const hLeft = traverse(node.left);
			const hRight = traverse(node.right);
			return Math.max(hLeft + 1, hRight + 1);
		}
		return traverse(root);
	}

	DFSPreOrder(){
		let result = [];
		let root = this.root;
		if(!root) return result;
		function traverse(node){
			result.push(node.val);
			node.left && traverse(node.left);
			node.right && traverse(node.right);
		}
		traverse(root);
		return result;
	}

	DFSPostOrder(){
		let result = [];
		let root = this.root;
		if(!root) return result;
		function traverse(node){
			node.left && traverse(node.left);
			node.right && traverse(node.right);
			result.push(node.val);
		}
		traverse(root);
		return result;
	}

	//IN ORDER resturns sorted result

	DFSInOrder(){
		let result = [];
		let root = this.root;
		if(!root) return result;
		function traverse(node){
			node.left && traverse(node.left);
			result.push(node.val);
			node.right && traverse(node.right);
		}		
		traverse(root);
		return result;
	}

	largest(node = this.root){
		if(!node) return null;
		while(node.right){
			node = node.right;
		}
		return node.val;
	}

	smallest(node = this.root){
		if(!node) return null;
		while(node.left){
			node = node.left;
		}
		return node.val;
	}

	removeNode(current, val, type){
		if(val === current.val){
			if(!current.left && !current.right){
				return null;
			}else if(!current.left){
				return current.right;
			}else if (!current.right){
				return current.left;
			}else{
				if(type === "predecessor"){
					current.val = this.largest(current.left);
					current.left = this.removeNode(current.left, current.val, type);
				}else{
					current.val = this.smallest(current.right);
					current.right = this.removeNode(current.right, current.val, type);
				}
			return current;

			}
		}else if(val < current.val) {
            current.left = this.removeNode(current.left, val, type)
            return current
            
        }else{
            current.right = this.removeNode(current.right, val, type)
            return current
        }


	}

	remove(val, type="predecessor"){
		if(!this.root) return null;
		this.root = this.removeNode(this.root, val, type);
	}

}

module.exports = {
	BinarySearchTree
}