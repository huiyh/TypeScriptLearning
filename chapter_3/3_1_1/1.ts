console.log("3.1.1 接口.定义")

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {
    size: 10,
    label: "Size 10 Object"
};

printLabel(myObj);