var request = require('request');
const express = require('express')
const app = express()
var mongo = require('mongodb');
var moment = require('moment');
process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});
	
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("1231382");
  dbo.createCollection("blocks", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
	db.close();
  });
});

var bodyParser = require('body-parser')
  app.use('/assets', express.static(__dirname + '/assets'));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', function (req, res){
	try {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
try{
  var dbo = db.db("1231382");
let query = {
    "datetime": {"$gte": new Date(new moment().subtract(1, 'day'))}
};
  dbo.collection("blocks").find(query).toArray(function(err, result) {
    if (err) throw err;
	let txCount = 0;
	let opCount = 0;
	let count = 0;
	let block_number = 0;
	var ts;
	for (var d in result){
		count ++;
		txCount = txCount + result[d].tx_count;
		opCount = opCount + result[d].op_count;

		ts = (result[d].datetime);
	
		if (block_number < result[d].block_num){
			block_number = result[d].block_num;
		}
	}
	db.close();
	res.json({'activity_24hr': {'blockTxns': txCount, 'blockOps': opCount, 'timestamp': ts, 'block_number': block_number}});
  });
} catch (err){
console.log(err);
}
});

} catch (err){
	console.log(err); }
	
});

app.get('/1hr', function (req, res){
	try{ 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
try{
  var dbo = db.db("1231382");
let query = {
    "datetime": {"$gte": new Date(new moment().subtract(1, 'hour'))}
};
  dbo.collection("blocks").find(query).toArray(function(err, result) {
	  console.log(err, result);
    if (err) throw err;
	let txCount = 0;
	let opCount = 0;
	let count = 0;
	let block_number = 0;
	var ts;
	for (var d in result){
		count ++;
		txCount = txCount + result[d].tx_count;
		opCount = opCount + result[d].op_count;

		ts = (result[d].datetime);
	
		if (block_number < result[d].block_num){
			block_number = result[d].block_num;
		}
	}
	db.close();
	res.json({'activity_1hr': {'blockTxns': txCount, 'blockOps': opCount, 'timestamp': ts, 'block_number': block_number}});
});

}catch (err){
	console.log(err); }
});
} catch (err){
	console.log(err); }
});
app.get('/1min', function (req, res){
	try {
	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
try{
  var dbo = db.db("1231382");
let query = {
    "datetime": {"$gte": new Date(new moment().subtract(1, 'minute'))}
};
  dbo.collection("blocks").find(query).toArray(function(err, result) {
	  console.log(err, result);
    if (err) throw err;
	let txCount = 0;
	let opCount = 0;
	let count = 0;
	let block_number = 0;
	var ts;
	for (var d in result){
		count ++;
		txCount = txCount + result[d].tx_count;
		opCount = opCount + result[d].op_count;

		ts = (result[d].datetime);
	
		if (block_number < result[d].block_num){
			block_number = result[d].block_num;
		}
	}
	db.close();
	res.json({'activity_1min': {'blockTxns': txCount, 'blockOps': opCount, 'timestamp': ts, 'block_number': block_number}});
  });}catch (err){
	console.log(err); }
	});
	
} catch (err){
	console.log(err); }
});

app.get('/5min', function (req, res){
	try {
	MongoClient.connect(url, function(err, db) {
  if (err) throw err;try {
  var dbo = db.db("1231382");
	console.log(new Date(new moment().subtract(5, 'minute')));
let query = {
    "datetime": {"$gte": new Date(new moment().subtract(5, 'minute'))}
};
  dbo.collection("blocks").find(query).toArray(function(err, result) {
	  console.log(err, result);
    if (err) throw err;
	let txCount = 0;
	let opCount = 0;
	let count = 0;
	let block_number = 0;
	var ts;
	for (var d in result){
		count ++;
		txCount = txCount + result[d].tx_count;
		opCount = opCount + result[d].op_count;

		ts = (result[d].datetime);
	
		if (block_number < result[d].block_num){
			block_number = result[d].block_num;
		}
	}
	db.close();
	res.json({'activity_5min': {'blockTxns': txCount, 'blockOps': opCount, 'timestamp': ts, 'block_number': block_number}});
  });
}catch (err){
	console.log(err); }
	});
	
} catch (err){
	console.log(err); }
});
var port = 80;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
