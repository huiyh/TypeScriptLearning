console.log("2.3.3 回调函数和promise")

const fs = require('fs');
function loadJSONSync(filePath: string) {
    return JSON.parse(fs.readFileSync(filePath));
}
console.log(loadJSONSync('test.json'));

function loadJSON(
    filePath: string,
    callback: (error: Error, data?: any) => void
) {
    fs.readFile(filePath, function(error: Error, data?: any) {
        if (error) {
            callback(error);
        } else {
            callback(null, JSON.parse(data));
        }
    });
}

function loadJSON2(
    filePath: string,
    callback: (error: Error, data?: any) => void
) {
    fs.readFile(filePath, function(error: Error, data?: any) {
        if (error) {
            callback(error);
        } else {
            try {
                callback(null, JSON.parse(data));
            } catch (error) {
                callback(error);
            }
        }
    });
}

function loadJSON3(
    filePath: string,
    callback: (error: Error, data?: any) => void
) {
    fs.readFile(filePath,
        function (error: Error, data?: any) {
            if (error) {
                callback(error);
            } else {
                let result;
                try {
                    result = JSON.parse(data);
                } catch (error) {
                    callback(error);
                }
                callback(null, result)
            }
        });
}

console.log("--------------------")

const promise0 = new Promise((resolve, reject) => {});

const promise1 = new Promise((resolve, reject) => {
    resolve(2333);
});
promise1.then((res) => {
    console.log(res); // 2333
});
promise1.catch((err) => {
    // 没有reject不被调用
});
const promise2 = new Promise((resolve, reject) => {
    reject(new Error("something incorrect"));
});
promise2.then((res) => {
    // 没有 resolve 不被调用
});
promise2.catch((err) => {
    console.log(err); // "something incorrect"
});

console.log("--------------------")

Promise.resolve(2333)
    .then((res) => {
        console.log(res); // 2333
        return 23333333333;
    })
    .then((res) => {
        console.log(res); // 23333333333
        return Promise.resolve(2333333333333333333333);
    })
    .then((res) => {
        console.log(res); // 2333333333333333333333
        return
        Promise.resolve(23333333333333333333333333333333333333333333);
    });

console.log("--------------------")

Promise.reject(new Error('something incorrect'))
    .then((res) => {
        console.log(res); // 不会被调用
        return 2333;
    })
    .then((res) => {
        console.log(res); // 不会被调用
        return Promise.resolve(23333333333);
    })
    .then((res) => {
        console.log(res); // 不会被调用
        return
        Promise.resolve(23333333333333333333333333333333333333333333);
    })
    .catch((err) => {
        console.log(err.message); // something incorrect
    });

console.log("--------------------")

Promise.resolve(2333)
    .then(res => {
        // (parameter) res: number
        return true;
    })
    .then(res => {
        // (parameter) res: boolean
    });