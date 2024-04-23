class Student{
    #name;
    constructor(name){
        this.#name = name;
    }
    printDetails(){
        console.log("Hello The Student Name is:", this.#name);
    }
}

const student = new Student("Mithun");
student.printDetails();