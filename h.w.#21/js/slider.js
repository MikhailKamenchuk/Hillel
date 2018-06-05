function Slidebox(parent){
  this.container = document.querySelector(parent);
  let items = this.container.getElementsByTagName('figure');
  let counter = 0; 
  let timerId;
  let controlItems = document.querySelectorAll('.controls-item button');
  this.arrows = document.querySelector('.arrows');
  this.control = document.querySelector('.controls')
  this.currentElem = null;
  this.go = function(){
        items[counter].classList.remove('show');
        counter++;
        counter = counter < 0 ? items.length - 1 : counter == items.length ? 0 : counter;
        items[counter].classList.add('show'); 
  }
  this.start = function (){
    timerId = setInterval(this.go, 1000);
  }
  this.stop = function (){
    clearTimeout(timerId);
  }

  this.moveByArrows = function(){
    items[counter].classList.remove('show');
    controlItems[counter].classList.remove('controls-active');     
    counter += +event.target.getAttribute('data-direct');
    counter = counter < 0 ? items.length - 1 : counter == items.length ? 0 : counter;
    items[counter].classList.add('show');
    controlItems[counter].classList.add('controls-active');
  }

  this.moveBySwitches = function(elem){
    items[counter].classList.remove('show');
    controlItems[counter].classList.remove('controls-active');
    counter = elem.innerHTML - 1;
    items[counter].classList.add('show');
    controlItems[counter].classList.add('controls-active');
  }
   
}


var firstSlider = new Slidebox('#first-slider');
var anotherSlider = new Slidebox('#another-slider');
window.addEventListener('load', firstSlider.start());

firstSlider.container.onmouseover = function(event){
  if(firstSlider.currentElem){
    return;
  }
  let figure = event.target;
  while (figure != this) {
    if (figure.tagName == 'FIGURE') break;
    figure = figure.parentNode;
  }
  if (figure == this) return;
  firstSlider.stop();
  firstSlider.currentElem = figure;
  figure.lastElementChild.style.display = "block";
}

firstSlider.container.onmouseout = function(event){
  if (!firstSlider.currentElem) return;
  var relatedTarget = event.relatedTarget;
  if(relatedTarget){
    while(relatedTarget){
    if (relatedTarget == firstSlider.currentElem) return;
      relatedTarget = relatedTarget.parentNode;
    }
  }
  firstSlider.start();
  firstSlider.currentElem.lastElementChild.style.display = '';
  firstSlider.currentElem = null;
}

anotherSlider.arrows.addEventListener('click', function(event) {
    if (!event.target.hasAttribute('data-direct')) return;
    anotherSlider.moveByArrows();
});

anotherSlider.control.addEventListener('click', function(event) {
  let target = event.target;
  if (target.tagName != 'BUTTON') return;
  anotherSlider.moveBySwitches(target);
})


