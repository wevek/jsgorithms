function getDigit(num, place = 0){
	return Math.floor(num / Math.pow(10, place)) % 10;
}

function getNumLength(num){
	if(num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMaxNum(arr){
	let max = arr[0];
	if(arr.length === 1) return max;
	for(let i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}

// it's a no comparison algorithm, only work for numbers
function RadixSort(arr){
	const maxNum = getMaxNum(arr);
	const len = getNumLength(maxNum);
	for(let i = 0; i < len; i++){
		const buckets = Array.from({length : 10}, () => []);
		for(let j = 0; j < arr.length; j++){
			let digit = getDigit(arr[j], i);
			buckets[digit].push(arr[j]);
		}
		arr = [].concat(...buckets);
	}

	return arr;
}

module.exports = {
	RadixSort
}