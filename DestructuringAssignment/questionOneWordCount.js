let str = "This is a paragraph where I write nothing and this write for my learning puspose only and this is very special for me";
let words = str.split(" ");

let ans = new Map();

words.map((element) =>{
    if(isNaN(ans.get(element))){
        ans.set(element,1)
    }
    else ans.set(element,ans.get(element)+1);
    
})

console.log(ans);