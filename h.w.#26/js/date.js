let header = document.querySelector('.header');

let newDiv = document.createElement('div');
newDiv.className = "clock";
header.appendChild(newDiv);
let colon = document.createElement('span');
colon.innerHTML = " : ";
let hourSpan = document.createElement('span');
hourSpan.id = "hr";
hourSpan.innerHTML = "00";
newDiv.appendChild(hourSpan);
newDiv.appendChild(colon);
newDiv.appendChild(colon);
let minSpan = document.createElement('span');
minSpan.id = "min";
minSpan.innerHTML = "00";
newDiv.appendChild(minSpan);
newDiv.appendChild(colon.cloneNode(true));
let secSpan = document.createElement('span');
secSpan.id = "sec";
secSpan.innerHTML = "00";
newDiv.appendChild(secSpan);

let d;
let h;
let m;
let s;
let animate;

function init(){
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	go('sec', s);
	go('min', m);
	go('hr', h);

};

animate = setInterval(function(){
	s++;
	if (s == 60){
		s = 0;
		m++;
		go('min', m);
	}
	if (m == 60){
		m = 0;
		h++;
	}
	if(h == 24){
		h = 0;
		go('hr', h);
	}
	go('sec', s);
}, 1000)


function go(id, val){
	if (val < 10){
		val = '0' + val;
	}
	document.getElementById(id).innerHTML = val;
}

window.onload = init();

