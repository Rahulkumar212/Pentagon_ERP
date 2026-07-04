export interface EmployeePayroll {

  id: number;

  employeeCode: string;

  name: string;

  designation: string;

  avatar: string;

  bank: string;

  accountNumber: string;

  pan: string;

  aadhaar: string;

  basic: number;

  hra: number;

  specialAllowance: number;

  epf: number;

  professionalTax: number;

  incomeTax: number;

}

export const PAYROLL_DATA: EmployeePayroll[] = [

  {
    id: 1,
    employeeCode: 'EMP2024001',
    name: 'Aanya Sharma',
    designation: 'Senior Software Engineer',
    avatar: 'https://i.pravatar.cc/150?img=32',
    bank: 'HDFC Bank',
    accountNumber: '50100412356789',
    pan: 'ABCDE1234F',
    aadhaar: '1234-5678-9012',
    basic: 82500,
    hra: 41250,
    specialAllowance: 41250,
    epf: 9900,
    professionalTax: 200,
    incomeTax: 13200
  },

  {
    id: 2,
    employeeCode: 'EMP2024002',
    name: 'Kabir Malhotra',
    designation: 'Lead UX Designer',
    avatar: 'https://i.pravatar.cc/150?img=12',
    bank: 'ICICI Bank',
    accountNumber: '40123456789123',
    pan: 'PQWER1234T',
    aadhaar: '5678-1234-9876',
    basic: 72000,
    hra: 36000,
    specialAllowance: 30000,
    epf: 8500,
    professionalTax: 200,
    incomeTax: 9800
  },

  {
    id: 3,
    employeeCode: 'EMP2024003',
    name: 'Priya Iyer',
    designation: 'HR Specialist',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bank: 'Axis Bank',
    accountNumber: '89012345678912',
    pan: 'ZXCVB5678Q',
    aadhaar: '9876-5432-1010',
    basic: 65000,
    hra: 30000,
    specialAllowance: 25000,
    epf: 7200,
    professionalTax: 200,
    incomeTax: 7200
  },

  {
    id: 4,
    employeeCode: 'EMP2024004',
    name: 'Rohan Deshmukh',
    designation: 'Senior Sales Director',
    avatar: 'https://i.pravatar.cc/150?img=15',
    bank: 'SBI Bank',
    accountNumber: '70124567891234',
    pan: 'LMNOP8765A',
    aadhaar: '7654-1234-5678',
    basic: 92000,
    hra: 45000,
    specialAllowance: 52000,
    epf: 11000,
    professionalTax: 200,
    incomeTax: 18500
  }

];