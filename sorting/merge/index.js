function merge(arr1, arr2){
	//function to merge two sorted arrays
	let results = [];
	let i = 0;
	let j = 0;

	while(i < arr1.length && j < arr2.length){
		if(arr2[j] > arr1[i]){
			results.push(arr1[i]);
			i++;
		}else{
			results.push(arr2[j]);
			j++;
		}
	}

	while(i < arr1.length){
		results.push(arr1[i]);
		i++;
	}

	while(j < arr2.length){
		results.push(arr2[j]);
		j++;
	}

	return results;
}

function MergeSort(arr){
	if(arr.length <= 1) return arr; //alredy sorted, the base case to stop recursion
	const mid = Math.floor(arr.length/2);
	const left = MergeSort(arr.slice(0, mid));
	const right = MergeSort(arr.slice(mid));
	return merge(left, right);
}

module.exports = {
	MergeSort
}