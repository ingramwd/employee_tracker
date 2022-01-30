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
            `INSERT INTO candidates (first_name, last_name, industry_connected)
            VALUES (?)`, {
                name: input.name
            },
                console.log(`added department ${input}`);
            department();

        })

}

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
            }
        })

};

iniPrompt();
