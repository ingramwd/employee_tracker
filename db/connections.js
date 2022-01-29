const mysql = require('mysql2');  //requiring mysql2 package 

//establishing a connection to the database

const dbConnect = mysql.createConnection({
    host: 'localhost',
    //You need your MySQL username
    user: 'root',
    //then your MySQL password
    password: 'password',
    //you need to tell it which database to connect too
    database: 'employee'
},
    //console.log connection
    console.log('Connected to the employee Database')
);


dbConnect.connect(function (err) {
    if (err)
        throw err;
});

module.exports = dbConnect;
