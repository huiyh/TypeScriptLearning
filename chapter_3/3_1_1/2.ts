console.log("3.1.1 接口.定义 2")

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let obj = {size: 10, label: "Size 10 Object"};

printLabel(obj);