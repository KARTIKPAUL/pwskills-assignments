let arr = [1,2,6,7,0,5];

let min = arr[0];
let max = arr[0];

function minAndMax(arr){
    [...arr].map(element =>{
        if(element < min) min = element;
        else if(element >= max) max = element;
    })
}

minAndMax(arr);
console.log(`Minimum element is: ${min}`);
console.log(`Maximum element is: ${max}`);
