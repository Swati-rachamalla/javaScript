let crust='Crust';
const earth= ()=>{
    let mantle='Mantle';
    return message=()=>{
        let core = 'Core';
        console.log(`The Earth is made up of ${crust}, the ${mantle},the ${core}` );
    }
}
let inner = earth();
inner();