var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.status(800);
});

router.put('/', function(req, res, next) {
	coreFunction(req, res, next);
});

/* GET home page. */
router.post('/', function(req, res, next) {
	coreFunction(req, res, next);
});

/**
 *  Usage: Core function 
 */
var coreFunction = function(req, res, next) {
	validate(req, res);

	var reqObj = req.body['payload'];
	var responseJSONArray = new Array();

	/**
	 * Business logic 
	 */
	for (index = 0; index < reqObj.length; index++) {
		// business logic to filter objects 
		if (reqObj[index]['type'] === "htv"
				&& reqObj[index]['workflow'] === "completed") {
			var property = new Object();
			var address = reqObj[index]['address'];
			property.concataddress = address['buildingNumber'] + ' '
					+ address['street'] + ' ' + address['suburb'] + ' '
					+ address['state'] + ' ' + address['postcode'];
			property.type = "htv";
			property.workflow = "completed";
			responseJSONArray.push(property);
		}

	}
	res.json(JSON.parse(JSON.stringify({
		response : responseJSONArray
	})));
};

/**
 * @Usage - validate
 * 
 */
var validate = function(req, res) {
	try {
		console.log(" output ", req.body[propertyId]);
		JSON.parse(req.body);
	} catch (error) {
		res.status(400);
	}
};

module.exports = router;
