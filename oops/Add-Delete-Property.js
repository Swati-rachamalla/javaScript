//Object
const leavesLeft='Leave Available'; 

const employee={
    fullName:'Amar Bhise',
    shift:'Morning',
    employeeId:2345,
    secretKey:908
}
//adding property
employee.salary=7000000;
employee[leavesLeft]=40;
console.dir(employee, { depth: null });

//deleting property
delete employee.secretKey;
delete employee[leavesLeft]; // delete employee.leavesLeft; this didnt worked because leavesleft not present in object
console.dir(employee, { depth: null });
