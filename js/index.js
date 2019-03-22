var userName = "Alice";

var a = 20;
var b = 10;

function clickme() {
	let userName = "Bob";
	console.log("I m " + userName); // I m Bob
}

console.log("I m " + userName); // I m Alice
clickme("Nithya");
console.log("I m " + userName); // I m Bob


function add() {
	result = a+b;
	console.log(result);
}

function sub() {
	result = a-b;
	console.log(result);
}
function mult() {
	 result = a*b;
	 console.log(result);
}

function div() {
	result = a/b;
	console.log(result);
}

function reverse() {
	var reverse = 0;
    var n = 1234;
    while(n!=0) {
		reverse = reverse * 10;
		reverse = reverse + n % 10;
		     n  =  n / 10;
		console.log("The reverse number is" + reverse) ;
	}
}
