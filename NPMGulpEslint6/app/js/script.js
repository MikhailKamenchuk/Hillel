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

let addingSlider = document.querySelector('.adding-slider');
let addingTable = document.querySelector('.adding-table');
let addingFirstProgressbar = document.querySelector('.adding-first-progressbar');
let addingSecondProgressbar = document.querySelector('.adding-second-progressbar');


let slider = document.getElementById('first-slider');
let secondSlider = document.getElementById('another-slider');
let tableArea = document.querySelector('.table-area');
let firstProgressbar = document.querySelector('.first-progressbar');
let secondProgressbar = document.querySelector('.second-progressbar');

function showBlockTableArea() {
	tableArea.style.display = 'block';
	slider.style.display = '';
	secondSlider.style.display = '';
	secondProgressbar.style.display = '';
	firstProgressbar.style.display = '';
};
addingTable.addEventListener('click', showBlockTableArea);

function showBlockSlider() {
	slider.style.display = 'block';
	secondSlider.style.display = 'block';
	tableArea.style.display = '';
	secondProgressbar.style.display = '';
	firstProgressbar.style.display = '';
}
addingSlider.addEventListener('click', showBlockSlider);

function showFirstProgressbar() {
	firstProgressbar.style.display = 'block';
	secondProgressbar.style.display = '';
	slider.style.display = '';
	secondSlider.style.display = '';
	tableArea.style.display = '';
}
addingFirstProgressbar.addEventListener('click', showFirstProgressbar);

function showSecondProgressbar() {
	secondProgressbar.style.display = 'block';
	firstProgressbar.style.display = '';
	slider.style.display = '';
	secondSlider.style.display = '';
	tableArea.style.display = '';
};
addingSecondProgressbar.addEventListener('click', showSecondProgressbar);
