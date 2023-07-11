// // // //Створи функцію, яка буде виводити кількість переданих їй аргументів.

function number_of_arguments_passed_to_it(){
  let isfunctionworking=true;
  let i=0;
  while(isfunctionworking){
    let argument=prompt("Ваш аргумент");
    isfunctionworking=confirm("Продовжувати далі?");
    i++
  }
  alert("кінець функції");
  return i;
}

// console.log(number_of_arguments_passed_to_it())
// // // // //Напиши функцію, яка приймає 2 числа і повертає :
// // // // -1, якщо перше число менше, ніж друге; 
// // // // 1 - якщо перше число більше, ніж друге; 
// // // // 0 - якщо числа рівні.

let first_number=+prompt("Ведіть перше число");
let second_number=+prompt("Ведіть друге число");
console.log(equality_and_unequal(first_number,second_number))
function equality_and_unequal(first_number,second_number){

  if(first_number>second_number){
    alert("кінець функції");
    return 1;
  }else 
  if(second_number>first_number){
    alert("кінець функції");
    return -1;
  }else{
    alert("кінець функції");
    return 0;
  }
}
// //Напиши функцію, яка обчислює факторіал переданого їй числа.
first_number=+prompt("Ведіть число факторіал якого бажаєте побачити ");
console.log(`факторіал ${first_number} дорівнює ${factorial(first_number)}`)
function factorial(first_number){
  if (first_number => 0 && isNaN(first_number) && first_number <= 18){
    let factorial_of_number=1;
    for(let i=1 ; i<=first_number; i++){
      console.log(factorial_of_number)
      factorial_of_number=factorial_of_number*i;
    }
    alert("кінець функції");
    return factorial_of_number;
  }
}
first_number=prompt("Ведіть перше число число")
second_number=prompt("Ведіть друге число")
let third_number=prompt("Ведіть третя число")
console.log(combineDigits(first_number,second_number,third_number))
function combineDigits(first_number, second_number, third_number) {
  let combinedNumber = +(first_number+second_number+third_number);
  alert("кінець функції");
  return combinedNumber;
}

first_number=+prompt("введіть довжину")
second_number=+prompt("введіть ширину,або натисніть відміна,якщо бажаєте порахувати площу квадрата")
console.log(calculateArea(first_number,second_number))
function calculateArea(first_number, second_number) {
  let area=0;
  if (second_number === isNaN|| second_number==0) {
    // Якщо другий параметр не вказаний, обчислюємо площу квадрата
     area = first_number * first_number;
  } else {
    // Якщо обидва параметри вказані, обчислюємо площу прямокутника
     area = first_number * second_number;
  }
  alert("кінець функції");
  return area;
}


function isPerfectNumber(number) {
  let sum = 0;
  
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  
  return sum === number;
}

// Функція, яка виводить досконалі числа в заданому діапазоні
function printPerfectNumbersInRange(min, max) {5
  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      console.log(i5);
    }
  }
}

let user_input_for_isPerfectNumber=+prompt("Чи э число досконалим");
let isPerfect=isPerfectNumber(user_input_for_isPerfectNumber);
if (isPerfect) {
  console.log(user_input_for_isPerfectNumber + ' є досконалим числом.');
} else {
  console.log(user_input_for_isPerfectNumber + ' не є досконалим числом.');
}
let user_perfectnumber_range_min=+prompt("Введіть мінімум діапозона пошуку ідеального числа ")
let user_perfectnumber_range_max=+prompt("Введіть максимум діапозона пошуку ідеального числа ")

console.log("Досконалі числа в діапазоні від", user_perfectnumber_range_min, "до", user_perfectnumber_range_max, ":");
printPerfectNumbersInRange(user_perfectnumber_range_min, user_perfectnumber_range_max);