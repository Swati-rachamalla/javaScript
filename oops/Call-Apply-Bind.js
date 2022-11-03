//funtion Reusability

function getEmail(){
    return this.emailId=`${this.firstName}.${this.lastName}@getEmail.com`;
}
let employee={
    firstName:"Swati",
    lastName:"Kommu"
}
let manager={
    firstName:"Leena",
    lastName:"kulkarni"
}
let director={
    firstName:"Uday",
    lastName:"Shete"
}
console.log(getEmail.call(employee));
console.log(getEmail.apply(manager));
let directorEmail = getEmail.bind(director);
console.log(directorEmail());
console.log("employee emailId "+employee.emailId)
console.log("====================if parameter needed to pass====================================");

function chooseTraining(course1,course2){
    return this.courses = [course1,course2];
}
console.log(chooseTraining.call(employee,"javaScript","Angular"));
console.log(chooseTraining.apply(manager,["javaScript","Angular"]));
let trainingForDirector = chooseTraining.bind(director,"javaScript","Angular")
console.log(trainingForDirector());
console.log("employee courses "+employee.courses)
