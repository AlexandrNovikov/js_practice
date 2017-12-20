let arr1 = prompt ("Введите слова ЛАТИННИЦЕЙ, которые должны быть отсортированы в алфавитном порядке, через запятую:").split(",");
// let arr1 = ["buk", "test", "bul", "array","Open","bug","copy", "bua", "core", "Bus"]; // test data which you can use for testing in Node
let test = ['a','b','c','d','e','f', 'g', 'h', 'i','j','k','l','m','n', 'o', 'p','q','r','s','t','u','v', 'w', 'x', 'y', 'z']

let mapping = {}
let length = test.length;

for (let i =0; i < length; i++){
    mapping[test[i]] = i
}

function replaceArrItem(i,array) {
    let max = array[i + 1];
    array[i + 1] = array[i];
    array[i] = max;
}

function sorting(array) {
    let testArr = array.map(item => item.toLowerCase().replace(' ',''))
    let length = testArr.length;
    for (let m = 0; m < length - 1; m++) {
        let j = 0
        for (let i = 0; i < length - 1 - m; i++) {
            if (testArr[i][j] && testArr[i + 1][j]) {
                if (mapping[testArr[i + 1][j]] < mapping[testArr[i][j]]) {
                    replaceArrItem(i,testArr)
                } else if (mapping[testArr[i + 1][j]] == mapping[testArr[i][j]]) {
                    for (let s = 1; s < testArr[i + 1].length && testArr[i].length; s++) {
                        if (mapping[testArr[i + 1][s]] < mapping[testArr[i][s]]) {
                            replaceArrItem(i,testArr)
                        } else {}
                    }
                }
            }
        }
    }
    return testArr;
}

// console.log(sorting(arr1)) // output of result in Node
alert(sorting(arr1))