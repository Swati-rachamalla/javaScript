//Reference Type : object 
let person ={
    firstName: 'Swati',
    lastName:'Kommu',
    age: 26,
}
person.firstName='Venky';
person['age']=27;
let developer = true;
person.developer = false;
console.log(person);
console.log(person.firstName);
console.log(typeof person)

//Reference Type:ARRAY
let courses=['Java','JavaScript','MYSQL'];
courses[3]='2'
console.log(courses);
console.log(typeof courses);

//Reference Type:Function
function addcourse(){
    console.log("adding  courses");
}
addcourse();
console.log(typeof addcourse)