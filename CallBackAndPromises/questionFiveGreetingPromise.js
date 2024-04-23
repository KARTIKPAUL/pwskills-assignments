function promise(){
    return new Promise(function exec(resolve,reject){
            resolve({name:"Mithun!"});
    })
}

let x = promise();
x.then(function sucess(user){
    return user.name;
})
.then(function printName(name){
    console.log("Hello, " , name);
})
.catch(function failed(value){
    console.log("This is Rejected",value);
})
.finally(function completed(){
    console.log("Finally This is Completed");
})