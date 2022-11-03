let num=['2','3'];
const setExample= new Set();
setExample.add(num);
setExample.add('apple');
console.log(setExample.values());
console.log(setExample);

const weaksetExample = new WeakSet();
weaksetExample.add(num);
weaksetExample.add(setExample);
console.log(weaksetExample.has('num'));
console.log("---------------------------------------------------------------------");

const animal= new Set();
animal.add('tiger');
animal.add('lion');
animal. add('rabbit');

animal.forEach(element => {
    console.log(element);
});

console.log("---------------------------unique Set------------------------------------------");
let duplicateSet=new Set();
duplicateSet.add(2);
duplicateSet.add(4);
duplicateSet.add(2);
duplicateSet.add(7);
duplicateSet.add(4);
console.log(duplicateSet);