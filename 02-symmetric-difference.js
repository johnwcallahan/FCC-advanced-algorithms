/* Create a function that takes two or more arrays and returns an array of the symmetric 
difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical 
term "symmetric difference" of two sets is the set of elements which are in either of the 
two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference 
you take (say on a set D = {2, 3}), you should get the set with elements which are in either 
of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). */

function sym(args) { 
	function symDiff(arr1, arr2) { 
		result = [];
		for (i = 0; i < arr1.length; i++) { 
			if (arr2.indexOf(arr1[i]) === -1 && result.indexOf(arr1[i]) === -1) { 
				result.push(arr1[i]);
			}
		}
		for (i = 0; i < arr2.length; i++) { 
			if (arr1.indexOf(arr2[i]) === -1 && result.indexOf(arr2[i]) === -1) { 
				result.push(arr2[i]);
			}
		}
		return result;
	}
	args = Array.prototype.slice.call(arguments); 
	return args.reduce(symDiff);
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));