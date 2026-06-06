import { LoginCredential } from '../models/auth.type';

export const LOGIN_CREDENTIALS: LoginCredential[] = [
  {
    employeeCode: 'SA001',
    password: '123456',
    role: 'SUPER_ADMIN',
    name: 'Super Admin'
  },
  {
    employeeCode: 'DIR001',
    password: '123456',
    role: 'DIRECTOR',
    name: 'Amit Sharma'
  },
  {
    employeeCode: 'MAN001',
    password: '123456',
    role: 'MANAGER',
    name: 'Priya Verma'
  },
  {
    employeeCode: 'EMP001',
    password: '123456',
    role: 'EMPLOYEE',
    name: 'Rahul Kumar'
  },

  // HR
  {
    employeeCode: 'HR001',
    password: '123456',
    role: 'HR_MANAGER',
    name: 'Neha Gupta'
  },
  {
    employeeCode: 'HR002',
    password: '123456',
    role: 'HR_EXECUTIVE',
    name: 'Ankit Singh'
  },

  // Finance
  {
    employeeCode: 'FIN001',
    password: '123456',
    role: 'FINANCE_MANAGER',
    name: 'Rohit Agarwal'
  },
  {
    employeeCode: 'FIN002',
    password: '123456',
    role: 'ACCOUNTANT',
    name: 'Sneha Jain'
  },

  // Sales & CRM
  {
    employeeCode: 'CRM001',
    password: '123456',
    role: 'SALES_MANAGER',
    name: 'Vikas Malhotra'
  },
  {
    employeeCode: 'CRM002',
    password: '123456',
    role: 'SALES_EXECUTIVE',
    name: 'Karan Mehta'
  },

  // GEM
  {
    employeeCode: 'GEM001',
    password: '123456',
    role: 'GEM_MANAGER',
    name: 'Ajay Tiwari'
  },
  {
    employeeCode: 'GEM002',
    password: '123456',
    role: 'GEM_EXECUTIVE',
    name: 'Ritu Saxena'
  },

  // SCM
  {
    employeeCode: 'SCM001',
    password: '123456',
    role: 'SCM_MANAGER',
    name: 'Manoj Yadav'
  },
  {
    employeeCode: 'SCM002',
    password: '123456',
    role: 'SCM_EXECUTIVE',
    name: 'Deepak Chauhan'
  },

  // Operations
  {
    employeeCode: 'OPS001',
    password: '123456',
    role: 'OPERATIONS_MANAGER',
    name: 'Sandeep Mishra'
  },
  {
    employeeCode: 'OPS002',
    password: '123456',
    role: 'OPERATIONS_EXECUTIVE',
    name: 'Pooja Arora'
  }
];