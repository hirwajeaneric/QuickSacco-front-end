export const calculatePaymentPeriod = (requestedAmount : number, monthlySalary: number): number => {
    const monthlyPayment = monthlySalary / 2;
    const interestRate = 0.05;
    const totalExpectedPayment = Number(requestedAmount) + Number(requestedAmount * interestRate);
    const paymentPeriod = Math.ceil(totalExpectedPayment / monthlyPayment);
    return paymentPeriod;
}

// Function to calculate the monthly repayment amount
export const calculateMonthlyRepayment = (requestedAmount: number, repaymentPeriod: number): number => {
    const interestRate = 0.05; // 5% interest rate
    const totalAmountToRepay = requestedAmount * (1 + interestRate); // Total amount including interest // Assuming a 1-year repayment period
    const monthlyRepayment = totalAmountToRepay / repaymentPeriod; // Monthly repayment amount
    return monthlyRepayment;
};