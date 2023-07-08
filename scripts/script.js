// Запитай у користувача його вік
let user_age_input = prompt("Введіть свій вік:");

// Визначення категорії віку
let user_category;
if (user_age_input >= 0 && user_age_input <= 11) {
  user_category = "дитина";
} else if (user_age_input >= 12 && user_age_input <= 17) {
  user_category = "підліток";
} else if (user_age_input >= 18 && user_age_input <= 59) {
  user_category = "дорослий";
} else if (user_age_input >= 60) {
  user_category = "пенсіонер";
} else {
  user_category = "невірні дані";
}

// Виведення категорії
console.log("Ви є " + user_category);

// Запитай у користувача число від 0 до 9
let number_special_input = prompt("Введіть число від 0 до 9:");

// Визначення спецсимволу
let special_symbol;
switch (number_special_input) {
  case "0":
    special_symbol = ")";
    break;
  case "1":
    special_symbol = "!";
    break;
  case "2":
    special_symbol = "@";
    break;
  case "3":
    special_symbol = "#";
    break;
  case "4":
    special_symbol = "$";
    break;
  case "5":
    special_symbol = "%";
    break;
  case "6":
    special_symbol = "^";
    break;
  case "7":
    special_symbol = "&";
    break;
  case "8":
    special_symbol = "*";
    break;
  case "9":
    special_symbol = "(";
    break;
  default:
    special_symbol = "невірні дані";
}

// Виведення спецсимволу
console.log("Спецсимвол для числа " + number_special_input + " - " + special_symbol);

// Запитай у користувача початок і кінець діапазону
let start_of_range = parseInt(prompt("Введіть початок діапазону:"));
let end_of_range = parseInt(prompt("Введіть кінець діапазону:"));

// Підрахунок суми чисел у заданому діапазоні
let sum = 0;
for (let i = start_of_range; i <= end_of_range; i++) {
  sum += i;
}

// Виведення суми
console.log("Сума чисел у заданому діапазоні: " + sum);

// Запитай у користувача два числа
let firt_input_number = parseInt(prompt("Введіть перше число:"));
let second_input_number = parseInt(prompt("Введіть друге число:"));

// Знаходження найбільшого спільного дільника
let gcd = 1;
for (let j = 1; j <= firt_input_number && j <= second_input_number; j++) {
  if (firt_input_number % j === 0 && second_input_number % j === 0) {
    largestCommonDivisor = j;
  }
}

// Виведення найбільшого спільного дільника
console.log("Найбільший спільний дільник: " + largestCommonDivisor);

// Запитай у користувача число
let NumberofDivisors = parseInt(prompt("Введіть число:"));

// Знаходження дільників числа
let divisors = 1;
for (let k = 1; k <= NumberofDivisors; k++) {
  if (NumberofDivisors % k === 0) {
    console.log("Дільники числа " + NumberofDivisors + ": " + divisors+", ");
  }
}


// Запитай у користувача п’ятирозрядне число
let palindromeNumber = prompt("Введіть п’ятирозрядне число:");

// Перевірка на паліндром
let isPalindrome =
  palindromeNumber.length === 5 &&
  palindromeNumber[0] === palindromeNumber[4] &&
  palindromeNumber[1] === palindromeNumber[3];

// Виведення результату перевірки
console.log(
  "Число " + palindromeNumber + (isPalindrome ? " є" : " не є") + " паліндромом."
);

// Запитай у користувача суму покупки
let user_purchaseAmount = parseFloat(prompt("Введіть суму покупки:"));

// Розрахунок знижки
let user_discount = 0;
if (user_purchaseAmount >= 200 && user_purchaseAmount < 300) {
user_discount = 0.03;
} else if (user_purchaseAmount >= 300 && user_purchaseAmount < 500) {
    user_discount = 0.05;
} else if (user_purchaseAmount >= 500) {
    user_discount = 0.07;
}

// Розрахунок суми до оплати зі знижкою
let amountToPay = user_purchaseAmount - user_purchaseAmount * user_discount;

// Виведення суми до оплати
console.log("Сума до оплати зі знижкою: " + amountToPay);

// Запитай у користувача 10 чисел
let numbersCount = 10;
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let n = 1; n <= numbersCount; n++) {
  let user_numbers = parseFloat(prompt("Введіть число " + n + ":"));
  if (user_numbers > 0) {
    positiveCount++;
  } else if (user_numbers < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }

  if (user_numbers % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

// Виведення статистики
console.log("Додатніх чисел: " + positiveCount);
console.log("Від'ємних чисел: " + negativeCount);
console.log("Нулів: " + zeroCount);
console.log("Парних чисел: " + evenCount);
console.log("Непарних чисел: " + oddCount);

// Зациклення відображення днів тижня
let dayoftheWeek = prompt("День тижня. Хочеш побачити наступний день? (Так/Ні)");

let dayoftheweek_tech=0;
while (dayoftheWeek.toLowerCase() === "так") {
  // Виведення наступного дня тижня
  switch (dayoftheweek_tech) {
    case 0:
      console.log("Понеділок");
      dayoftheweek_tech++;
      break;
    case 1:
      console.log("Вівторок");
      dayoftheweek_tech++;
      break;
    case 2:
      console.log("Середа");
      dayoftheweek_tech++;
      break;
    case 3:
      console.log("Четвер");
      dayoftheweek_tech++;
      break;
    case 4:
      console.log("П'ятниця");
      dayoftheweek_tech++;
      break;
    case 5:
      console.log("Субота");
      dayoftheweek_tech++;
      break;
    case 6:
      console.log("Неділя");
      dayoftheweek_tech=0;
      break;
    default:
      console.log("Невірні дані");
  }

  dayoftheWeek = prompt("День тижня. Хочеш побачити наступний день? (Так/Ні)");
}

console.log("Програма завершилась.");
