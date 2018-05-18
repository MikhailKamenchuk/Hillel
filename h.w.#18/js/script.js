document.getElementById('sidebar-button').onclick = function() {
	display = document.getElementById('sidebar-wrapper').style.display; 
  	if (display == 'none') {
   	    document.getElementById('sidebar-wrapper').style.display = 'block';
		document.getElementById('sidebar-button').style.left = '';
   	} else {
   	    document.getElementById('sidebar-wrapper').style.display = 'none';
		document.getElementById('sidebar-button').style.left = '17px';
   	};
}

let addingFirstProgressbar = document.querySelector('.adding-first-progressbar');
let firstProgressbar = document.querySelector('.first-progressbar');
let addingSecondProgressbar = document.querySelector('.adding-second-progressbar');
let secondProgressbar = document.querySelector('.second-progressbar');

function showFirstProgressbar() {
	firstProgressbar.style.display = 'block';
	secondProgressbar.style.display = '';
}
addingFirstProgressbar.addEventListener('click', showFirstProgressbar);


function showSecondProgressbar() {
	secondProgressbar.style.display = 'block';
	firstProgressbar.style.display = '';
};
addingSecondProgressbar.addEventListener('click', showSecondProgressbar);


function MoveFirst(){
	let elem = document.querySelector('.myFirstBar');
	let width = 1;
	let timerId = setInterval(frame, 20);
	function frame(){
		if (width >= 100){
			clearInterval(timerId);
		} else {
			width++;
			elem.style.width = width +'%';
		}
	}

}
function MoveSecond(){
	let elem = document.querySelector('.mySecondBar');
	let width = 1;
	let timerId = setInterval(frame, 20);
	function frame(){
		if (width >= 100){
			clearInterval(timerId);
		} else {
			width++;
			elem.style.width = width +'%';
		}
	}
}

addingFirstProgressbar.addEventListener('click', MoveFirst)

// let promise = new Promise((resolve, reject) => {
//    setTimeout(resolve(), 1000);
// });

// promise
// .then (
// 	result => {
// 		// let elem = document.querySelector('.for-image');
// 		// let go = function (){
// 		// 	elem.style.height = '0px'
// 		// }
// 		// this.addEventListener('click', go)
//         console.log("dqwdqwdqwdqwdqwd")
// 	})

addingSecondProgressbar.addEventListener('click', MoveSecond);