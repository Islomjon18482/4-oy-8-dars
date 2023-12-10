// 1-masala
function sum1(arr){
    let sum = 0;
    for (const item of arr) {
        if(item%3==0 || item%5==0){
            sum+=item
        }
    }
    return sum
}
// alert(sum1([1, 2, 3, 4, 5,]))


// 2-masala
function word(arg){
    let arr = [];
    for (const item of arg) {
        arr += item.slice(0,1);
    }
    return arr
}
// let n = ["helo", "world"]
// console.log(word(n));


// 3-masala
function single(arg){
    let arr = []
    for (const item of arg) {
        if(item%2==1){
            arr += item
        }
    }
    return arr
}
// alert(single([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// 4-masala
function singleSum(arg){
    let sum = 0;
    for (const item of arg) {
        if(item%2==1){
            sum++
        }
    }
    return sum
}
// alert(singleSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// 5-masala
function wordLenght(arg){
    const newArr = []
    for (let item of arg) {
        if(item.length > 5){
            newArr.push(item);
        }
    }
    return newArr
}
// let a = ["qwerty", "uio", "pasdfg", "hjkl", "zxcvbnm"]
// console.log(wordLenght(a))


// 6-masala
function functionCounter(arg){
    let res = 0;
    for (const item of arg) {
        let counter = 0;
        for(let i = 1; i <= item; i++){
            if(item % i == 0){
                counter++
            }
        }
        if(counter == 2){
            res++
        }
    }
    return res
}
// console.log(functionCounter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// 7-masala
function functionA(arg){
    let sum = 1;
    for (const item of arg) {
        if(item%3==0 && item%7==0){
            sum *= item
        }
    }
    return sum
}
console.log(functionA([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 42]));

