var axios = require('axios');//promise-based http requests component

/*Github requires a client id after a certain number of queries -- might need this to make it work and bypass rate limiting.
var id = 'CLIENT_ID';
var sec = 'CLIENT_SECRET';
var params = '?client_id=' + id + '&client_secret=' + sec;*/


module.exports = {
	fetchPortfolioOverview: function(selectAccount){
		//var encodedURI = window.encodeURI('https://react../portfolio_test.php?dataset=' + dataset
		var urlParams = "?account_type=" + selectAccount;
		var encodedURI = window.encodeURI('app/data/posts/october.json'); //Currently passed a file name for testing. Will change to scripts url with param(s)
		//console.log(dataset)
		return axios.get(encodedURI)
		.then(function (response){
			//console.log("Test from fetchPortfolioOverview in api.js");
			return response.data.portfolio;//items is the wrapper in the JSON file
		});
	},
	fetchPortfolioList: function(selectAccount,userID,selectMonth){
		//var encodedURI = window.encodeURI('https://reactt.php?dataset=' + dataset);
		var urlParams = "?account_type=" + selectAccount + "&selectMonth=" + selectMonth;
		var encodedURI = window.encodeURI('app/data/posts/october.json' + selectAccount); //Currently passed a file name for testing. Will change to scripts url with param(s)
		//console.log(dataset)
		return axios.get(encodedURI)
		.then(function (response){
			//console.log("Test from fetchPortfolioList in api.js");
			return response.data.portfolio;//items is the wrapper in the JSON file
		});
	},
	fetchPendingList: function(){
		//var encodedURI = window.encodeURI('https://react/scripts/portfolio_test.php?dataset=' + dataset);
		var encodedURI = window.encodeURI('app/data/posts/october.json'); //Currently passed a file name for testing. Will change to scripts url with param(s)
		//console.log(dataset)
		return axios.get(encodedURI)
		.then(function (response){
			//console.log("Test from fetchPortfolioList in api.js");
			return response.data.pending;//items is the wrapper in the JSON file
		});
	},
	fetchProductionItemDetails: function(dataset){
		//var encodedURI = window.encodeURI('https://react.com/scripts/buyerchaincustody.json');
		var encodedURI = window.encodeURI('app/data/posts/october.json'); //Currently passed a file name for testing. Will change to scripts url with param(s)
		//console.log("dataset in api.js",dataset);
		return axios.get(encodedURI)
		.then(function (response){
			//console.log("Test from fetchProductionItemDetails in api.js");
			return response.data;//items is the wrapper in the JSON file
		});
	},
	fetchOfferingItemDetails: function(dataset){
		//var encodedURI = window.encodeURI('https://react.com/scripts/buyerchaincustody.json');
		var encodedURI = window.encodeURI('app/data/posts/october.json'); //Currently passed a file name for testing. Will change to scripts url with param(s)
		//console.log("dataset in api.js",dataset);
		return axios.get(encodedURI)
		.then(function (response){
			//console.log("Test from fetchOfferingItemDetails in api.js");
			return response.data.offering_transactions;//items is the wrapper in the JSON file
		});
	},
	fetchLogo: function(dataset){
		//var encodedURI = window.encodeURI('https://react.com/scripts/getLogo.php');
		var encodedURI = window.encodeURI('app/data/posts/october.json'); //Currently passed a file name for testing. Will change to scripts url with param(s)
		//console.log("dataset in api.js",dataset);
		return axios.get(encodedURI)
		.then(function (response){
			//console.log("Test from fetchLogo in api.js");
			return response.data;//items is the wrapper in the JSON file
		});
	},
	sendTransactionData: function(selectedTransactionType,selectedVintageID,selectedVintageUnits){
		//var encodedURI = window.encodeURI('https://react.com/scripts/buyerchaincustody.json');
		var paramString = "selectedVintageID=" + selectedVintageID + "&selectedTransactionType=" + selectedTransactionType + "&selectedVintageUnits=" + selectedVintageUnits;
		var encodedURI = window.encodeURI('app/data/posts/october.json'); 
//Currently passed a file name for testing. Will change to scripts url with param(s)
		//console.log("dataset in api.js",paramString);
		return axios.get(encodedURI)
		.then(function (response){
			//console.log("Test from sendTransactionData in api.js");
			return response.data;//items is the wrapper in the JSON file
		});
	}

}
 