function getBooks(list){
    let map = new Map();
    list.map((element) =>{
        map.set(element.title , element.author);
    })

    function innerFunc(map){
        let ans = new Array();
        for(let [key,value] of map){
            ans.push(key);
        }
        ans.sort();
        return ans;
    }
    console.log(innerFunc(map));
}

let list = [
    {
        title: "Paul",
        author: "Kartik",
        year: 2004
    },
    {
        title: "Das",
        author: "Kamalesh",
        year: 2007
    },
    {
        title: "Barman",
        author: "Bankim",
        year: 2003
    },
    {
        title: "Roy",
        author: "Manoranjan",
        year: 1990
    }
]

getBooks(list);
