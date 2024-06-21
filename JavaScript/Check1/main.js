let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven(number) {
    if (number % 2 === 0) {
        console.log(number + 'は偶数です');
    }
}
// 配列の各要素に対して isEven 関数を呼び出す
for (let i = 0; i < numbers.length; i++) {
    isEven(numbers[i]);
}