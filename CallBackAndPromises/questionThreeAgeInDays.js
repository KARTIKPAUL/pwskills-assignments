function ageInDays(obj){
    let fullName = obj.firstName + obj.lastName;

    let birthDay = obj.age;
    let today = new Date();
    let birthDate = new Date(birthDay);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    function innerFunc(){
        console.log("The Person's Full Name is:",fullName,"And their Age in Days is:",age * 365);
    }
    innerFunc();
}

let obj = {
    firstName:"Kartik",
    lastName:"Paul",
    age: new Date('2004-07-06')
}
ageInDays(obj);


