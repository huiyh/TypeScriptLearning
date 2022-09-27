console.log("2.2.7 索引类型与映射类型")
// TODO 没看懂
// function pluck(obj,names){
//     return names.map(name => obj[name])
// }

function pluck<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
    return names.map(name => obj[name]);
}
interface Person1 {
    name: string;
    age: number;
}
const person: Person1 = {
    name: 'Jarid',
    age: 35
};

pluck(person, ['name']); // ["Jarid"]
console.log("person.name: " + pluck(person, ['name']))
// pluck(person, ['profession']);
// [ts]
// Argument of type '"profession "[]' is not assignable toparameter of type '("name" | "age")[]'.
// Type '"profession "' is not assignable to type '"name" |"age"'.

console.log("--------------------")

