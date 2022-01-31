const dbConnect = require("./db/connections"); //requiring a connection to the database
const inquirer = require('inquirer'); //require inquirer
const { department, role, employee } = require('./functionality'); //importing my functions
const cTable = require('console.table');

// department();

// role();

// employee();



const departPrompt = () => {
    return inquirer.prompt
        ([
            {
                type: 'input',
                name: 'department',
                message: 'what is your departments name?'
            }
        ])
        .then(input = (input) => {
            console.log(input);
            sql = `INSERT INTO department (name) VALUES (?)`;
            params = [input.department];

            dbConnect.query(sql, params, (err) => {
                if (err) {
                    throw err;
                }
            })
            console.log(`added department ${input.department}`);
            department();

        })

};

const rolePrompt = () => {
    return inquirer.prompt
        ([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title you are adding?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role?'
            },
            {
                type: 'input',
                name: 'department',
                message: 'What department is this role going to be in? (*insert department id*)'
            }
        ])
        .then(input = (input) => {
            console.log(input);
            sql = 'INSERT INTO role (title, salary, department_id) VALUES (?,?,?)';
            params = [input.title, input.salary, input.department];

            dbConnect.query(sql, params, (err) => {
                if (err) {
                    throw err;
                }
                console.log(`added ${input.title} to role table`);
                role();
            })
        })
};

const addEmployee = () => {
    return inquirer.prompt
        ([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the employees first name?'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'What is the employees last name?'
            },
            {
                type: 'input',
                name: 'department',
                message: 'What department is this employee going to be in? (*insert department id*)'
            },
            {
                type: 'input',
                name: 'role',
                message: 'What role is this employee going have? (*insert role id*)'
            }

        ])
        .then(input = (input) => {
            console.log(input);
            sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
            params = [input.firstName, input.lastName, input.department, input.role];

            dbConnect.query(sql, params, (err) => {
                if (err) {
                    throw err;
                }
                console.log(`added ${input.firstName} ${input.lastName} into employee table`);
                employee();
            })
        });
};

const updateEmployee = () => {
    return inquirer.prompt
        ([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the employees first name?'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'What is the employees last name?'
            },
            {
                type: 'input',
                name: 'role',
                message: 'Update employee going have? (*insert role id*)'
            },
            {
                type: 'input',
                name: 'manager',
                message: 'Update manager id? (*insert manager id*)'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the employee id? (*employee id*)'
            }

        ])
        .then(input = (input) => {
            console.log(input);
            sql = `UPDATE employee SET first_name = (?), last_name = (?), role_id = (?), manager_id =(?) WHERE id = (?)`;
            params = [input.firstName, input.lastName, input.role, input.manager, input.id];

            console.log(params);

            dbConnect.query(sql, params, (err) => {
                if (err) {
                    throw err;
                }
                console.log(`updated employee table`);
                employee();
            })
        });
};



const iniPrompt = () => {

    return inquirer.prompt
        ([
            {
                type: "list",
                name: "view",
                message: "What would you like to do?",
                choices: [
                    'view all departments',
                    'view all roles',
                    'view all employees',
                    'add a department',
                    'add a role',
                    'add an employee',
                    'update an employee role'
                ]
            },
        ])
        .then(function ({ view }) {
            switch (view) {
                case 'view all departments':
                    department();
                    break;
                case 'view all roles':
                    role();
                    break;
                case 'view all employees':
                    employee();
                    break;
                case 'add a department':
                    departPrompt();
                    break;
                case 'add a role':
                    rolePrompt();
                    break;
                case 'add an employee':
                    addEmployee()
                    break;
                case 'update an employee role':
                    updateEmployee()
                    break;
            }
        })

};

iniPrompt();
