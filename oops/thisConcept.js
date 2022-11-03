const book ={
    title:'bookName',
    author:'authorOfBook',
    info(){
        console.log(`${this.title} => ${this.author}`);
    }
}
book.info();

const user={
    name:'mike',
    age:'26',
    carrer:{
        employee:'google',
        title:'project Manager',
        info(){
            console.log(`${this.name} is a ${this.title}` );
            console.log(this);
            console.log(`${user.name} is a ${this.title}` );
        }
    }
}
user.carrer.info();