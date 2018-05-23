let divForResize = document.createElement('div');
divForResize.id = 'window-size';
document.body.appendChild(divForResize);

function showSize(){
  divForResize.innerHTML = `width: ${window.innerWidth} height: ${window.innerHeight}`;
};

function delay(){
  setTimeout(showSize, 2000);
};
showSize();
window.addEventListener('resize', delay);