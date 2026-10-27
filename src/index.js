"use strict";
// სტუდენტი 1: სასესხო კალკულატორი
function calculateLoan(clientSalary, loanAmount, months) {
    console.log(`--- სასესხო კალკულატორი ---`);
    console.log(`კლიენტის ხელფასი: $${clientSalary}`);
    console.log(`მოთხოვნილი სესხი: $${loanAmount}`);
    console.log(`დაფარვის ვადა: ${months} თვე\n`);
    // 1. ლოგიკა: if/else კონსტრუქციით საპროცენტო განაკვეთის შემოწმება
    let annualInterestRate;
    if (clientSalary > 2000) {
        annualInterestRate = 10; // 10% თუ ხელფასია > 2000
    }
    else {
        annualInterestRate = 14; // 14% თუ ნაკლებია ან ტოლია 2000-ზე
    }
    console.log(`წლიური საპროცენტო განაკვეთი: ${annualInterestRate}%\n`);
    // მარტივი პროცენტის გამოთვლა
    const totalInterest = loanAmount * (annualInterestRate / 100) * (months / 12);
    const totalPayment = loanAmount + totalInterest;
    const monthlyPayment = totalPayment / months;
    console.log(`მომდევნო ${months} თვის გადახდის გრაფიკი:`);
    // 2. ციკლი: for ციკლის საშუალებით კონსოლში გამოგვქქვს გადახდის გრაფიკი
    let remainingDebt = totalPayment;
    for (let i = 1; i <= months; i++) {
        remainingDebt -= monthlyPayment;
        const currentPaymentFormatted = monthlyPayment.toFixed(2);
        const remainingFormatted = remainingDebt > 0 ? remainingDebt.toFixed(2) : "0.00";
        console.log(`თვე ${i}: ${currentPaymentFormatted} ლარი (დარჩენილი ძირი/ვალი: ${remainingFormatted} ლარი)`);
    }
}
// ფუნქციის გამოძახება ტესტირებისთვის
calculateLoan(2500, 6000, 6);
//# sourceMappingURL=index.js.map