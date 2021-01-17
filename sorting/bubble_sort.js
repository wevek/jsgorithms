//array in javascript is passed as reference

function swap(arr, ind1, ind2){
	//here I am swapping using addition

	/*
		a = a + b assigns to a the value 1 + 2 .
		b = a - b assigns to b the value 1 + 2 - 2 = 1 ( b is now 1 ).
		a = a - b assigns to a the value 1 + 2 - 1 = 2 ( a is now 2 ).
	*/

	if(arr[ind1] === arr[ind2]) return //if they are equal do nothing

	arr[ind1] = arr[ind1] + arr[ind2];
	arr[ind2] = arr[ind1] - arr[ind2];
	arr[ind1] = arr[ind1] - arr[ind2]; 
}

function BubbleSort(arr){
	for(let i = 0; i < arr.length; i++){
		let noSwap = true;
		for(let j = 0; j < arr.length - i; j++){
			if(arr[j] > arr[j + 1]){
				swap(arr, j, j + 1);
				noSwap = false;
			}
		}
		if(noSwap){
			break;
		}
	}
	return arr;
}

module.exports = {
	BubbleSort
}