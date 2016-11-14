/*Design a cash register drawer function checkCashRegister() that accepts purchase price as 
the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) 
as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return 
the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order. */

function checkCashRegister(price, cash, cid) {
	var changeDue = cash - price;
	cid = cid.reverse();
	var changeKey = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
	var changeGiven = [];

	for (var i = 0; i < cid.length; i++) {
		if (changeDue === 0) {
			return changeGiven;
		} else {
			if (cid[i][1] <= changeDue) {
				changeGiven.push(cid[i]);
				changeDue -= cid[i][1];
				changeDue = Math.round(100 * changeDue) / 100;
			} else {
				var maxQuan = Math.floor(changeDue / changeKey[i]);
				cid[i][1] = maxQuan * changeKey[i];
				changeGiven.push(cid[i]);
				changeDue -= maxQuan * changeKey[i];
				changeDue = Math.round(100 * changeDue) / 100;
			}
		}
	}
	var totalCid = 0;
	for (i = 0; i < changeGiven.length; i++) {
		totalCid += cid[i][1];
	}
	totalCid = +totalCid.toFixed(2);
	if (totalCid < changeDue) {
		return 'Insufficient Funds';
	}
	if (totalCid === changeDue) {
		return 'Closed';
	}

	return changeGiven;
}

console.log(checkCashRegister(19.50, 20.00, [
	["PENNY", 0.01],
	["NICKEL", 0],
	["DIME", 0],
	["QUARTER", 0],
	["ONE", 1.00],
	["FIVE", 0],
	["TEN", 0],
	["TWENTY", 0],
	["ONE HUNDRED", 0]
]));