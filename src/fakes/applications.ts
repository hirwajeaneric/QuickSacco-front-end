export type Application = {
    _id: string;
    firstName: string;   
    lastName: string;
    nationalId: string;
    email: string;
    teacherId: string;
    phone: string;
    dateOfBirth: Date;
    gender: "Male" | "Female" | "Other";
    maritalStatus: "Single" | "Married" | "Divorced" | "Widowed";
    numberOfDependencies: number;
    workSchool: string;
    position: string;
    monthlySalary: number;
    amountRequested: number;
    repaymentReriod: number;
    amountToPayPerMonth: number;
    bankAccountNumber: string;
    proofOffEmployment: string;
    copyOfNationalId: string;
    loanStatus: "Pending" | "Update required" | "Approved" | "Rejected";
    createdAt: Date;
};

function getRandomDateWithinLast30Days() {
    const today = new Date();
    const pastDate = new Date();
    
    // Set pastDate to 30 days before today
    pastDate.setDate(today.getDate() - 30);
    
    // Get the time range between pastDate and today in milliseconds
    const timeRange = today.getTime() - pastDate.getTime();
    
    // Generate a random time within this range
    const randomTime = pastDate.getTime() + Math.random() * timeRange;
    
    // Create a new Date object with the random time
    const randomDate = new Date(randomTime);
    
    return randomDate;
  }

export const applications: Application[] = [
    {
        _id: "1",
        firstName: "John",
        lastName: "Doe",
        nationalId: "1234567890123456",
        email: "john.doe@example.com",
        teacherId: "T1001",
        phone: "0712345678",
        dateOfBirth: new Date("1980-05-15"),
        gender: "Male",
        maritalStatus: "Married",
        numberOfDependencies: 2,
        workSchool: "Greenwood High",
        position: "Math Teacher",
        monthlySalary: 400000,
        amountRequested: 15000000,
        amountToPayPerMonth: 200000,
        repaymentReriod: 75,
        bankAccountNumber: "1234567890",
        proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        loanStatus: "Pending",
        createdAt: getRandomDateWithinLast30Days()
    },
    {
        _id: "2",
        firstName: "John",
        lastName: "Doe",
        nationalId: "1234567890123456",
        email: "john.doe@example.com",
        teacherId: "T1001",
        phone: "0712345678",
        dateOfBirth: new Date("1980-05-15"),
        gender: "Male",
        maritalStatus: "Married",
        numberOfDependencies: 2,
        workSchool: "Greenwood High",
        position: "Math Teacher",
        monthlySalary: 400000,
        amountRequested: 15000000,
        amountToPayPerMonth: 200000,
        repaymentReriod: 75,
        bankAccountNumber: "1234567890",
        proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        loanStatus: "Pending",
        createdAt: getRandomDateWithinLast30Days()
    },
    {
        _id: "3",
        firstName: "John",
        lastName: "Doe",
        nationalId: "1234567890123456",
        email: "john.doe@example.com",
        teacherId: "T1001",
        phone: "0712345678",
        dateOfBirth: new Date("1980-05-15"),
        gender: "Male",
        maritalStatus: "Married",
        numberOfDependencies: 2,
        workSchool: "Greenwood High",
        position: "Math Teacher",
        monthlySalary: 400000,
        amountRequested: 15000000,
        amountToPayPerMonth: 200000,
        repaymentReriod: 75,
        bankAccountNumber: "1234567890",
        proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        loanStatus: "Pending",
        createdAt: getRandomDateWithinLast30Days()
    },
    {
        _id: "4",
        firstName: "John",
        lastName: "Doe",
        nationalId: "1234567890123456",
        email: "john.doe@example.com",
        teacherId: "T1001",
        phone: "0712345678",
        dateOfBirth: new Date("1980-05-15"),
        gender: "Male",
        maritalStatus: "Married",
        numberOfDependencies: 2,
        workSchool: "Greenwood High",
        position: "Math Teacher",
        monthlySalary: 400000,
        amountRequested: 15000000,
        amountToPayPerMonth: 200000,
        repaymentReriod: 75,
        bankAccountNumber: "1234567890",
        proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        loanStatus: "Pending",
        createdAt: getRandomDateWithinLast30Days()
    },
    {
        _id: "5",
        firstName: "John",
        lastName: "Doe",
        nationalId: "1234567890123456",
        email: "john.doe@example.com",
        teacherId: "T1001",
        phone: "0712345678",
        dateOfBirth: new Date("1980-05-15"),
        gender: "Male",
        maritalStatus: "Married",
        numberOfDependencies: 2,
        workSchool: "Greenwood High",
        position: "Math Teacher",
        monthlySalary: 400000,
        amountRequested: 15000000,
        amountToPayPerMonth: 200000,
        repaymentReriod: 75,
        bankAccountNumber: "1234567890",
        proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        loanStatus: "Pending",
        createdAt: getRandomDateWithinLast30Days()
    },
    {
        _id: "6",
        firstName: "John",
        lastName: "Doe",
        nationalId: "1234567890123456",
        email: "john.doe@example.com",
        teacherId: "T1001",
        phone: "0712345678",
        dateOfBirth: new Date("1980-05-15"),
        gender: "Male",
        maritalStatus: "Married",
        numberOfDependencies: 2,
        workSchool: "Greenwood High",
        position: "Math Teacher",
        monthlySalary: 400000,
        amountRequested: 15000000,
        amountToPayPerMonth: 200000,
        repaymentReriod: 75,
        bankAccountNumber: "1234567890",
        proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        loanStatus: "Pending",
        createdAt: getRandomDateWithinLast30Days()
    },
    {
        _id: "7",
        firstName: "John",
        lastName: "Doe",
        nationalId: "1234567890123456",
        email: "john.doe@example.com",
        teacherId: "T1001",
        phone: "0712345678",
        dateOfBirth: new Date("1980-05-15"),
        gender: "Male",
        maritalStatus: "Married",
        numberOfDependencies: 2,
        workSchool: "Greenwood High",
        position: "Math Teacher",
        monthlySalary: 400000,
        amountRequested: 15000000,
        amountToPayPerMonth: 200000,
        repaymentReriod: 75,
        bankAccountNumber: "1234567890",
        proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        loanStatus: "Pending",
        createdAt: getRandomDateWithinLast30Days()
    },
    {
        _id: "8",
        firstName: "John",
        lastName: "Doe",
        nationalId: "1234567890123456",
        email: "john.doe@example.com",
        teacherId: "T1001",
        phone: "0712345678",
        dateOfBirth: new Date("1980-05-15"),
        gender: "Male",
        maritalStatus: "Married",
        numberOfDependencies: 2,
        workSchool: "Greenwood High",
        position: "Math Teacher",
        monthlySalary: 400000,
        amountRequested: 15000000,
        amountToPayPerMonth: 200000,
        repaymentReriod: 75,
        bankAccountNumber: "1234567890",
        proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        loanStatus: "Pending",
        createdAt: getRandomDateWithinLast30Days()
    },
    {
        _id: "9",
        firstName: "John",
        lastName: "Doe",
        nationalId: "1234567890123456",
        email: "john.doe@example.com",
        teacherId: "T1001",
        phone: "0712345678",
        dateOfBirth: new Date("1980-05-15"),
        gender: "Male",
        maritalStatus: "Married",
        numberOfDependencies: 2,
        workSchool: "Greenwood High",
        position: "Math Teacher",
        monthlySalary: 400000,
        amountRequested: 15000000,
        amountToPayPerMonth: 200000,
        repaymentReriod: 75,
        bankAccountNumber: "1234567890",
        proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        loanStatus: "Pending",
        createdAt: getRandomDateWithinLast30Days()
    },
    {
        _id: "10",
        firstName: "John",
        lastName: "Doe",
        nationalId: "1234567890123456",
        email: "john.doe@example.com",
        teacherId: "T1001",
        phone: "0712345678",
        dateOfBirth: new Date("1980-05-15"),
        gender: "Male",
        maritalStatus: "Married",
        numberOfDependencies: 2,
        workSchool: "Greenwood High",
        position: "Math Teacher",
        monthlySalary: 400000,
        amountRequested: 15000000,
        amountToPayPerMonth: 200000,
        repaymentReriod: 75,
        bankAccountNumber: "1234567890",
        proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        loanStatus: "Pending",
        createdAt: getRandomDateWithinLast30Days()
    },
    {
        _id: "11",
        firstName: "John",
        lastName: "Doe",
        nationalId: "1234567890123456",
        email: "john.doe@example.com",
        teacherId: "T1001",
        phone: "0712345678",
        dateOfBirth: new Date("1980-05-15"),
        gender: "Male",
        maritalStatus: "Married",
        numberOfDependencies: 2,
        workSchool: "Greenwood High",
        position: "Math Teacher",
        monthlySalary: 400000,
        amountRequested: 15000000,
        amountToPayPerMonth: 200000,
        repaymentReriod: 75,
        bankAccountNumber: "1234567890",
        proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        loanStatus: "Pending",
        createdAt: getRandomDateWithinLast30Days()
    },
    {
        _id: "12",
        firstName: "John",
        lastName: "Doe",
        nationalId: "1234567890123456",
        email: "john.doe@example.com",
        teacherId: "T1001",
        phone: "0712345678",
        dateOfBirth: new Date("1980-05-15"),
        gender: "Male",
        maritalStatus: "Married",
        numberOfDependencies: 2,
        workSchool: "Greenwood High",
        position: "Math Teacher",
        monthlySalary: 400000,
        amountRequested: 15000000,
        amountToPayPerMonth: 200000,
        repaymentReriod: 75,
        bankAccountNumber: "1234567890",
        proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        loanStatus: "Pending",
        createdAt: getRandomDateWithinLast30Days()
    },
    {
        _id: "13",
        firstName: "John",
        lastName: "Doe",
        nationalId: "1234567890123456",
        email: "john.doe@example.com",
        teacherId: "T1001",
        phone: "0712345678",
        dateOfBirth: new Date("1980-05-15"),
        gender: "Male",
        maritalStatus: "Married",
        numberOfDependencies: 2,
        workSchool: "Greenwood High",
        position: "Math Teacher",
        monthlySalary: 400000,
        amountRequested: 15000000,
        amountToPayPerMonth: 200000,
        repaymentReriod: 75,
        bankAccountNumber: "1234567890",
        proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
        loanStatus: "Pending",
        createdAt: getRandomDateWithinLast30Days()
    },
];