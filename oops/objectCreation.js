//object liternals;
const person={
    Name:'Swati',
    YearOfBirth: 1994,
    calculateAge:function(year){
        let currentYear = new Date().getFullYear();
        return currentYear-year;
    }   
}
console.log(person.calculateAge(person.YearOfBirth));

//factory function
function createBankAccount(){
    return{
        bankNumber:2345678,
        balance:200,
        credit:function(creditedAmount){
            this.balance = this.balance+creditedAmount;
            return this.balance;
        },
        debit:function(debitedAmount){
            this.balance = this.balance-debitedAmount;
            return this.balance;
        }
    }
}
let bankAccount =createBankAccount();
bankAccount.credit(900);
console.log("balance:- "+bankAccount.balance);
bankAccount.debit(300);
console.log("balance:- "+bankAccount.balance);


//construction function
function Rectangle(length,breath){
    this.length=length,
    this.breath=breath,
    this.area=function(){
        return 2*(this.length+this.breath);
    }
}

let rect = new Rectangle(2,3);
console.log(rect.area());
