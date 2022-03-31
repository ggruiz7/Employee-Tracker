const db = require("./Database");
const inquirer = require("inquirer");
require("console.table");
const connect = require("./Database/connection");

const prompt = () => {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "Select an action from the list below.",
      choices: [
        "View All Employees",
        "View All Employees by Department",
        "View All Employees by Manager ",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "View All Employees":
          viewEmployees();
          break;

        case "View Employees by Department":
          viewByDepartment();
          break;

        case "View Employees by Manager ":
          viewByManager();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employee":
          deleteEmployee();
          break;

        case "Update Employee Role":
          changeRole();
          break;
      }
    });
};

function viewEmployees() {
  db.allEmployees()
    .then(([rows]) => {
      let result = rows;
      console.table(result);
    })
    .then(() => prompt());
}

function viewByDepartment() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "rawlist",
        message: "Chose the department you want to see employees from.",
        choices: ["Human Resources", "Finance", "Marketing", "Sales", "IT", "Engineering"],
      },
    ])
    .then((answer) => {
      db.byDepartment(answer.department)
        .then(([rows]) => {
          let result = rows;
          console.table(result);
        })
        .then(() => prompt());
    });
}

const viewByManager = () => {
  const sql = `SELECT CONCAT (a.first_name, ' ', a.last_name) AS Manager,
                CONCAT(b.first_name, ' ', b.last_name) AS 'Direct Reporting' 
                FROM employees b
                INNER JOIN employees a ON
                a.id = b.manager_id
                ORDER BY Manager;`;

  connect
    .promise()
    .query(sql)
    .then((rows) => {
      console.table(rows[0]);
    })
    .then(prompt);
};

const addEmployee = () => {
  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?)`;
  connect.query(`SELECT * FROM employees ORDER BY last_name`, (err, result) => {
    if (err) throw err;
    const managerList = result.map(({ first_name, last_name, id }) => ({ name: first_name + " " + last_name, value: id }));
    connect.query(`SELECT * FROM roles ORDER BY id`, (err, result) => {
      if (err) throw err;
      const roleList = result.map(({ id, title }) => ({ name: title, value: id }));
      inquirer
        .prompt([
          {
            type: "input",
            name: "first_name",
            message: "Enter the employee's first name: ",
          },
          {
            type: "input",
            name: "last_name",
            message: "Enter the employee's last name: ",
          },
          {
            type: "rawlist",
            name: "role_id",
            message: "Select a role for the employee.",
            choices: roleList,
          },
          {
            type: "rawlist",
            name: "manager_id",
            message: "Select a manager for the employee.",
            choices: managerList,
          },
        ])
        .then((data) =>
          connect
            .promise()
            .query(sql, [data.first_name, data.last_name, data.role_id, data.manager_id], (err, result) => {
              if (err) throw err;
            })
            .then(viewEmployees)
        );
    });
  });
};

const deleteEmployee = () => {
  const sql = `DELETE FROM employees WHERE id = ?`;
  connect.query(`SELECT * FROM employees ORDER BY id`, (err, result) => {
    if (err) throw err;
    const employeeList = result.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));
    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "employee",
          message: "Select an employee to remove.",
          choices: employeeList,
        },
      ])
      .then((data) =>
        connect
          .promise()
          .query(sql, data.employee, (err, result) => {
            if (err) throw err;
          })
          .then(viewEmployees)
      );
  });
};

function changeRole() {
  db.allEmployees().then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id,
    }));
    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "employeeId",
          message: "Select an employee to update their role.",
          choices: employeeChoices,
        },
      ])
      .then((res) => {
        let employeeId = res.employeeId;
        console.log(employeeId);
        db.allRoles().then(([rows]) => {
          let roles = rows;
          const roleChoices = roles.map(({ id, title }) => ({
            name: title,
            value: id,
          }));
          inquirer
            .prompt([
              {
                type: "rawlist",
                name: "roleId",
                message: "Select a new role for this employee.",
                choices: roleChoices,
              },
            ])
            .then((res) => db.updateEmployeeRole(employeeId, res.roleId))
            .then(() => console.log("Employee's role updated."))
            .then(() => prompt());
        });
      });
  });
}

function start() {
  prompt();
}

start();
