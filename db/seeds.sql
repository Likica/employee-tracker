INSERT INTO department (id, name)
VALUES
(1, 'Sales'),
(2, 'Purchasing'),
(3, 'HR'),
(4, 'Safety'),
(5, 'Quality Assurance'),
(6, 'Continuous Improvement'),
(7, 'Shipping'),
(8, 'Receiving'),
(9, 'Maintenance'),
(10, 'Inventory Control');

INSERT INTO roles (id, title, salary, department_id)
VALUES
(1, 'Admin', 42000, 1),
(2, 'Worker', 35000, 7),
(3, 'Worker', 35000, 8),
(4, 'Team Lead', 35000, 4),
(5, 'Supervisor', 55000, 10),
(6, 'Maintenance Chief', 65000, 9),
(7, 'Manager', 85000, 3),
(8, 'Manager', 75000, 2),
(9, 'Manager', 75000, 5),
(10, 'Manager', 75000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Rob', 'Clue', 1, 7),
('Mani', 'First', 2, 7),
('Toto', 'Beacon', 3, 8),
('Super','Woman', 4, 8),
('Super', 'Man', 5, 9),
('Dora', 'Exo', 6, 9),
('Philip', 'Brow', 7,0),
('Ivan', 'DeTall', 8,0),
('Missy', 'DeKind', 9,0),
('Coco', 'Puff', 10,0);