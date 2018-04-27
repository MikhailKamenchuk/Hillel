document.getElementById('sidebar-button').onclick = function() {
	display = document.getElementById('sidebar-wrapper').style.display; 
  	if (display == 'none') {
   	    document.getElementById('sidebar-wrapper').style.display = 'block';
   	} else {
   	    document.getElementById('sidebar-wrapper').style.display = 'none';
   	};
}