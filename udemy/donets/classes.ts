class Department {

    constructor(public readonly name: string, public id: string) { }

    protected static employeeList: string[] = [];

    printDepartmentInformation(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    static addEmployee(employeeName: string) {
        this.employeeList.push(employeeName);
    }

    get departmentName() {
        return this.name;
    }

    set departmentId(value: string) {
        this.id = value;
    }

}

class ITDepartment extends Department {
    constructor(id: string) {
        super("Information Technology", id);
    }
}

ITDepartment.addEmployee("Manoj");