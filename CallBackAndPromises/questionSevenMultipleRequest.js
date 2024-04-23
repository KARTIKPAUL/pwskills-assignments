async function getAllData(){
    try {
        let responce1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        let res1 = await responce1.json();

        let responce2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        let res2 = await responce2.json();
        
        function result(res1 , res2){
            return {
                todo: res1,
                post: res2
            }
        }
        console.log(result(res1,res2));
    }

    catch (error) {
       console.log(error); 
    }
}

getAllData();