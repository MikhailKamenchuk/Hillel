  function createTable(){
    var col = document.getElementById("col").value;
    var row = document.getElementById("row").value;
    console.log(col, row);
    var tr = "";
    var td = "";
    var table = document.createElement("table");
    for (let i = 0; i < row; i++){
      tr = document.createElement("tr");
      for (var j = 0; j < col; j++){
        td = document.createElement("td");
        var text = document.createTextNode((i + 1) + "." + (j + 1));
        td.appendChild(text);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    return document.getElementById("for-table").appendChild(table)
  }
