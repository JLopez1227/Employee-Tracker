const db = require("../db/connection");
const cTable = require("console.table");

function displayDepartment() {
  db.query("SELECT * FROM department", (err, result) => {
    if (err) {
      console.log({ error: err.message });
    }
    console.table(result);
  });
}

function viewRoles() {
  db.query(
    "SELECT role.id, role.title, role.salary, department.dept_name AS department_name FROM role JOIN department ON role.department_id=department.id",
    (err, result) => {
      if (err) {
        console.log({ error: err.message });
      }
      console.table(result);
    }
  );
}

function viewEmployees() {
  db.query(
    "SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.dept_name AS department_name, role.salary as salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id",
    (err, result) => {
      if (err) {
        console.log({ error: err.message });
      }
      console.table(result);
    }
  );
}

module.exports = { displayDepartment, viewRoles, viewEmployees };
