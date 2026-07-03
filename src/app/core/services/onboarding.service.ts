import {
  Injectable,
  signal
} from '@angular/core';
import { OnboardingEmployee } from '../models/onboarding.type';



@Injectable({
  providedIn: 'root'
})
export class OnboardingService {


  employees =
    signal<OnboardingEmployee[]>([
       {
      name: 'Rahul Sharma',
      designation: 'Frontend Developer',
      department: 'Engineering',
      joiningDate: '2026-07-10',
      progress: 92,
      status: 'Almost Complete',
      avatar: 'R'
    },

    {
      name: 'Priya Iyer',
      designation: 'HR Executive',
      department: 'Human Resources',
      joiningDate: '2026-07-10',
      progress: 70,
      status: 'Documents Pending',
      avatar: 'P'
    }
    ]);


  getEmployees() {

    return this.employees;

  }


  addEmployee(
    employee: OnboardingEmployee
  ): void {

    this.employees.update(list => [

      employee,

      ...list

    ]);

  }

  setEmployees(
    employees: OnboardingEmployee[]
  ): void {

    this.employees.set(employees);

  }

  clear(): void {

    this.employees.set([]);

  }

}