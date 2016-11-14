/* Return the number of total permutations of the provided string that don't have repeated 
consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, 
aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this 
case a) repeating. */

function permAlone(str) {
	var arr = str.split('');
	var perms = [];

	function generate(n, arr) {
		if (n === 1) {
			perms.push(arr.join(''));
			return;
		}

		for (var i = 0; i < n; i++) {
			generate(n - 1, arr);
			if (n % 2 === 0) {
				swap(arr, i, n - 1);
			} else {
				swap(arr, 0, n - 1);
			}
		}
	}

	function swap(arr, idxA, idxB) {
		var tmp = arr[idxA];
		arr[idxA] = arr[idxB];
		arr[idxB] = tmp;
	}

	generate(arr.length, arr);
	var total = 0;
	for (var i = 0; i < perms.length; i++) {
		if (!/(.)\1/.test(perms[i])) {
			total += 1;
		}
	}
	return total;
}

console.log(permAlone('aab'));