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
		setTimeout(supervisorView, 1000);	
	}
});

figlet('Supervisor Mode!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

function supervisorView () {

	inquirer.prompt([

	{
		type: "list",
		name: "supChoice",
		message: "What would you like to see?",
		choices: ["View Product Sales by Dept", "Create New Department"]
	}

		]).then(function(res){

			switch(res.supChoice) {

				case "View Product Sales by Dept":
				console.log("---------------SALES-----------------");
				deptSales();
				break;

				case "Create New Department":
				console.log("-------------NEW DEPT----------------");
				newDept();
				break;
			}
		});

		function deptSales() {

			console.log("deptSales");

		}

		function newDept() {

			console.log("newDept")

		}
}

	