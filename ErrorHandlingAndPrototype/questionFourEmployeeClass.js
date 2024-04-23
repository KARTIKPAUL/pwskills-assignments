class Employee{
    #employeeName;
    #employeePosition;
    #employeeSalary;

    constructor(name,position,salary){
        this.#employeeName = name;
        this.#employeePosition = position;
        this.#employeeSalary = salary;
    }

    getSalary(){
        return this.#employeeSalary;
    }
}

const employee = new Employee("Ami","SDE",100000);
console.log("Salary Of The Employee is : ",employee.getSalary());