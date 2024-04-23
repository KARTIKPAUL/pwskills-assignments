class Car{
    #carCompany;
    #carModel;
    #carYear;

    constructor(company,model,year){
        this.#carCompany = company;
        this.#carModel = model;
        this.#carYear = year;
    }

    getDescription(){
        console.log(`This is ${this.#carYear} ${this.#carCompany} ${this.#carModel}`);
    }
   
}

const myCar = new Car("Skoda","Rapid",2022);
myCar.getDescription()