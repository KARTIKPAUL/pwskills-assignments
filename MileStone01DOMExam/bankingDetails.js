let personAccount = {
    Name: "Amla",
    balance: 7000
}
console.log(personAccount);
function updatedAccount(amount){
    if(amount < 10000){
        let moneyNeed = 10000 - amount;
        personAccount.balance += moneyNeed;
    }
}
updatedAccount(personAccount.balance);
console.log(personAccount);