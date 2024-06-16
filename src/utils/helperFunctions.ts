export const calculatePaymentPeriod = (requestedAmount : number, monthlySalary: number) => {
    const monthlyPayment = monthlySalary / 2;
    const interestRate = 0.05;
    const totalExpectedPayment = Number(requestedAmount) + Number(requestedAmount * interestRate);
    const paymentPeriod = Math.ceil(totalExpectedPayment / monthlyPayment);
    return paymentPeriod;
}