const lps = require('./lps');

function KMPSearch(pat, txt){
	const n = txt.length;
	const m = pat.length;
	const lpsArray = lps.computeLpsArray(pat);
	let i = 0; //for text
	let j = 0; //for pattern

	while(i < n){
		if(txt[i] === pat[j]){
			++i; ++j;
		}else{
			if(j !== 0){
				j = lpsArray[j - 1];
			}else{
				++i;
			}
		}
		if(j === m){
			console.log(`Found from ${i - j} to ${i - 1}`);
			j = lpsArray[j - 1];
		}
	}
}

module.exports = {
	KMPSearch
}
