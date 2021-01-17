//in this one we find the lowest element and move it to the left in every iteration

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

function SelectionSort(arr){
	for(let i = 0; i < arr.length; i++){
		let min = i;
		for(let j = i + 1; j < arr.length; j++){
			if(arr[j] < arr[min]){
				min = j;
			}
		}
		if(arr[min] !== arr[i]){
			swap(arr, min, i);
		}
	}
	return arr;
}

module.exports = {
	SelectionSort
}