const db = require("./db/connection");
const inquirer = require('inquirer');
const { displayDepartment, viewRoles, viewEmployees} = require('./queries/view-query');
const { addDepartment, addRole, addEmployee} = require('./queries/add-query');
// Connect to database
function prompt() {
  inquirer.prompt([
    {
      type: "list",
      name: "choices",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit"
      ],

    }
  ]).then(answers => {
    switch(answers.choices) {
      case "View All Departments":
        displayDepartment();
        break;
      case "View All Roles":
        viewRoles();
        break;
      case "View All Employees":
        viewEmployees();
        break;
    }
    setTimeout(()=> {
      prompt()
    }, 11000)
  })
//   .then (answers => {
//     switch (answers.choices){
//       case "Add Department":
//         addDepartment();
//         break;
//       case "Add Role":
//         addRole();
//         break;
//       case "Add Employee":
//         addEmployee();
//         break;
//     }
//     setTimeout(()=> {
//       prompt()
//     }, 11000)
//   })
// }
}
prompt();
