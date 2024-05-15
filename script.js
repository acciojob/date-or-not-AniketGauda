var isDate = function (input) {
  //   write your code here
	let s = JSON.stringify(input);
    return /[0-9]/gim.test(s);
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
