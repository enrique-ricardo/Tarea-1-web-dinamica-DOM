
function generatesNewRow(){

const table = document.querySelector('#table01');
const row = document.createElement('tr');

row.innerHTML = '<td>1</td><td>2</td><td>3</td><td>4</td>';
table.appendChild(row);

}

document.querySelector('#buttonAddRow').addEventListener('click', generatesNewRow);