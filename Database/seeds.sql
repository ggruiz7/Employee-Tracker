INSERT INTO departments (id, department)
VALUES
    (1, 'Human Resources'),
    (2, 'Finance'),
    (3, 'Marketing'),
    (4, 'Sales'),
    (5, 'IT'),
    (6, 'Engineering');
 
INSERT INTO roles (id, title, salary, department_id)
VALUES
    (1, 'HR Manager', 100000, 1),
    (2, 'HR Associate', 50000, 1),
    (3, 'Finance Manager', 150000, 2),
    (4, 'Finance Associate', 75000, 2),
    (5, 'Marketing Manager', 125000, 3),
    (6, 'Marketing Associate', 675000, 3),
    (7, 'Sales Manager', 125000, 4),
    (8, 'Sales Associate', 67500, 4),
    (9, 'IT Manager', 150000, 5),
    (10, 'IT Associate', 75000, 5),
    (11, 'IT Intern', 37500, 5),
    (12, 'Engineering Manager', 175000, 6),
    (13, 'Engineering Specialist', 125000, 6),
    (14, 'Engineering Associate', 87500, 6),
    (15, 'Engineering Intern', 43750, 6);
 
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'Keanu', 'Gore', 1, NULL),
    (2, 'James', 'Huerta', 2, 1),
    (3, 'Sam', 'Barajas', 3, NULL),
    (4, 'Quinton', 'Halloway', 4, 3),
    (5, 'Derek', 'Jeter', 5, NULL),
    (6, 'Paolo', 'Costa', 6, 5),
    (7, 'Lauren', 'Sanchez', 7, NULL),
    (8, 'Bob', 'Powers', 8, 7),
    (9, 'Emilio', 'Rum', 9, NULL),
    (10, 'Sandra', 'Daniels', 10, 9),
    (11, 'Jessica', 'Garza', 11, 9),
    (12, 'Clarissa', 'Moreno', 12, NULL),
    (13, 'Bella', 'Portillo', 13, 12),
    (14, 'Dennis', 'Rodman', 14, 12),
    (15, 'John', 'Garza', 15, 12),
    (16, 'Pelon', 'Smith', 14, 12),
    (17, 'John', 'Calustro', 13, 12),
    (18, 'Chapo', 'Chris', 11, 9),
    (19, 'Lionel', 'Messi', 10, 9),
    (20, 'Bris', 'Solorio', 8, 7),
    (21, 'Randy', 'Moat', 6, 5),
    (22, 'Fank', 'Sinatra', 4, 3),
    (23, 'Jeb', 'Bush', 2, 1),
    (24, 'Nat', 'Rainbow', 14, 12);
    