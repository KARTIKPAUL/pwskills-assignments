function manipulateString(s){
    let ans;
    function innerFunc(s){
        ans = s.toUpperCase();
    }
    innerFunc(s);
    console.log("The Manupulated String is: ",ans);
}

manipulateString("Hello, World");