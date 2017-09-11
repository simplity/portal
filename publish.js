var ghpages = require('gh-pages');
var path = require('path');
ghpages.publish('static', function(err) {
	if(err)
		throw err;
	console.log("Published to gh-pages");
	
});