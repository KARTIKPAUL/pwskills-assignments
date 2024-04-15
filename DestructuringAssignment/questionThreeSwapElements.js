let arr = [2,5];
console.log(`Before Swap The Array is ${arr}`);
console.log(arr);
function swap(arr){
    arr[0] = arr[0] + arr[1];
    arr[1] = arr[0] - arr[1];
    arr[0] = arr[0] - arr[1];
}
swap(arr);
console.log(`After Swap The Array is ${arr}`);
console.log(arr);

