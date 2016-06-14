//var url = require('url');
//var queryString = require('querystring');

module.exports = function(source) {      
	//var query = queryString.parse(url.parse(this.query).query);      
	this.cacheable && this.cacheable();
   console.log("i was here");
   console.log(source);
   return source;   
};