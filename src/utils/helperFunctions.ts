import { DataFilterTypes } from "@/pages/manager/dashboard/Home";
import { UpdateApplicationFormData } from "@/types";
import Cookies from "js-cookie";

/**
 * Calculates the payment period for a loan based on the requested amount and monthly salary.
 *
 * @param requestedAmount The amount requested for the loan.
 * @param monthlySalary The monthly salary of the borrower.
 * @returns The number of months required to repay the loan.
 */
export function calculatePaymentPeriod(requestedAmount: number, monthlySalary: number): number {
  const monthlyPayment = monthlySalary / 2;
  const interestRate = 0.05;
  const totalExpectedPayment = Number(requestedAmount) + Number(requestedAmount * interestRate);
  const paymentPeriod = Math.ceil(totalExpectedPayment / monthlyPayment);
  return paymentPeriod;
}

/**
 * Calculates the monthly repayment amount for a loan based on the requested amount and repayment period.
 *
 * @param requestedAmount The amount requested for the loan.
 * @param repaymentPeriod The duration of the loan in months.
 * @returns The monthly repayment amount.
 */
export function calculateMonthlyRepayment(requestedAmount: number, repaymentPeriod: number): number {
  const interestRate = 0.05; // 5% interest rate
  const totalAmountToRepay = requestedAmount * (1 + interestRate); // Total amount including interest // Assuming a 1-year repayment period
  const monthlyRepayment = totalAmountToRepay / repaymentPeriod; // Monthly repayment amount
  return monthlyRepayment;
}

/**
 * Converts a month name to its corresponding number.
 *
 * @param month The name of the month.
 * @returns The number representing the month.
 */
export function getMonthNumber(month: string): number {
  switch (month.toLowerCase()) {
    case 'january':
      return 1;
    case 'february':
      return 2;
    case 'march':
      return 3;
    case 'april':
      return 4;
    case 'may':
      return 5;
    case 'june':
      return 6;
    case 'july':
      return 7;
    case 'august':
      return 8;
    case 'september':
      return 9;
    case 'october':
      return 10;
    case 'november':
      return 11;
    case 'december':
      return 12;
    default:
      throw new Error('Invalid month');
  }
}

/**
 * Filters loans based on the specified period type and value.
 *
 * @param loans The list of loans to filter.
 * @param filter The filter criteria, including the type of period and its value.
 * @returns The filtered list of loans.
 */
export function loanFilterPerPeriod(loans: UpdateApplicationFormData[], filter: DataFilterTypes): UpdateApplicationFormData[] {
  let filteredLoans: UpdateApplicationFormData[] = [];

  if (loans && loans.length === 0) {
    return [];
  }

  if (filter.type === 'This week') {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    filteredLoans = loans.filter((loan) => {
      const loanCreationDate = new Date(loan.createdAt);
      return loanCreationDate >= sevenDaysAgo;
    });
  } else if (filter.type === 'Month') {
    filteredLoans = loans.filter((loan) => {
      const loanCreationDate = new Date(loan.createdAt);
      return loanCreationDate.getMonth() === getMonthNumber(filter.value) - 1;
    });
  } else if (filter.type === 'Year') {
    filteredLoans = loans.filter((loan) => {
      const loanCreationDate = new Date(loan.createdAt);
      return loanCreationDate.getFullYear() === Number(filter.value);
    });
  }
  return filteredLoans;
}


/**
 * Retrieves the access token based on the current page's pathname.
 *
 * @returns The access token corresponding to the current page's role.
 */
export const getAccessToken = (): string => {
  let accessToken = "";
  if (window.location.pathname.includes('/admin')) {
    /**
     * Retrieves the 'admin-access-token' cookie if the current page's pathname includes '/admin'.
     *
     * @returns The 'admin-access-token' cookie value.
     */
    accessToken = Cookies.get('admin-access-token') as string;
  } else if (window.location.pathname.includes('/manager')) {
    /**
     * Retrieves the 'manager-access-token' cookie if the current page's pathname includes '/manager'.
     *
     * @returns The 'manager-access-token' cookie value.
     */
    accessToken = Cookies.get('manager-access-token') as string;
  } else {
    /**
     * Retrieves the 'applicant-access-token' cookie if the current page's pathname does not include '/admin' or '/manager'.
     *
     * @returns The 'applicant-access-token' cookie value.
     */
    accessToken = Cookies.get('applicant-access-token') as string;
  }
  return accessToken;
};