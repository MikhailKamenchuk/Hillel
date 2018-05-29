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

