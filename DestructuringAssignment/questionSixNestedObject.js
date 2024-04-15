const person = {
    name: "Mithun",
    age: 21,
    adress:{
        street: "B8, Block B , Industrial Area",
        city: "sector 62, Noida",
        state: "Uttar Pradesh"
    },
};

function nameAndStreet(obj){
    let{name} = obj;
    let {adress:{street}} = obj;
    let ansObj = {
        name: name,
        street : street
    }
    return ansObj;
}
console.log(nameAndStreet(person));


