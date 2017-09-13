var homepage = require("jade").compileFile(__dirname+"/source/templates/homepage.jade"),
    aboutpage = require("jade").compileFile(__dirname+"/source/templates/about.jade"),
	aboutpage = require("jade").compileFile(__dirname+"/source/templates/features.jade"),
    fs=require("fs");

fs.writeFile(__dirname+"/docs/index.html",homepage({title:'Home'}),function(err,data){
	if (err) throw err;
	console.log('The home file has been saved!');
	
});	

fs.writeFile(__dirname+"/docs/about/index.html",aboutpage({title:'About Simplity'}),function(err,data){
	if (err) throw err;
	console.log('The about file has been saved!');
	
});	

fs.writeFile(__dirname+"/docs/features/index.html",aboutpage({title:'Features'}),function(err,data){
	if (err) throw err;
	console.log('The features file has been saved!');
	
});	
