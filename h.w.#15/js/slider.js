function Slidebox(name){
  var container = document.getElementById(name)
  var imgs = container.children;
  var len = imgs.length;
  var i = len - 1;
  return function go(){
     imgs[i].classList.remove('active')
     i = ++i % len;
    console.log(i);
     imgs[i].classList.add('active');
     var timerId = window.setTimeout(go, 1000)
  }
}

let firstSlider = new Slidebox('slider');
firstSlider();

