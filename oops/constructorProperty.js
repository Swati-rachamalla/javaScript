const person={
    Name:'Swati',
    YearOfBirth: 1994,
    calculateAge:function(year){
        let currentYear = new Date().getFullYear();
        return currentYear-year;
    }   
}
console.log(person.constructor);

console.log("=======================================");
function createCircle(radius){
    return {
        radius,
            draw:function(){
            console.log("draw");
            }
           }
}
let circle= createCircle(2);
console.log(circle.constructor);
console.log("--------------------------------------------");
function Circle(radius){
    this.radius=radius,
        this.area=function name(radius) {
            console.log("area")
        }
}
let circle2=new Circle(2);
console.log(circle2.constructor);