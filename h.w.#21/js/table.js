let submit = document.querySelector("#submit");
submit.onclick = createTable;

function createTable(){
    let col = document.querySelector("#col").value;
    let row = document.querySelector("#row").value;
    let table = document.createElement("table");
    table.id = "myTable";
    let container = document.querySelector("#for-table");
    let readyTable = document.getElementById('myTable');

    if(readyTable) {
        container.removeChild(readyTable);
    }
    
    for (let i = 0; i < row; i++){
     let tr = document.createElement("tr");
     for (let j = 0; j < col; j++){
       let td = document.createElement("td");
       tr.appendChild(td);
     }
     table.appendChild(tr);
    }
    container.appendChild(table);

    table.onclick = function(event) {
 	 let cell = event.target;
 	 if (cell.tagName.toLowerCase() != 'td')
 	   return;
 	 let i = cell.parentNode.rowIndex + 1;
 	 let j = cell.cellIndex + 1;
 	 alert(`${i}.${j}`);
 	}
}