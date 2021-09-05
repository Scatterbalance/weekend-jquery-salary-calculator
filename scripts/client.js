$(document).ready(onReady);


function onReady(){
   $("#addEmployeeButton").on('click', addEmployee)
   $("#table").on('click','.deleteButton', deleteEmployee);
    
} // end onReady
let totalSalary = 0;
function addEmployee (){
    console.log('addEmployee function');
    let el = $('table tbody')
    el.append('<tr div class = "person"> <td>'+ $('#fName').val()+' </td> <td> '+ $('#lName').val()+ ' </td> <td>'+ $('#idNum').val()+'</td> <td>'+ $('#jobTitle').val()+' </td> <td>' + parseInt($('#salary').val(), 10) + '</td><td><button class = "deleteButton">Delete</button></td></tr></div>')
    totalSalary += parseInt($('#salary').val(), 10);
}// end add employee

function deleteEmployee(){
console.log("deleteEmployee function");

$(this).parent().parent().remove();
}