const inquirer = require("inquirer");
const db = require("../db/connection");
const cTable = require("console.table");

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "What department would you like to add?",
      },
    ])

    .then((data) => {
      const deptartmentInput = data.department;

      db.query(
        "INSERT INTO department (dept_name) VALUES (?)",
        [deptartmentInput],
        (err, results) => {
          if (err) {
            console.log(err);
          }
          console.log(`${data.department} has been added to the database.`);
        }
      );
    });
}

function addRole() {
  db.query("SELECT DISTINCT id, dept_name FROM department", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      const deptartmentOptions = results.map((department) => ({
        name: department.dept_name,
        value: department.id,
      }));
      inquirer
        .prompt([
          {
            type: "input",
            name: "role_title",
            message: "What role would you like to add?",
          },
          {
            type: "input",
            name: "salary",
            message: "What is the salary for this role?",
          },
          {
            type: "list",
            name: "role_dept",
            message: "What department does this role belong to?",
            choices: deptartmentOptions,
          },
        ])

        .then((data) => {
          const roleInput = data.role_title;
          const roleSalary = data.salary;
          const roleDept = data.role_dept;

          db.query(
            "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
            [roleInput, roleSalary, roleDept],
            (err, results) => {
              if (err) {
                console.log(err);
              }
              console.log(`${data.role_title} has been added to the database.`);
            }
          );
        });
    }
  });
}

function addEmployee() {
  db.query("SELECT DISTINCT id, title FROM role", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      const roleOptions = results.map((role) => ({
        name: role.title,
        value: role.id,
      }));

      db.query(
        'SELECT e1.id, CONCAT(e1.first_name, " ", e1.last_name) AS manager_name FROM employee e1 JOIN employee e2 ON e1.id = e2.manager_id GROUP BY e1.id',
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            const managerOptions = results.map((manager) => ({
              name: manager.manager_name,
              value: manager.id,
            }));
            managerOptions.push({ name: "None", value: null });

            inquirer
              .prompt([
                {
                  type: "input",
                  name: "first_name",
                  message: "What is the first name of the employee?",
                },
                {
                  type: "input",
                  name: "last_name",
                  message: "What is the last name of the employee?",
                },
                {
                  type: "list",
                  name: "role",
                  message: "What role is this employee assigned to?",
                  choices: roleOptions,
                },
                {
                  type: "list",
                  name: "manager",
                  message: "Who is this employee's manager?",
                  choices: managerOptions,
                },
              ])

              .then((data) => {
                const employeeFirstName = data.first_name;
                const employeeLastName = data.last_name;
                const employeeRole = data.role;
                const employeeManager = data.manager;

                db.query(
                  "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
                  [
                    employeeFirstName,
                    employeeLastName,
                    employeeRole,
                    employeeManager,
                  ],
                  (err, results) => {
                    if (err) {
                      console.log(err);
                    }
                    console.log(
                      `${data.first_name} ${data.last_name} has been added to the database.`
                    );
                  }
                );
              });
          }
        }
      );
    }
  });
}

module.exports = { addDepartment, addRole, addEmployee };
