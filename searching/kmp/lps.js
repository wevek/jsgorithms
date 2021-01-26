//to compute the lps 'longest proper prefix which is also suffix'

export function computeLpsArray(pat){
	let i = 0;
	let j = 1;
	const len = pat.length;
	const lps = [];

	for(let i =0; i < len; i++){
		lps.push(0);
	}

	while(j < len){
		if(pat[i] === pat[j]){
			lps[j] = i + 1;
			++i;
			++j;
		}else{
			if(i !== 0){
				i = lps[i - 1];
			}else{
				lps[j] = 0;
				++j;
			}
		}
	}

	return lps;
}

module.exports = {
	computeLpsArray
}