class Person{
    #name;
    #age;

    constructor(name,age){
        this.#name = name;
        this.#age = age;
    }

   getDetails(){
    let a = typeof this.#name;
    let b = typeof this.#age;
    if(a === "undefined" && b === "undefined"){
        return `person's Name is Unknown and Age is ${0}`
    }else if(a === "undefined" && b === "number"){
        return `person's Name is Unknown and Age is ${this.#age}`
    }
    else if(a === "string" && b === "undefined"){
        return `person's Name is ${this.#name} and Age is ${0}`
    }
    else{
        return `person's Name is ${this.#name} and Age is ${this.#age}`
    }
   }
}

const personOne = new Person();
console.log(personOne.getDetails());

const personTwo = new Person(undefined,20);
console.log(personTwo.getDetails())

const personThree = new Person("Sem");
console.log(personThree.getDetails())

const personFour = new Person("Tumi",20);
console.log(personFour.getDetails());



