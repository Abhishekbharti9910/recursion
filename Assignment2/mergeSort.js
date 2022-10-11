#!/usr/bin/node


// merge sort in js

//merge Procedure
function merge(lArr, rArr) {
	let i = 0;
	let j = 0;
	let k = 0;
	let temp = new Array();

	while ( i < lArr.length && j < rArr.length) {
		if (lArr[i] <= rArr[j]) {
			temp[k] = lArr[i];
			i++;
		
		}  else {
			temp[k] = rArr[j];
			j++;
		}

		k++;

	}


	while (i < lArr.length ) {
		temp[k] = lArr[i];
		i++;
		k++;
	}

	while (j < rArr.length) {
		temp[k] = rArr[j];
		j++;
		k++;
	}

	return temp;

}


function ms(arr) {
	if (arr.length === 0) console.log("arey bhi array me value to daal");
	if (arr.length === 1) {
		return arr;
	}
	
	const mid = arr.length/2;
	const left = arr.slice(0, mid);
	const right = arr.slice(mid, arr.length);
	return merge(ms(left), ms(right));
}


const arr = [23,34,2,44,12,55,24,5];
console.log(arr);
console.log(ms(arr));


