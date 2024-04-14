let books = [
    {
        authorName:"Ranit",
        publishedYear: 2010
    },
    {
        authorName:"Rahul",
        publishedYear: 2016
    },
    {
        authorName:"Bubai",
        publishedYear: 2000
    },
    {
        authorName:"Nabin",
        publishedYear: 2010
    },
    {
        authorName:"Mahesh",
        publishedYear: 2017
    },
]

    

    let ans = new Array();
    books.map((element) =>{
       if(element.publishedYear > 2010){
        element.authorName = element.authorName.toUpperCase();
        ans.push(element);
       }
    })
    console.log(ans);
    