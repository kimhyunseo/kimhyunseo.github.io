// // 1부터 10까지 숫자를 for문을 사용해서 한 줄씩 출력해 보세요.
// for(let i=0 ; i<11 ; i++){
//     console.log(i);
// }

// //1부터 100까지 중에서 짝수만 출력하세요.
// for(let i=0 ; i<=100 ; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }
2
// //1부터 100까지의 합을 구해서 출력해 보세요.
// let sum = 0;
// for (let i=1 ; i<=100 ; i++){
//     sum = sum + i;
// }
// console.log(sum);

// //배열의 모든 요소를 for문을 사용해서 출력해 보세요.
// //let fruits = ['apple', 'banana', 'cherry'];
// let fruits = ['apple', 'banana', 'cherry'];
// for(let i=0 ; i<fruits.length ; i++){
//     console.log(fruits[i]);
// }

// // 다음 배열에서 짝수만 출력해 보세요.
// //let numbers = [1, 4, 7, 10, 13, 16];
// let numbers = [1, 4, 7, 10, 13, 16];
// for (let i=0 ; i<numbers.length ; i++){
//     if(numbers[i]%2 == 0){
//         console.log(numbers[i]);
//     }
// }

// //구구단 2단을 출력해 보세요.
// for(let i=1 ; i<=9 ; i++){
//     console.log(`2 x ${i} = ${i*2}`)
// }

// //별 찍기 문제! 아래와 같이 별을 출력해 보세요.
// /**
// *  
// **  
// ***  
// ****  
// *****
//  */
// for(let i=1 ; i<=5 ; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write('*');
//     }
//     console.log();
// }

// /**
//  * 1부터 100까지의 숫자 중 3의 배수는 "Fizz", 5의 배수는 "Buzz",
// 그리고 3과 5의 배수는 "FizzBuzz"라고 출력하는 코드를 작성해 보세요.
//  */

// for(let i=1 ; i<=100 ; i++){
//     if(i%3 == 0 && i%5 == 0){
//         console.log("FizzBuzz");
//     } else if(i%3 == 0){
//         console.log("Fizz");
//     } else if(i%5 == 0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// // 구구단을 출력하되, 1단부터 9단까지 모두 출력하는 코드를 작성하세요.
// for(let i=2 ; i<10 ; i++){
//     for (let j = 1; j <= 9; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// /**
//  * 1부터 100까지의 숫자 중에서, 7의 배수이거나 11의 배수인 숫자만 출력하는 코드를 작성하세요.

// 7의 배수이거나 11의 배수일 때 해당 숫자를 출력해 주세요.
// 출력은 한 줄씩 해 주세요.
//  */

// for(let i=1 ; i<=100 ; i++){
//     if(i%7 == 0 || i%11 == 0){
//         console.log(i)
//     }
// }

// //문자 배열이 주어졌을 때, 모든 문자를 대문자로 바꿔서 출력하는 코드를 작성하세요.

// let letters = ['a', 'b', 'c', 'd', 'e'];
// for(let i=0 ; i<letters.length ; i++){
//     console.log(letters[i].toUpperCase());
// } 

// //아래 숫자 배열에서 짝수만 골라서 새로운 배열에 담고, 그 결과를 출력하세요.
// let nums = [3, 6, 1, 8, 4, 7, 10];
// let evenNums = [];
// for(let i = 0 ; i<nums.length ; i++){
//     if(nums[i]%2 === 0){
//         evenNums.push(nums[i]);
//     }
// }
// console.log(evenNums);

// // 문자열 배열이 주어졌을 때, 그중 글자 수가 5글자 이상인 문자열만 출력하세요.
// let words = ['apple', 'dog', 'banana', 'cat', 'grape', 'kiwi'];
// for(let i = 0; i<words.length ; i++){
//     if(words[i].length >= 5){
//         console.log(words[i]);
//     }
// }

// //배열 안의 숫자들이 주어졌을 때, 그 숫자들의 합을 구하는 코드를 작성하세요.
// let numbers = [5, 8, 3, 1, 9, 4];
// let sum = 0;
// for (let i=0 ; i<numbers.length ; i++){
//     sum += numbers[i]
// }
// console.log(sum);

// // 주어진 숫자 배열에서, 그 숫자들이 모두 짝수인지 확인하는 코드를 작성하세요.
// let numbers = [4, 8, 12, 6, 10];
// allEven = true
// for(let i=0 ; i<numbers.length ; i++){
//     if(numbers[i]%2 !== 0){
//         allEven = false
//         console.log("not all even!")
//         break;
//     }
// }
// if(allEven){
//     console.log("all even!")
// }

// //배열에서 가장 큰 숫자를 찾아 출력하세요.

// let numbers = [12, 25, 9, 31, 5, 18];
// let max = numbers[0]
// for(let i=0 ; i<numbers.length ; i++){
//     if(max < numbers[i]){
//         max = numbers[i];
//     }
// }
// console.log(max);

// //배열에서 짝수와 홀수를 구분하여 각각 다른 배열에 저장하세요.
// let numbers = [12, 25, 9, 31, 5, 18, 4];
// let evenNumbers = [];
// let oddNumbers = [];
// for(let i=0; i<numbers.length ; i++){
//     if(numbers[i]%2 == 0){
//         evenNumbers.push(numbers[i]);
//     } else {
//         oddNumbers.push(numbers[i]);
//     }
// }
// console.log(`짝수 배열: ${evenNumbers}`);
// console.log(`홀수 배열: ${oddNumbers}`);

// //배열에서 중복된 값을 제거하여 새로운 배열로 출력하세요.
// let numbers = [3, 5, 7, 3, 9, 5, 2, 7, 10];
// let uniqueNumbers = [...new Set(numbers)];  
// console.log(uniqueNumbers);

// //배열을 오름차순으로 정렬하세요.
// let numbers = [12, 5, 8, 130, 44];
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length - i - 1; j++){
//         if (numbers[j] > numbers[j + 1]){
//             let temp = numbers[j];
//             numbers[j] = numbers[j + 1];
//             numbers[j + 1] = temp;
//         }
//     }
// }
// console.log(numbers);