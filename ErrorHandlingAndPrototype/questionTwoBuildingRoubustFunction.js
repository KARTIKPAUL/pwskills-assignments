function getPerson(obj){
    try{
        let typeOfName = typeof obj.names;
        let typeOfAge = typeof obj.age;
        
    }catch{
       return "Invalid Parameter Type"; 
    } 
}

console.log(getPerson({names:"Mithun",age:20}));
console.log(getPerson({names:"Mithun"}));
console.log(getPerson(["names","Mithun"]));