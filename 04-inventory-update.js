/* Compare and update the inventory stored in a 2D array against a second 2D array of a 
fresh delivery. Update the current existing inventory item quantities (in arr1). If an item 
cannot be found, add the new item and quantity into the inventory array. The returned inventory 
array should be in alphabetical order by item. */

function updateInventory(arr1, arr2) { 
	for (i = 0; i < arr2.length; i++) { 
		var count = 0;
		for (j = 0; j < arr1.length; j++) { 
			if (arr1[j][1] === arr2[i][1]) { 
				arr1[j][0] += arr2[i][0];
				count += 1; 
			}
		}
		if (count === 0) { 
			arr1.push(arr2[i]);
		}
	} 
	var items = []; 
	for (i = 0; i < arr1.length; i++) { 
		items.push(arr1[i][1]); 
	}
	items = items.sort(); 
	var result = []; 
	for (i = 0; i < items.length; i++) { 
		for (j = 0; j < arr1.length; j++) { 
			if (items[i] === arr1[j][1]) { 
				result.push(arr1[j]); 
			}
		}
	}
	return result
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));