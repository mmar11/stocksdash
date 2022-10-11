

import mysql from 'mysql2';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

// create the connection to d   atabase
const connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});



function conexao(sqlquery, place) {
    connection.execute(sqlquery,
        place,
        function (err, results, fields) {
            if (results) {
                // console.log(results); // results contains rows returned by server
                // console.log(fields); // fields contains extra meta data about results, if available

            }
            else { err }
        }
    );


}


export default conexao 