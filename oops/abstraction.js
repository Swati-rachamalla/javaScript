console.log("------------------------------Before Abstarction----------------------------------");
function Employee(){
    this.fullName='Swati',
    this.shift='morning',
    this.salary=900000,
    this.salaryCalculation=function(increment){
        return this.salary =  this.salary + increment;
    }
    this.CTC_calculation=function(increment){
        this.salary= this.salaryCalculation(increment);
        return this.salary*12;
    }
}
console.log(Employee.toString());
console.log("----------------------------After Abstarction----------------------------------");
function Employee1(){
    this.fullName='Swati';
    this.shift='morning';
    let salary=900000;
    let salaryCalculation=function(increment){
        return salary + increment;
    };
    this.CTC_calculation=function(increment){
        salary= salaryCalculation(increment);
        return salary*12;
    }
}
const employee1 = new Employee1();
console.log(employee1.salary);//undefined
console.log(employee1.CTC_calculation(800));
console.dir(employee1, { depth: null });
console.log("===============================Getter Setter===============================================");
function employee2(){
    this.fullName='Swati';
    this.shift='morning';
    let salary=900000;
    let salaryCalculation=function(increment){
        return salary + increment;
    };
    this.CTCcalculation=function(increment){
        salary= salaryCalculation(increment);
        return salary*12;
    }
    Object.defineProperty(this,'salary',{
        get:function(){
            return salary;
        },
        set:function(value){
            salary=value;
        }
    })
}
const employeeNew= new employee2();
employeeNew.salary=100;
console.log(employeeNew.CTCcalculation(2));