function firstNonRepeatedChar(str) {
 //SGN Write your code here
	
	let arr = [];
	let sol = null;
	for (let i = 0; i < str.length; i++) {
		let count = 0;
		for (let j = 0; j < str.length; j++){
			if(str.charAt(i) == str.charAt(j)){
				count += 1;
			}
			}
		if(count === 1){
			sol = str.charAt(i);
			break;
		}

	
}
	return sol;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
