var mysql = require('mysql');
var inquirer = require("inquirer");
var npmTable = require("console.table");
var figlet = require('figlet');

// SETUP DATABASE CONNECTION

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
			setTimeout(managerView, 1000);	
		}
	});



	figlet('INVENTORY!', function(err, data) {
	    if (err) {
	        console.log('Something went wrong...');
	        console.dir(err);
	        return;
	    }
	    console.log(data)
	});

	// ==========================================

	// MANAGER VIEW TO SEE INVENTORY

	// ==========================================

	function managerView() {

		inquirer.prompt ([

		{
			type: "list",
			name: "managerChoice",
			message: "What would you like to do?",
			choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
		}

			]).then(function(response){

				switch(response.managerChoice){

					case "View Products for Sale":
					console.log("Inventory");
					inventory();
					break;

					case "View Low Inventory":
					console.log("Low Inventory");
					lowInventory();
					break;

					case "Add to Inventory":
					console.log("Add Inventory");
					addInventory();
					break;

					case "Add New Product":
					console.log("Add Product");
					addProduct();
					break;


				}; // response ends here

				// =============================================

				// function to show inventory

				// =============================================

				function inventory() {

					console.log("\n -----------------------Inventory-------------------------- \n");
					var query = connection.query("SELECT * FROM inventory", function(err, res){

						if(err) throw err

						console.table(res);

						inquirer.prompt ([

						{
							type: "list",
							name: "managerChoice",
							message: "What would you like to do?",
							choices: ["View Low Inventory", "Add to Inventory", "Add New Product"]
						}

							]).then(function(response){

								switch(response.managerChoice) {

									case "View Low Inventory":
									console.log("Low Inventory");
									lowInventory();
									break;

									case "Add to Inventory":
									console.log("Add Inventory");
									addInventory();
									break;

									case "Add New Product":
									console.log("Add Product");
									addProduct();
									break;


								}

								


							})


					})

				};

				// =============================================

				// function to show low inventory

				// =============================================

				function lowInventory() {

					console.log("-----------------------Low Inventory-------------------------- \n");
					var query = connection.query("SELECT * FROM inventory WHERE stock_quantity <= 50", function(err, res) {
						console.table(res);

						inquirer.prompt ([

						{
							type: "confirm",
							name: "addInventory",
							message: "Do you want to add to the inventory?"
						}

							]).then(function(response){

								if (response.addInventory === true) {
									console.log("Ok update Inventory");
									addInventory();
								}

								else {
									inventory();
								}
							})


					});
					

				}

				// =============================================

				// function to add inventory

				// =============================================

				function addInventory() {

					inquirer.prompt ([

					{
						type: "input",
						name: "enterInventory",
						message: "Enter ID of the item you'd like to stock up"
					},

					{
						type: "input",
						name: "enterStock",
						message: "Enter how many units you'd like to stock up"
					}

						]).then(function(response){

							var addID = response.enterInventory;
							var addStock = response.enterStock;

							var query = connection.query("UPDATE inventory SET stock_quantity = stock_quantity + " + addStock + " WHERE id = " + addID, function(err, res) {

								console.log("\n---------------Stock updated-----------------\n");
								setTimeout(inventory, 2000);

							})

						})

				}

				// =============================================

				// function to add a new product

				// =============================================

				function addProduct() {

					inquirer.prompt ([

					{
						type: "input",
						name: "newProduct",
						message: "Enter product name"
					},

					{
						type: "input",
						name: "newDept",
						message: "What department should be the new product be in?"
					},

					{
						type: "input",
						name: "newPrice",
						message: "Enter price of the new Item"
					},

					{
						type: "input",
						name: "newStock",
						message: "Enter the number of units to be added to the inventory"
					}

						]).then(function(response){

							var product = response.newProduct;
							var dept = response.newDept;
							var price = response.newPrice;
							var stock = response.newStock;

							console.log(product);

							console.log("\n ------------Adding new product-------------\n");
							var query = connection.query("INSERT into inventory (product_name, department_name, price, stock_quantity) VALUES("+ response.newProduct +","+  response.newDept +"," + response.newPrice +", "+ response.newStock +")");
							console.log(query);
							setTimeout(inventory, 2000);
						})

				}
			})

};

		