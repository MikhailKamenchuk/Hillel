$(function(){
		$(".add-student").click (function() {
    	let studentName = $('#name').val();
		let studentAge = $('#age').val();
		let courseOfStudy = $('#course').val();
		let departnemtOfStudy = $('#department').val();
		let studentSite = $('#site').val();
		let studentPhone = $('#phone').val();
		let studentIcon = Math.random()*10+1|0;
		let tr = '<tr> <td></td> <td><img src="images/avatars/'+ studentIcon +'.gif" class="student-icon" alt="avatar"></td>  <td>'+ studentName +'</td>  <td>'+ studentAge +'</td>  <td>'+ courseOfStudy +'</td>  <td>'+ departnemtOfStudy +'</td>  <td><a href="'+ studentSite +'" > Link </a></td>  <td>'+ studentPhone +'</td><td class="btn-edit"> Edit </td><td class="btn-del"> Del </td></tr>';

   		$('tbody').prepend(tr);

   		$('#students-form')[0].reset(); 

   		dynamicIndex();
             
        localStorage.setItem(".students-table", dbOfStudents.html());

   		event.preventDefault();
	});

	let dbOfStudents = $('tbody');        

    if(localStorage.getItem(".students-table")) {
        dbOfStudents.html(localStorage.getItem(".students-table"));
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
	}
	
	$(document).on('click', '.btn-edit', function(){
		currentTr = $(this).closest('tr');

		let name = currentTr.find('td:eq(2)').text();
		let age = currentTr.find('td:eq(3)').text();
		let course = currentTr.find('td:eq(4)').text();
		let department = currentTr.find('td:eq(5)').text();
		let site = currentTr.find('td:eq(6)').text();
		let phone = currentTr.find('td:eq(7)').text();

		$('input[name="studentName"]').val(name);
		$('input[name="studentAge"]').val(age);
		$('input[name="courseOfStudy"]').val(course);
		$('input[name="department"]').val(department);
		$('input[name="studentSite"]').val(site);
		$('input[name="phone"]').val(phone);

		$('.btn-update, .btn-back').css('display', 'inline-block')
	});

	$(document).on('click', '.btn-del', function(){
		if (confirm("Are you shure to delete?")){
			$(this).closest('tr').remove();
			dynamicIndex();
			localStorage.setItem(".students-table", dbOfStudents.html());
		}
	});

	$('.btn-update').click(function(){
		if(currentTr){
			let name = $('input[name="studentName"]').val();
			let age = $('input[name="studentAge"]').val();
			let course = $('input[name="courseOfStudy"]').val();
 			let department = $('input[name="department"]').val();
			let site = $('input[name="studentSite"]').val();
			let phone = $('input[name="phone"]').val();

 			$(currentTr).find('td:eq(2)').text(name);
			$(currentTr).find('td:eq(3)').text(age);
			$(currentTr).find('td:eq(4)').text(course);
			$(currentTr).find('td:eq(5)').text(department);
			$(currentTr).find('td:eq(6)').text(site);
			$(currentTr).find('td:eq(7)').text(phone);
			currentTr = null;   				
		}
		localStorage.setItem(".students-table", dbOfStudents.html());
		dynamicIndex();
		$('#students-form')[0].reset();
		$('.btn-update, .btn-back').css('display', '')

	});

	$('.btn-back').click(function(){
		$('#students-form')[0].reset();
		$('.btn-update, .btn-back').css('display', '')
	});   		
});

$('th').click(function(){
    let table = $(this).parents('table').eq(0);
    let rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
    this.asc = !this.asc;
    if (!this.asc){
    	rows = rows.reverse()
    }
    for (let i = 0; i < rows.length; i++){
    	table.append(rows[i]);
    }
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

$('#students-form').find('#site').blur(function(){
	let url = $('input[name="studentSite"]').val();
	let pattern = /(https?:\/\/)?(www\.)?[-a-zа-яё0-9@:%._\+~#=]{2,256}\.[a-zа-яё]{1,4}(?::[0-9]+)?(\/?[-a-zа-яё0-9@:%_\+~#]+(\.[a-zа-яё0-9]+)?)+(\?[-а-яёa-z0-9@:%._\+~#]+(=[-a-zа-яё0-9@:%._\+~#]+)?((\&[-a-zа-яё0-9@:%._\+~#]+(=[-a-zа-яё0-9@:%._\+~#]+)?)+)?)?/i;    
	if (pattern.test(url)) {
        $('input[name="studentSite"]').removeClass("error");
        return true;
    } 
        $('input[name="studentSite"]').addClass("error");
        return false;
});



/* ---------------------------- begin view ----------------------------- */
let view = {

};
/* ----------------------------- end view ------------------------------ */



/* ---------------------------- begin model ---------------------------- */
let model = {

};
/* ----------------------------- end model ----------------------------- */



/* -------------------------- begin controller ------------------------- */
let controller = {

};
/* --------------------------- end controller -------------------------- */



/* --------------------- anonymous initialize function ----------------- */

/* --------------------- anonymous initialize function ----------------- */