//functions
function func1() {
	z = z + 1;
	console.log(z);
	document.querySelector('.r').innerHTML = z;
}

//code

console.log('Hello');
document.querySelector('h1').innerHTML = 'Hello';
let z = 0;
console.log(z);

document.querySelector('.b1').onclick = func1;

console.log('last');

