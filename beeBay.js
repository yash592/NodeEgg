// =====================================

// SETTING UP SQL CONNECTION

// =====================================

var mysql = require('mysql');
var inquirer = require("inquirer");
var npmTable = require("console.table");
var figlet = require('figlet');
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
		setTimeout(showProducts, 2000);		
	}
});

// =====================================

// ShOW INVENTORY

// =====================================

figlet('beeBay!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});



function showProducts() {

	

	


	console.log("WELCOME TO THE REVOLUTIONARY NODE SHOPPING STORE beeBay! \n")

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
		name: "id",
		message: "Enter the Item ID of the item you'd like to buy!"

	},

	{
		type: "input",
		name: "userNum",
		message: "Enter the quantity of the item you'd like to buy!"

	}
      

		]).then(function(response){

			var resID = response.id;
			var resUnits = response.userNum


			var queryOne = connection.query("SELECT stock_quantity FROM inventory WHERE id = ?", [resID], function(err, res) {

				if (res[0].stock_quantity < resUnits) {
					console.log("\n Not enough stock. Call us to get offers on bulk orders! \n");
					buyAProduct();
				}

				else if (res[0].stock_quantity >= resUnits) {
					
					var queryTwo = connection.query("UPDATE inventory SET stock_quantity = stock_quantity - " + resUnits + " WHERE id = " + resID, function(err, res) {

					console.table("\n You just bought " + resUnits + " units of " + resID + "\n");

					// console.log(res);

					showProducts();

					


					});

				}				

				

				

			});

		}); 
} // function response ends here



