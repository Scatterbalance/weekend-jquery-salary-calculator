$(document).ready(onReady);


function onReady(){
   $("#addEmployeeButton").on('click', addEmployee)
   $("#table").on('click','.deleteButton', deleteEmployee);
   updateTotal()

} // end onReady
let totalSalary = 0;


// adding the employees
function addEmployee (){
    
    

    console.log('addEmployee function');
    let el = $('table tbody');
    //not pretty but adds a row with data 
    el.append('<tr div id = "person"><td>'+ $('#fName').val()+'</td> <td> '+ $('#lName').val()+
     ' </td> <td>'+ $('#idNum').val()+'</td> <td>'+ $('#jobTitle').val()+' </td> <td class = "employeeSalary">' +
      parseInt($('#salary').val(), 10) + '</td><td><button class = "deleteButton">Delete</button></td></tr></div>')
    totalSalary += parseInt($('#salary').val(), 10);
    
    // return fields to empty
    $('#fName').val('');
    $('#lName').val('');
    $('#idNum').val('');
    $('#jobTitle').val('');
    $('#salary').val('');
    updateTotal()

}// end add employee

function deleteEmployee(){
console.log("deleteEmployee function");


//locate and delete this money
let deleteMoney= $(this).parent().parent().find(".employeeSalary").text();
console.log('deleteMoney',deleteMoney);
totalSalary -= parseInt(deleteMoney,10);


$(this).parent().parent().remove();
updateTotal()

} // end delete employee




function updateTotal (){
    let monthlyTotal = parseFloat(totalSalary / 12).toFixed(2);
    $("#monthlySalary").empty();
    $("#monthlySalary").append('Monthly Total = $'+ monthlyTotal)
    $("#totalSalary").empty();
    $("#totalSalary").append('Total Salary = $'+ totalSalary)

    if (monthlyTotal > 20000){
        $('#monthlySalary').addClass('red')
        $('#totalSalary').addClass('red')
    }
    else{
        $('#monthlySalary').removeClass('red')
        $('#totalSalary').removeClass('red')
    }
}

    
