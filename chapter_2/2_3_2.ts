console.log("2.3.2 参数")

function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
// let name1 = buildName("Barack");
// [ts] Expected 2 arguments, but got 1.
// let name2 = buildName("Barack", "Obama", "Sr.");
// [ts] Expected 2 arguments, but got 3.
let name3 = buildName("Barack", "Obama");

console.log("--------------------")

function buildName2(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
let name4 = buildName2("Barack");
let name6 = buildName2("Barack", "Obama");
// let name5 = buildName2("Barack", "Obama", "Sr.");
// [ts] Expected 2 arguments, but got 3.

console.log("--------------------")

function buildName3(firstName: string, lastName = "Obama") {
    return firstName + " " + lastName;
}
let name7 = buildName3("Barack");
// "Barack Obama"
let name9 = buildName3("Barack", "Trump");
// "Barack Trump"
// let name8 = buildName3("Barack", "Obama", "Sr.");
// [ts] Expected 2 arguments, but got 3.

console.log("--------------------")

function buildName4(firstName = "Barack", lastName: string) {
    return firstName + " " + lastName;
}
// let name11 = buildName4("Barack");
// [ts] Expected 2 arguments, but got 1.

let name12 = buildName4(undefined, "Obama");
// "Barack Obama"

let name13 = buildName4("Donald", "Trump");
// "Donald Trump"

console.log("--------------------")

function buildName5(firstName: string, ...names: string[]) {
    return firstName + " " + names.join(" ");
}
buildName5("Barack", "Hussein", "Obama", "II");

let buildNameFun: (firstName: string, ...names: string[]) => string;

