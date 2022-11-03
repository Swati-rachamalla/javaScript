//if....else
var personAge=18;
if(personAge>=18){
    console.log("person is major")
}else{
    console.log("person is minor")
}

//switch case

let day=new Date();
console.log(day.getDay())
switch(day.getDay()){
    case 11:console.log("Monday");
            break;
    case 2:console.log("Tuesday");
            break;
    case 3:console.log("wednesday");
            break;
    case 4:console.log("Thursday");
            break;
    default:
        console.log("day not present");
}