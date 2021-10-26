window.onload = function() {
	if(localStorage.length > 0){
		let keysToMas = Object.keys(localStorage);
		document.querySelector('.list').style.display = 'flex';
		
		for(let key of keysToMas.sort()) {
			addValue(localStorage.getItem(key));
		}
	}
}

function addValue(value)
{
	let liLast = document.createElement('li');
	liLast.innerText = value;
	document.querySelector('ul').append(liLast);
}

let power ="";
function insert(num) {
	document.querySelector("form").textview.value = 
	document.querySelector("form").textview.value + num;
}

function clean() {
	document.querySelector("form").textview.value = '';
}

function back() {
	let exp = document.querySelector("form").textview.value;
	document.querySelector("form").textview.value = exp.substring(0, exp.length - 1);
}


function equal() {
	let exp = document.querySelector("form").textview.value;
	if(document.querySelector("form").textview.value.includes('^')) {
		let tmp = document.querySelector("form").textview.value.split("^");
		console.log(tmp);
		let num = eval(power);
		let pow = +tmp[1];
		document.querySelector("form").textview.value = Math.pow(num,pow);
		power="";
		return
	}

		document.querySelector('.list').style.display = 'flex';
		addValue(document.querySelector("form").textview.value + "=" + eval(exp));

		if(exp) {
		document.querySelector("form").textview.value = eval(exp);
	}

	if(!exp) {
		alert ('Ввведите операцию');
		liLast.style.display = 'none';
	}
	

	if (localStorage.length < 100) {
  localStorage.setItem(localStorage.length, exp + "=" + eval(exp));
}
else{
let keysToMas = Object.keys(localStorage);
let arr = [];
for(let key of keysToMas.sort()) {
  arr.push(localStorage.getItem(key));
}
arr.shift();
arr.push(exp + "=" + eval(exp));
localStorage.clear();
document.querySelector('ul').innerHTML = '';
arr.forEach(function(item, i,) {
	addValue(item);	
	localStorage.setItem(i, item);
  });
}


}

function percent() {
	document.querySelector("form").textview.value = eval(document.querySelector("form").textview.value) / 100;
}

function sqrt() {
	document.querySelector("form").textview.value = Math.sqrt(eval(document.querySelector("form").textview.value));
}

function operation() {
	power = document.querySelector("form").textview.value;
	document.querySelector("form").textview.value += "^";	
	

	
}