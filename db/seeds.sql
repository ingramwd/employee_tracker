INSERT INTO department (name)
VALUES
('management'),
('engineer'),
('accountant'),
('intern');

INSERT INTO role (title, salary, department_id)
VALUES
('manager', 100000, 1),
('lead_engineer', 90000, 2),
('software_engineer', 80000, 2),
('juinor_dev', 65000, 2),
('lead_accountant', 85000, 3),
('accountant', 75000, 3),
('full_time_intern', 25000, 4),
('part_time_intern', 0, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Clark','Kent', 1, 1),
('Bruce','Wayne', 1, 2),
('Dick','Greyson', 2, 1),
('Jason','Todd', 3, 2),
('Time','Drake', 3, 1),
('Damian','Wayne', 4, 2),
('Connor','Kent', 4, 2),
('Barry','Allen', 5, 1),
('Lex','Luthor', 6, 1),
('Lana','Lang', 6, 2),
('Rachel','Roth', 7, 2),
('Kori','Andr', 7, 2),
('Victor','Stone', 7, 1),
('Garfield','Logan', 7, 1),
('Hawk','Hall', 8, 2),
('Dawn','Granger', 8, 1);


