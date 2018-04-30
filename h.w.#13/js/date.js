let newDiv = document.createElement('div');
newDiv.id = 'clock';
document.body.appendChild(newDiv);

setInterval(function(){
  let d = new Date();
  document.getElementById('clock').innerHTML = d.toLocaleString();
},1000);