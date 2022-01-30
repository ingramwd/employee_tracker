const dbConnect = require("./db/connections"); //requiring a connection to the database
const inquirer = require('inquirer'); //require inquirer
const { department, role, employee } = require('./functionality'); //importing my functions
const cTable = require('console.table');

// department();

// role();

// employee();

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
            }
        })

};

iniPrompt();



