function outerFunc(arr){ 
    let ans = new Array();
    function innerFunc(arr){
        arr.map((element)=>{
            ans.push(2*element);
        })
    }
    innerFunc(arr);
    return ans;
}

let arr = [1,2,3,4,5];
console.log(outerFunc(arr));
