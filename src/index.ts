function calculateLoan(clientSalary: number, loanAmount: number, months: number): void {
    console.log(`--- სასესხო კალკულატორი ---`);
    console.log(`კლიენტის ხელფასი: $${clientSalary}`);
    console.log(`მოთხოვნილი სესხი: $${loanAmount}`);
    console.log(`დაფარვის ვადა: ${months} თვე\n`);

    let annualInterestRate: number;

    if (clientSalary > 2000) {
        annualInterestRate = 10; 
    } else {
        annualInterestRate = 14;
    }

    console.log(`წლიური საპროცენტო განაკვეთი: ${annualInterestRate}%\n`);

    const totalInterest = loanAmount * (annualInterestRate / 100) * (months / 12);
    const totalPayment = loanAmount + totalInterest;
    const monthlyPayment = totalPayment / months;

    console.log(`მომდევნო ${months} თვის გადახდის გრაფიკი:`);

    let remainingDebt = totalPayment;

    for (let i = 1; i <= months; i++) {
        remainingDebt -= monthlyPayment;
        const currentPaymentFormatted = monthlyPayment.toFixed(2);
        const remainingFormatted = remainingDebt > 0 ? remainingDebt.toFixed(2) : "0.00";

        console.log(`თვე ${i}: ${currentPaymentFormatted} ლარი (დარჩენილი ძირი/ვალი: ${remainingFormatted} ლარი)`);
    }
}

calculateLoan(2500, 6000, 6);