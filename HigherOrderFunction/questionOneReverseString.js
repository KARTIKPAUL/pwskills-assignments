function stringReverse(){
    let input = "asdf"
    console.log(`Input Or Original String is: ${input}`);
    console.log(`Output Or Reverse String is: ${input.split("").reverse().join("")}`);
}
setTimeout(stringReverse,2000);