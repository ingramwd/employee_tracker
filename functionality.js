const dbConnect = require('./db/connections');

//this will display our table role form the employee database
const role = () => {
    dbConnect.query(`select * from role`, (err, res) => {
        return console.log(res)
    });

}

module.exports = { role }