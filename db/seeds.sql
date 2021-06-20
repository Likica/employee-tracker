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
(3, 'Team Lead', 35000, 4),
(4, 'Supervisor', 55000, 10),
(5, 'Maintenance Chief', 65000, 9),
(6, 'Manager', 85000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Rob', 'Clue', 1, 6),
('Mani', 'First', 2, 6),
('Toto', 'Beacon', 3, 6),
('Super','Woman', 4, 6),
('Super', 'Man', 5, 6),
('Dora', 'Exo', 6, 0),
('Philip', 'Brow', 1,6),
('Ivan', 'DeTall', 3,6),
('Missy', 'DeKind', 6,0),
('Coco', 'Puff', 5,6);