INSERT INTO department (dept_name)
VALUES ("Accounting Department"),
       ("HR Department"),
       ("Cool Beans Department"),
       ("Sales Deparment");
       

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 60000, 1),
       ("HR Rep", 50000, 2),
       ("Cool Employee", 100000, 3),
       ("Sales Associate", 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "California", 1, NULL), 
    ("Toby", "Flenderson", 2, 1),
    ("Super", "Mario", 3, NULL),
    ("Jim", "Halpert", 4, 1)
       
