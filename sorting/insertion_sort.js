function InsertionSort(arr){
	for(let i = 1; i < arr.length; i++){
		let elem = arr[i];
		let j = i - 1;
		for(; j >= 0 && arr[j] > elem; j--){
				arr[j + 1] = arr[j]
		}
		arr[j + 1] = elem;
	}
}

module.exports = { InsertionSort }