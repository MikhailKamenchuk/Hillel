$(function(){
		$(".add-student").click (function() {
    	let studentName = $('#name').val();
		let studentAge = $('#age').val();
		let courseOfStudy = $('#course').val();
		let departnemtOfStudy = $('#department').val();
		let studentSite = $('#site').val();
		let studentPhone = $('#phone').val();
		let tr = '<tr><td></td>  <td>'+ studentName +'</td>  <td>'+ studentAge +'</td>  <td>'+ courseOfStudy +'</td>  <td>'+ departnemtOfStudy +'</td>  <td>'+ studentSite +'</td>  <td>'+ studentPhone +'</td><td><button type="button" class="btn-edit" return false> Edit </button></td><td><button type="button" class="btn-del" return false> Del </button></td></tr>';

   		$('tbody').prepend(tr);

   		$('#students-form')[0].reset(); 

   		dynamicIndex();
             
        localStorage.setItem(".students-table", tournament.html());

   		event.preventDefault();
	});

	let tournament = $('tbody');        

    if(localStorage.getItem(".students-table")) {
        tournament.html(localStorage.getItem(".students-table"));
    }
    
	MaskedInput({
    	elm: document.getElementById('phone'), 
    	format: '+380 (__) ___-__-__',
    	separator: '+380 ()-'
    });

	let currentTr = null;

	function dynamicIndex(){
		$('.students-table tbody tr').each(function(i) {
			let number = i + 1;
			$(this).find('td:First').text(number);
		});
	};
	
	$(document).on('click', '.btn-edit', function(){
		currentTr = $(this).closest('tr');
		let name = currentTr.find('td:eq(1)').text();
		let age = currentTr.find('td:eq(2)').text();
		let course = currentTr.find('td:eq(3)').text();
		let department = currentTr.find('td:eq(4)').text();
		let site = currentTr.find('td:eq(5)').text();
		let phone = currentTr.find('td:eq(6)').text();

		$('input[name="studentName"]').val(name);
		$('input[name="studentAge"]').val(age);
		$('input[name="courseOfStudy"]').val(course);
		$('input[name="department"]').val(department);
		$('input[name="studentSite"]').val(site);
		$('input[name="phone"]').val(phone);
	});

	$(document).on('click', '.btn-del', function(){
		if (confirm("Are you shure to delete?")){
			$(this).closest('tr').remove();
			dynamicIndex();
			localStorage.setItem(".students-table", tournament.html());
		};

	});

	$('.btn-update').click(function(){
		if(currentTr){
			let name = $('input[name="studentName"]').val();
			let age = $('input[name="studentAge"]').val();
			let course = $('input[name="courseOfStudy"]').val();
 			let department = $('input[name="department"]').val();
			let site = $('input[name="studentSite"]').val();
			let phone = $('input[name="phone"]').val();

 			$(currentTr).find('td:eq(1)').text(name);
			$(currentTr).find('td:eq(2)').text(age);
			$(currentTr).find('td:eq(3)').text(course);
			$(currentTr).find('td:eq(4)').text(department);
			$(currentTr).find('td:eq(5)').text(site);
			$(currentTr).find('td:eq(6)').text(phone);
			currentTr = null;   				
		};
		localStorage.setItem(".students-table", tournament.html());
	});   		
});

$('th').click(function(){
    var table = $(this).parents('table').eq(0);
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
    this.asc = !this.asc;
    if (!this.asc){
    	rows = rows.reverse()
    };
    for (var i = 0; i < rows.length; i++){
    	table.append(rows[i]);
    };
});
function comparer(index) {
    return function(a, b) {
        let valA = getCellValue(a, index); 
        let valB = getCellValue(b, index);
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB);
    }
}
function getCellValue(row, index){ 
	return $(row).children('td').eq(index).text(); 
}