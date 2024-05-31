let btn = document.querySelectorAll('.num');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let op = document.querySelectorAll('.op');
let operator = document.getElementById('operator');
let button = document.getElementById('btn');
let res = document.getElementById('result');
let ac = document.getElementById('ac');


let currNum1 = ''
let currOperator = '';
let currNum2 = ''
let op1 = '';
let op2 = '';
let ope = '';

function updateCurrNum1() {
    return currNum1;
}
function updateCurrNum2() {
    return currNum2;
}
function updateCurrOperator(){
    return currOperator;
}

btn.forEach(btn =>{
        btn.addEventListener('click' , ()=>{
            if(currOperator === ''){
                currNum1 += btn.innerHTML;
                num1.innerText = currNum1;
                op1 = updateCurrNum1();
            }else{
                currNum2 += btn.innerHTML;
                num2.innerText = currNum2;
                op2 = updateCurrNum2();
            }
        })
    })

op.forEach(op =>{
    op.addEventListener('click' , ()=>{
        currOperator = op.innerText;
        operator.innerText = currOperator;
        ope = updateCurrOperator();
    })
})

button.addEventListener('click', () => {
    let a = Number(op1);
    let b = Number(op2);
    let ope = updateCurrOperator();
    if (ope === '+') {
        res.innerText = a + b;
    }else if(ope === '-'){
        res.innerText = a - b;
    }else if(ope === '*'){
        res.innerText = a * b;
    }else if(ope === '/'){
        res.innerText = a / b;
    }else{
        res.innerText = "Invalid Operator"
    }
});

ac.addEventListener('click' , () =>{
     currNum1 = ''
     currOperator = '';
     currNum2 = ''
     op1 = '';
     op2 = '';
     ope = '';
     num1.innerText = ''
     operator.innerText = ''
     num2.innerText = ''
     if((typeof res.innerText) != "Result:") res.innerText = "Result:"
})










