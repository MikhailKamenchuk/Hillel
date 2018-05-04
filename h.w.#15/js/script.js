document.getElementById('sidebar-button').onclick = function() {
	display = document.getElementById('sidebar-wrapper').style.display; 
  	if (display == 'none') {
   	    document.getElementById('sidebar-wrapper').style.display = 'block';
   	} else {
   	    document.getElementById('sidebar-wrapper').style.display = 'none';
   	};
}

let addingSlider = document.querySelector('.adding-slider');
let slider = document.querySelector('.slider');
function showBlockSlider() {
	slider.style.display = 'block';
	tableArea.style.display = '';
}
addingSlider.addEventListener('click', showBlockSlider);

let addingTable = document.querySelector('.adding-table');
let tableArea = document.querySelector('.table-area');
function showBlockTableArea() {
	tableArea.style.display = 'block';
	slider.style.display = '';
};
addingTable.addEventListener('click', showBlockTableArea);