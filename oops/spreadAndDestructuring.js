//Spread operator
/** origina value not changed */
let value = [1,2,3,4,5];
let value1 = [...value,5,6,7,8];
value.pop();
console.log(value);
console.log(value1);
/** passing spread operator as function parameter */
const movieDetail=['jumanji','1995'];

function movie(name,year){
    console.log(`${name} was released on ${year}`);
}
movie(...movieDetail);
/** copying object using spread operator */
const user={
    name:'steve',
    age:27,
    occupation:{
        field:'mining engineer'
    }
}

const updatedUser={
    ...user,
    occupation:{
        ...user.occupation,
        designator:'overman'
    }
}
console.log(user);
console.log(updatedUser);

const person={
    age:67,
    gender:'female',
    age:35
}
console.log(person);// latest value will be considered.

//Destructure operator

let array = [2,3,5];
let [x,y]=array;
console.log(x);
console.log(y);

const game={
    title:'Donkey Kong Country',
    platform:'SNES',
    year:2000
}
let {title,platform,year:release}=game;
console.log(title);
console.log(release);