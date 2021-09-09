$(document).ready(onReady);
////////////kept the code in for doing a running total of total salary///////


function onReady(){
   
    $("#addEmployeeButton").on('click', addEmployee)
   $("#table").on('click','.deleteButton', deleteEmployee);
   updateTotal()

} // end onReady
//let totalSalary = 0;
let employeeList = [];

// adding the employees
function addEmployee (){
    //store all employes into an array as objects
    let person ={
        fName:$('#fName').val(),
        lName:$('#lName').val(),
        id:$('#idNum').val(),
        jobTitle:$('#jobTitle').val(),
        salary:$('#salary').val()
    }
    //makes sure there is not an error when returning salary of empty
    if (person.salary === '' ){
        person.salary = 0;
    }
    //pushing person into employee list
    employeeList.push(person);

    /////////////////////alternative attempt///////////////
    //running total of salary
    //totalSalary += parseInt($('#salary').val(), 10);
    //////////////////////////////////////////////////////



    //appending into DOM
    let el = $('#table').find('#placePeople');
    el.empty();
    for (let i = 0; i < employeeList.length; i++) {
        
         el.append(`"<tr class = person>"
        <td>${employeeList[i].fName}</td>
        <td>${employeeList[i].lName}</td>
        <td>${employeeList[i].id}</td>
        <td>${employeeList[i].jobTitle}</td>
        <td class = "employeeSalary">${employeeList[i].salary}</td>
        <td><button class = "deleteButton">Delete</button></td></tr>`)
            
    }
    
    

    console.log('addEmployee function');
   
    
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
let tableIndex = $(this).parent().parent().index('tr');
console.log('tableIndex:',tableIndex);

employeeList.splice(tableIndex-1,1);
    

/////////////////////////alternative attempt///////////////////////////////
// //locate and delete this money // updating running total
// let deleteMoney= $(this).parent().parent().find(".employeeSalary").text();
// console.log('deleteMoney',deleteMoney);
// totalSalary -= parseInt(deleteMoney,10);
////////////////////////////////////////////////////////////////////////////

$(this).parent().parent().remove();
updateTotal()

} // end delete employee




function updateTotal (){
    let sumSalary = 0
    for (let i = 0; i < employeeList.length; i++) {
        
       sumSalary += parseInt(employeeList[i].salary,10);
    }
    let monthlyTotal = parseFloat(sumSalary / 12).toFixed(2);
    $("#monthlySalary").empty();
    $("#monthlySalary").append('Monthly Total = $'+ monthlyTotal)
    $("#totalSalary").empty();
    $("#totalSalary").append('Total Salary = $'+ sumSalary)

    if (monthlyTotal > 20000){
        $('#monthlySalary').addClass('red')
        $('#totalSalary').addClass('red')
    }
    else{
        $('#monthlySalary').removeClass('red')
        $('#totalSalary').removeClass('red')
    }
}

    
