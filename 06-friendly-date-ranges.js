/* Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates 
instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the 
date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year and ends within one year, the 
year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month. */

function makeFriendlyDates(arr) {
	
  //seperate parts of date and create data structure to store them
	var dates = [[],[]]; 
	dates[0] = arr[0].split('-');
	dates[1] = arr[1].split('-');

	//helper function to determine if date2 is within a year of date1
	function isWithinYear(date1, date2) { 
		var year1 = parseInt(date1[0]);
		var year2 = parseInt(date2[0]); 
		var month1 = parseInt(date1[1]); 
		var month2 = parseInt(date2[1]); 
		var day1 = parseInt(date1[2]); 
		var day2 = parseInt(date2[2]); 
		if (year1 === year2) { 
			return true; 
		} else if (year2 === year1 + 1 && (month2 < month1) || (month2 === month1 && day2 < day1)) { 
			return true; 
		} else { 
			return false; 
		}
	}

	//object to relate numbers and months
	var months = {
		'01' : 'January',
		'02' : 'February', 
		'03' : 'March', 
		'04' : 'April', 
		'05' : 'May', 
		'06' : 'June', 
		'07' : 'July', 
		'08' : 'August', 
		'09' : 'September', 
		'10' : 'October', 
		'11' : 'November', 
		'12' : 'December'
	};

	//object to relate select days to their suffix (all others are 'th')
	var days = { 
		'01' : '1st', 
		'02' : '2nd', 
		'03' : '3rd', 
		'04' : '4th', 
		'05' : '5th', 
		'06' : '6th', 
		'07' : '7th', 
		'08' : '8th', 
		'09' : '9th', 
		'21' : '21st', 
		'22' : '22nd', 
		'23' : '23rd', 
		'31' : '31st'
	};

	var currentYear = new Date().getFullYear();
	var friendlyDate1 = []; 
	var friendlyDate2 = []; 

	//push month to friendlyDate1
	friendlyDate1.push(months[dates[0][1]]);
	
	//push day to friendlyDate1 with the correct suffix 
	if (dates[0][2] in days) { 
		friendlyDate1.push(days[dates[0][2]]); 
	} else { 
		friendlyDate1.push(dates[0][2] + 'th'); 
	}

	//push year to friendlyDate1 only if needed
	if (parseInt(dates[0][0]) === currentYear && isWithinYear(dates[0], dates[1])) { 
	}
	else { 
		friendlyDate1.push(dates[0][0]); 
	}

	//push month to friendlyDate2 if needed
	if (dates[0][1] === dates[1][1] && dates[0][0] === dates[1][0]) { 
	}
	else { 
		friendlyDate2.push(months[dates[1][1]]); 
	}

	//push day to friendlyDate2 with the correct suffix 
	if (dates[1][2] in days) { 
		friendlyDate2.push(days[dates[1][2]]); 
	} else { 
		friendlyDate2.push(dates[1][2] + 'th'); 
	}

	//push year to friendlyDate2 only if needed
	if (isWithinYear(dates[0], dates[1])) { 
	}
	else { 
		friendlyDate2.push(dates[1][0]);
	}
	
	var both = []; 
	both.push(friendlyDate1, friendlyDate2); 

	for (var i = 0; i < both.length; i++) { 
		if (both[i].length === 3) { 
			both[i][1] = both[i][1] + ','; 
		}
		both[i] = both[i].join(' ');
	}

	//helper function to check if dates are equal
	function isEqual(arr1, arr2) { 
		for (var i = 0; i < arr1.length; i++) { 
			if (arr1[i] !== arr2[i]) { 
				return false; 
			}
		}
		return true; 
	}

	//if dates are equal, only return one, otherwise return both
	var ifEqual = [];
	if (isEqual(dates[0], dates[1])) { 
		ifEqual.push(both[0]);
		return ifEqual; 
	} else { 
		return both; 
	}
}

console.log(makeFriendlyDates(["2018-01-13", "2018-01-20"]) );