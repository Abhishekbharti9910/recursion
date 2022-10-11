#!/usr/bin/node


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// fibonacci using itereration method



function fibo(n) {
	if (n < 0 ) return "please enter valid fibonacci number";
	if (n === 0) return 0;
	if (n === 1) return 1;

	let first = 0;
	let second = 1;

	while (n > 1) {
		let temp = second;
		second = first + second;
		first = temp;
		n--;
	}

	return second;

}


console.log(fibo(-2)); // returns "Please enter a valid number of elements to be given an answer."
console.log(fibo(1)); // returns [0]
console.log(fibo(2)); // returns [0, 1]
console.log(fibo(3)); // returns [0, 1, 1]
console.log(fibo(8));
console.log("finish");
