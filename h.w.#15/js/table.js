let submit = document.querySelector("#submit");
submit.addEventListener('click', function(){
    createTable();
});

function createTable(){
    let col = document.getElementById("col").value;
    let row = document.getElementById("row").value;
    let tr;
    let td;
    let table = document.createElement("table");
    table.id = "myTable";
    let container = document.getElementById("for-table");
    let text;
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < row; i++){
     tr = document.createElement("tr");
     for (let j = 0; j < col; j++){
       td = document.createElement("td");
       text = document.createTextNode((i + 1) + "." + (j + 1));
       td.appendChild(text);
       tr.appendChild(td);
     }
     table.appendChild(tr);
    }
     if (container.firstChild) {
     } else return container.appendChild(table);


}


let table = document.querySelector("#myTable");

let selectedTd;



