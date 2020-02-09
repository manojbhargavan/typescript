interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user = {
    name: "Manoj",
    age: 34,
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
}

class Employee implements Person {

    constructor(public name: string, public age: number) {
    }

    public greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
}

let e: Employee = new Employee("Manoj Bhargavan", 34);
e.greet("Hello");