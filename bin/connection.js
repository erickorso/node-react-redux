/*
	connection
*/
const mysql      = require('mysql')
const dbConfig   = {
						host     : 'localhost', 
						user     : 'root',
						password : 'erick',
						database : 'node_mysql'
					}
const connection = mysql.createConnection(dbConfig)

connection
	.connect((err) =>   {
							if (err) {
								return err;
							}else{
								console.log('db connection ok')
							}
					    })

module.exports = connection