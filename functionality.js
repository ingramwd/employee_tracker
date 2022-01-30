const dbConnect = require('./db/connections');
const cTable = require('console.table');

//this displays our table department form the employee database
const department = () => {
    dbConnect.query(`select * from department`, (err, res) => {
        return console.table(res)
    });

}

//this will display our table role form the employee database
const role = () => {
    dbConnect.query(`select * from role`, (err, res) => {
        return console.table(res)
    });

}

//lastly this will display our table employee from the employee database
const employee = () => {
    dbConnect.query(`select * from employee`, (err, res) => {
        return console.table(res)
    });

}



module.exports = { department, role, employee }