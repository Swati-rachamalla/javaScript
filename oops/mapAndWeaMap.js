const person={
    name:'leena',
    age:22
}
const color=['red','blue','pink'];
const mapExample= new Map();
mapExample.set('name','this is string example');
mapExample.set(3,'this is number example');
mapExample.set(false,'this is boolean example');
mapExample.set(color,'this is colors');

console.log(mapExample)
const weakMapExample = new WeakMap();
weakMapExample.set(color,'this is colors');
console.log(weakMapExample);
console.log("--------------------------Map is also Constain unique Data--------------------------------------------");
let duplicateMap=new Map();
duplicateMap.set(3,'value 3');
duplicateMap.set(4,'value 4');
duplicateMap.set(3,'value 8');
console.log(duplicateMap);//Map(2) { 3 => 'value 8', 4 => 'value 4' }