new Promise(function (resolve, reject) {
    var a = 0
    var b = Math.random()
    if (b > 0.5) {
        console.log("reject")
        reject("Divide zero")
    }else {
        console.log("resolve")
        resolve(a / b)
    }
}).then(function (value) {
    console.log("then: a / b = " + value);
}).catch(function (err) {
    console.log("catch: " + err)
}).finally(function () {
    console.log("finally")
})
console.log("----- End -----")