let product = [
    {
        productName: "MacBook",
        productPrice: 700
    },
    {
        productName: "iPhone",
        productPrice: 200
    },
    {
        productName: "iPad",
        productPrice: 300
    },
    {
        productName: "airPods",
        productPrice: 100
    }
]
    
    product.map((element) => {
        console.log(element.productPrice * 80);
    })

   