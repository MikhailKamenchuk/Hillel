function timer(id) {
    var t = document.getElementById(id).innerHTML;
	var hms = t.split(":");
	var h = parseInt(hms[0]);
	var m = parseInt(hms[1]);
	var s = parseInt(hms[2]);
	if(s == 59) {
      var s = 0;
      if(m == 59) {
        var m = 0;
		++h;
      }
      else {
		++m;
      }
	}
	else {
      ++s;
	}
    if(s < 10) {
      var s = "0" + s;
	}
	if(m < 10) {
      var m = "0" + m;
	}	
	if(h < 10) {
      var h = "0" + h;
	}
    document.getElementById(id).innerHTML = h + ':' + m + ':' + s;
}

function startTimer() {  
  timerId = setInterval('timer("my-timer")', 1000);
}
window.addEventListener('load', startTimer)

function stopTimer(){
  clearInterval(timerId)
}

let tamerBox = document.getElementById('my-timer');
tamerBox.addEventListener('mouseover', stopTimer);
tamerBox.addEventListener('mouseout', startTimer);

document.addEventListener('keydown', function(event) {
    const key = event.keyCode;
    if (key === 27) {
      tamerBox.innerHTML = "00:00:00"  
    }
});