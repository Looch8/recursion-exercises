// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
// Now write another function fibsRec which solves the same problem recursively.
// Test both versions of your functions by passing in various lengths as arguments.

// Iterative version
const fibs = (n) => {
	let arr = [0, 1];
	for (let i = 2; i < n; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}
	console.log(arr);
};
fibs(8);

// Recursive version
const fibsRec = (n) => {
	let arr = [0, 1];
	const fibsRecHelper = (n) => {
		if (n === 0) {
			return;
		}
		arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
		fibsRecHelper(n - 1);
	};
	fibsRecHelper(n - 2);
	console.log(arr);
};
fibsRec(8);
