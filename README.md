# Employee Tracker

## Usage:

- Clone this repository to your local machine; make sure to install the necessary dependecies by running "npm i" in the terminal.
- In a terminal, log in to mysql, and run "source Database/schema.sql" followed by "source Database/seeds.sql" to create and populate the database (or dont source seeds.sql and populate yourself).
- Open a new terminal and run node index to begin the application.

## Features:

- Not all features are currently present

* To begin, you are presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.
* Selecting view all departments, you are presented with a formatted table showing department names and department ids.
* Selecting view all roles, you are presented with the job title, role id, the department that role belongs to, and the - salary for that role.
* Selecting view all employees, you are presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.
* Selecting add a department, you are prompted to enter the name of the department and that department is added to the database.
* Selecting add a role, you are prompted to enter the name, salary, and department for the role and that role is added to the database.
* Selecting add and employee, you are prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.
* Selcting update an employee role, you are prompted to select an employee to update and their new role and this information is updated in the database.
* Application allows users to update employee managers
* Application allows users to view employees by manager
* Application allows users to view employees by department
* Application allows users to delete departments, roles, and employees

## Technologies

- ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## Demonstration:

\*\*\* Video demonstartion will be provided in the future.
