//Arrow Function

const normalFunction= function(){
    console.log("normal function");
}

const arrowFunction=()=>"arrow function";/// arrow function uses implicit return 

normalFunction();
console.log(arrowFunction());

console.log("-----------------------------------------------------------")

const user=(name)=>`my Name is ${name}. `;
console.log(user('Swati'));

const greeting=()=>'Hello, How are you ?'
console.log(greeting());

let book={
    title:'The Fellowship of the Ring',
    related:['The Two Tower','The Return of King'],
    showRelated :function(){
        this.related.forEach(relatedBooks=>{
            console.log(`This is Title of Book ${this.title}.`);
            console.log(`related books ${relatedBooks}`)
        });
    }
}

book.showRelated();