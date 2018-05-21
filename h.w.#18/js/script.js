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

//for promises

let firstPromiseButton = firstProgressbar.querySelector('.btn-for-promise')
let firstProgress = firstProgressbar.querySelector('.my-bar');
let firstTextInPromise = firstProgressbar.querySelectorAll('.content-in-progressbar');
let firstImagesInPromise = firstProgressbar.querySelectorAll('.for-image');
let firstHeadsInPromise = firstProgressbar.querySelectorAll('.article-ptomise');

function hideProgress(){
	firstProgress.style.width = "0";
}

function hideImages(){
	for(let i = 0; i < firstImagesInPromise.length; i++){
		firstImagesInPromise[i].style.width = "0";
		firstImagesInPromise[i].style.height = "0";
	}
}

function hideText(){
	for(let i = 0; i < firstTextInPromise.length; i++){
		firstTextInPromise[i].style.width = "0";
		firstTextInPromise[i].style.padding = "0";
		firstTextInPromise[i].style.height = "0";
	}
}

function hideHeders(){
	for(let i = 0; i < firstHeadsInPromise.length; i++){
		firstHeadsInPromise[i].style.height = "0";
		firstHeadsInPromise[i].style.width = "0";
	}
}

let promise1 = new Promise((resolve, reject) => {
	resolve(firstPromiseButton.addEventListener('click', hideProgress))
});
promise1.then(function(){
	return Promise.resolve(firstProgress.addEventListener('transitionend', hideImages))
}).then(function(){
	return Promise.resolve(firstImagesInPromise[0].addEventListener('transitionend', hideText))
}).then(function(){
	return Promise.resolve(firstTextInPromise[0].addEventListener('transitionend', hideHeders))
})

