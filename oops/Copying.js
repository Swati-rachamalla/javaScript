//Prmitive Type
console.log("=============================Primitive Type=======================================");
let x=20;
let y=x;
x=30;
console.log(x);
console.log(y);
function increment(x){
    return x++
}
increment(x);
console.log("increment value "+x);
console.log("==============================Reference Type======================================");
let x1={value:30};
let y1=x1;
x1.value=50;
console.log(x1.value);
console.log(y1.value);
function increment1(x1){
    return x1.value++;
}
increment1(x1);
console.log("increment value "+y1.value)