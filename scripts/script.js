let user_even_number=NaN;

while(isNaN(user_even_number)|| user_even_number%2 !==0 ||user_even_number<10 || user_even_number>50){
    user_even_number = parseInt(prompt("Введіть парне число в області від 10 до 50:"));

    if(isNaN(user_even_number)){
        alert("Некорректный ввод. Попробуйте снова.");
    }
}


console.log("Половина вашого парного числа", user_even_number/2);