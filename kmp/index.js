const lps = require('./lps');
const pat = ['a','a', 'b', 'a', 'a','a', 'c'];

function KMPSearch(pat, txt){
	const n = txt.length;
	const m = pat.length;
	const lpsArray = lps.computeLpsArray(pat);
	console.log("lpsArray", lpsArray);
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

const txt = "onionionspl";
const pattern = "onions";

KMPSearch(pattern, txt);
