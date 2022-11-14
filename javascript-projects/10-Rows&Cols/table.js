
function createTable(){
    var table=document.getElementById('table');
    var row = document.getElementById('rows').value;
    var column = document.getElementById('cols').value;
    //console.log(row + "  " + column);

    for(var rowIndex = 0; rowIndex<row; rowIndex++){
        var tr = document.createElement('tr');

        for(var colIndex = 0; colIndex<column; colIndex++){
            var td = document.createElement('td');
            var text = document.createTextNode('column'+ colIndex);

            td.appendChild(text);
            tr.appendChild(td);
        };
        table.appendChild(tr);

    };
}

document.getElementById("create").addEventListener("click", createTable);
