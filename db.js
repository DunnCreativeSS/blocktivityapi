var request = require('request');
const express = require('express')
const app = express()
var mongo = require('mongodb');
var moment = require('moment');
var currentBlock = 0;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

setInterval(function(){
	try {
	var smoke = require('./lib')
	smoke.api.streamBlockNumber('head', function(err, headBlock) {
		if (err) console.log(err);
try{
		currentBlock = headBlock;
		return;
} catch (err){
	console.log(err); }
	});
} catch (err){
	console.log(err); }
}, 900);
var blocks = []
setInterval(function(){
	try{
	var smoke = require('./lib')
smoke.api.streamBlock('head', function(err, result) {
	try{
	if (!blocks.includes(result.block_id)){
		console.log(currentBlock);
		console.log(new Date(result.timestamp));
		blocks.push(result.block_id);
    var count = 0;
	var opCount = 0;
	for ( var t in result.transactions){
		for (var o in result.transactions[t].operations){
			opCount ++;
		}
		count++;
	}

	var myobj = { block_num: currentBlock, block_id: result.block_id, op_count: opCount, tx_count: count, datetime: new Date(result.timestamp)};

	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
try {
  var dbo = db.db("1231382"); 
 dbo.collection("blocks").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
	db.close();
	return;
  }); }catch (err){
	console.log(err); }
});
	}}catch (err){
	console.log(err); }

	})

} catch (err){
	console.log(err); }
}, 1700);