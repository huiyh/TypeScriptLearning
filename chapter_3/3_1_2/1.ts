console.log("3.1.2 函数类型")

interface SearchFunc {
    (source: string, substring: string):boolean;
}

let mySearch : SearchFunc = function(source: string, substring: string){
    let result = source.search(substring);
    return result > -1;
}

let mySearch1 : SearchFunc = function(source, substring){
    let result = source.search(substring);
    return result > -1;
}