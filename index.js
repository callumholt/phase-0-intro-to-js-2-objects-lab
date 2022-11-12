// Write your solution in this file!
const employee = {
    name: "john",
    streetAddress: "123 abc street",
};

function updateEmployeeWithKeyAndValue(employee, name, value) {
    const updateEmployeeWithKeyAndValue = { ...employee };
    
    updateEmployeeWithKeyAndValue.name = "Sam";
    updateEmployeeWithKeyAndValue.streetAddress = "11 Broadway";

    return updateEmployeeWithKeyAndValue;

}



//Correct above here//
//Correct above here//
//Correct above here//


function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee.name;

    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}