/*There are various types of loops in javascript
    1.for
    2.while
    3.do..while
    4. for...in
    5. for...of
*/
console.log("===============for=================");
//odd number between 1-20
console.log("ODD NUMBER FROM 0-10");
for(let i=0;i<=10;i++){
    if(i%2!==0){
        console.log(i);
    }
}
console.log("===============while=================");
//while loop:even number lodic
let j=0;
console.log("EVEN NUMBER FROM 0-10");
while(j<=10){
    if(j%2==0){
        console.log(j);
    }
    j++
}
console.log("==============do while==================");
//do..while
let k=2;
do{
    console.log(k)
}while(k>2)
console.log("===============for  in=================");
//for...in
personObject={
    name:'swati',
    age:27
}
for(let object in personObject){
    console.log(`${object}: ${personObject[object]}`)
}

console.log("==============for of=====================")
let colors=['red','blue','black','pink','white']
for(let color of colors){
    console.log(color);
}

