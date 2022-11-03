var x=20;
let y=30;
const z=40;
function method(){
    console.log("x: "+x+",y: "+y+",z: "+z);
}
if(true){
    console.log("x: "+x+",y: "+y+",z: "+z);
}
method();
console.log("x: "+x+",y: "+y+",z: "+z);

console.log("--------------local scope-----------------------");
function method2(){
    var x2=20;
    let y2=30;
    const z2=40;  
    console.log("x2: "+x2+",y2: "+y2+",z2: "+z2);
}
method2();
// console.log("x2: "+x2+",y2: "+y2+",z2: "+z2); =>>>>>>>>>>>>>>>>>>error
if(true){
    var x2=90;
    let y2=30;
    const z2=40;  
    console.log("x2: "+x2+",y2: "+y2+",z2: "+z2);
}
console.log("x2: "+x2);