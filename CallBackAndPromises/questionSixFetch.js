fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((responce) => {
    return responce.json();
})
.then((data) =>{
    console.log(data);
})