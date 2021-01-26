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

//finding pivot
function pivot(arr, left, right=arr.length - 1){
	let piv = arr[left];
	let swapIndex = left;
	for(let i = left + 1; i < right; i++){
		if(piv > arr[i]){
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}
	swap(arr, swapIndex, left);
	return swapIndex;
}

function QuickSort(arr, left, right=arr.length - 1){
	if(left < right){
		let pivotIndex = pivot(arr, left, right);
		QuickSort(arr, left, pivotIndex - 1);
		QuickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

module.exports = {
	QuickSort
}