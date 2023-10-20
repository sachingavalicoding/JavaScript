let num = 10;
console.log(num);
const sum = (num, num1 = 20) => {
    return num * num1;
}
console.log(sum(num));