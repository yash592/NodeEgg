// =====================================

// SETTING UP SQL CONNECTION

// =====================================

var mysql = require('mysql');
var inquirer = require("inquirer");
var npmTable = require("console.table");
var totalSpent = 0;


var connection = mysql.createConnection ({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'beebay',
});



connection.connect(function(err) {
	if(!err) {
		console.log("Connected!");
		showProducts();
		
	}
});

// =====================================

// ShOW INVENTORY

// =====================================

function showProducts() {

	console.log("WELCOME TO THE REVOLUTIONARY NODE SHOPPING STORE beeBAY! \n")

	var query = connection.query("SELECT * FROM inventory", function(err, res) {

		if (err) throw err

		for(var i = 0; i < res.length; i++) {

			

		};

		console.table(res);

		buyAProduct();


	});


  

};

// =====================================

// BUY A PRODUCT

// =====================================

function buyAProduct() {

	inquirer.prompt([

	{
		type: "input",
		name: "userBuy",
		message: "Enter the Item ID of the item you'd like to buy!"

	},

	{
		type: "input",
		name: "userNum",
		message: "Enter the quantity of the item you'd like to buy!"

	}
      

		]).then(function(response){

			var query = connection.query("UPDATE inventory SET stock_quantity = stock_quantity - " + response.userNum + " WHERE id = " + response.userBuy, function(err, res) {

				console.table("\n You just bought " + response.userNum + " units of " + response.userBuy + "\n");

				// UPDATE inventory SET stock_quantity = stock_quantity - 2 WHERE id = "2"

				showProducts();

			})

		})
}

