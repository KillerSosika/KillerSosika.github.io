let depositAmount = 100;
let interestRate = 5;
let months = 2;

let accruedAmount = depositAmount*(1+interestRate/100)**months
let accruedInterest= (accruedAmount-depositAmount)/depositAmount*100



console.log("Сума нарахованих відсотків: " + accruedInterest.toFixed(2));
