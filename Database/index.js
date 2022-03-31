const { query } = require("./connection");
const connection = require("./connection");

class functions {
  constructor(connection) {
    this.connection = connection;
  }

  allEmployees() {
    const query = `SELECT * FROM employees ORDER BY id`;
    return this.connection.promise().query(query);
  }

  byDepartment(department) {
    const query = `SELECT * FROM departments ORDER BY id`;
    return this.connection.promise().query(query, department);
  }

  // in progress
  updateEmployeeRole(employeeId, roleId) {
    return this.connection.promise().query("UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId]);
  }

  // in progress
  allRoles() {
    return (this.connection.promise().query = `SELECT role.id, role.title, department.department AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id`);
  }
}

module.exports = new functions(connection);
