import Employee from "./Employee.js";

export const john = new Employee('John', 32, 'Developer','IT');

export const mary = new Employee('Mary', 28, 'Accountant', 'Finance');

john.celebrateBirthday();
john.promote();