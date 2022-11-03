//find the main Difference
let animals =new Set(["dog","cat","rat"]);
animals["species"] = "mammals";
for(let animal in animals){
    console.log(animal);//species
}
for(let animal of animals){
    console.log(animal);//"dog","cat","rat"
}

let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}