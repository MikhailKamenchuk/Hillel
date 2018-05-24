function Slidebox(parent, forItems){
  this.container = document.querySelector(parent);
  let items = document.querySelectorAll(forItems);
  let counter = 0; 
  let timerId;
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
   
}


var firstSlider = new Slidebox('#first-slider', '#first-slider figure');
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

var anotherSlider = new Slidebox('#another-slider', '#another-slider figure');
window.addEventListener('load', anotherSlider.start());


