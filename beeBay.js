// =====================================

// SETTING UP SQL CONNECTION

// =====================================

var mysql = require('mysql');
var inquirer = require("inquirer");
var npmTable = require("console.table");


var connection = mysql.createConnection ({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'beebay',
});



connection.connect(function(err) {
	if(!err) {
		console.log("Connected!");
		
		
	}
});
