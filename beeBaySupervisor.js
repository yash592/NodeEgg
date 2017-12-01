var mysql = require('mysql');
var inquirer = require("inquirer");
var npmTable = require("console.table");
var figlet = require('figlet');


var connection = mysql.createConnection ({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'beebay',
});



connection.connect(function(err) {
	if(!err) {
		console.log("Connected!");
		// setTimeout(showProducts, 2000);	
		// setTimeout(managerView, 1000);	
	}
});