let oneStr: any = "this is a string";
let strLength1: number = (<String>oneStr).length
let strLength2: number = (oneStr as String).length

console.log("oneStr: " + oneStr);
console.log("strLength1: " + strLength1);
console.log("strLength2: " + strLength2);