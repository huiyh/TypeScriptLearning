console.log("2.2.8 类型推导")

interface Person {
    name: string;
}

let person: Person;

const alice = { name: 'Alice', age: 22 };
person = alice;

console.log(person)

function greetTo(person: Person) {
    console.log('Hello, ' + person.name);
}
greetTo(alice); // OK

console.log("--------------------")

let fun1 = (a: number) => 0;
let fun2 = (b: number, s: string) => 0;
let fun3 = (b: number, s: string) => "0";
fun2 = fun1;
// fun1 = fun2;
// [ts] Type '(b: number, s: string) => number' is not assignable to type '(a: number) // => number'.
// fun2 = fun3;
console.log("--------------------")

let fun4 = (a: number) => ({ a, b: 'hello' });
type Fun1ReturnType = ReturnType<typeof fun4>
// type Fun1ReturnType = {
// a: number;
// b: string;
// }