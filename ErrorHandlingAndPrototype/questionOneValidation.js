function isNumber(number){
    let n = Number(number);
    if(isNaN(n)) console.log("Invalid Number");
    else if(typeof n === "number") console.log(n);
    else console.log("Invalid Number");
}
isNumber("123");
isNumber("abc");






