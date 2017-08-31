"use strict";

const length4db32=32;
const Hashids = require("hashids");
const uuid = require('node-uuid');

module.exports={
		byLength:function(length){
			const hids=new Hashids(uuid.v1(),length);
			return hids.encrypt(1);
		},
		
		db32:function(){
			let hids=new Hashids(uuid.v1(),32);
			return hids.encode(1);;
		},
		db36:function(){
			return uuid.v1();
		}
};
