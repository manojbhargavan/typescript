class Department {


    constructor(public readonly name: string, public readonly id: string) { }

    printDepartmentInformation(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

}

class ITDepartment extends Department {
    constructor(id: string) {
        super("Information Technology", id);
    }
}