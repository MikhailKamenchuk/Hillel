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
