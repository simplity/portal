var template = require("jade").compileFile(__dirname+"/source/templates/homepage.jade"),
    fs=require("fs");

fs.writeFile(__dirname+"/docs/index.html",template({title:'Home'}),function(err,data){
	if (err) throw err;
	console.log('The file has been saved!');
	
});	
