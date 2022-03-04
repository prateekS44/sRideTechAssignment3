const regex = /^[+-]*$/;
const calculateMinimumNumberOfFlips = exports.calculateMinimumNumberOfFlips = (S, k) => {
    if(!regex.test(S)) return -1;
    if(S.indexOf('-') === -1) return 0;
	const n = S.length;
	if((k>n) || (k === n && S.indexOf('+') !== -1)) return "IMPOSSIBLE";
	let flipCount=0;
	for(let i=n-1; i>=k-1; i--) {
		if(S[i]=='-') {
            S = flip(S,i-k+1,i); 
            ++flipCount;
        }
	}
    if(S.indexOf('-') !== -1) return "IMPOSSIBLE";
	return flipCount;
}

const flip = exports.flip = (S,left,right) => {
    for(let i=left; i<=right; i++) {
        if(S[i] === "+") {
            S = replaceCharacterAtPosition(S, i, "-")
        } else {
            S = replaceCharacterAtPosition(S, i, "+")
        }
    }
    return S;
}

const replaceCharacterAtPosition = exports.replaceCharacterAtPosition = (s, i, c)  => {
    const arr = [...s];  // Convert string to array
    arr[i] = c;          // Set c at position i in the array
    return arr.join(''); // Back to string
}


console.log("Result-1 = ", calculateMinimumNumberOfFlips('---+-++-', 3));
console.log("Result-2 = ",calculateMinimumNumberOfFlips('+++++', 4));
console.log("Result-3 = ",calculateMinimumNumberOfFlips('-+-+-', 4));