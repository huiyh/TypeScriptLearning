console.log("3.2.4 存取器")

class Employee {
    private _fullName: string = "_";
    get fullName(): string{
        return this._fullName;
    }

    set fullName(name:string){
        this._fullName = name;
    }
}

let employee = new Employee();
employee.fullName = "Bob"
if (employee.fullName){
    // alert(employee.fullName)
}
console.log(employee.fullName)
