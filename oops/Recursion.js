//count 1 to 10

function recursion(num){
    console.log(num);
    let updatednum= num+1;
    if(updatednum<=10){
        recursion(updatednum)
    }
}
recursion(1);