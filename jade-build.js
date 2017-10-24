var homepage = require("jade").compileFile(__dirname+"/source/templates/homepage.jade"),
    aboutpage = require("jade").compileFile(__dirname+"/source/templates/about.jade"),
	featurespage = require("jade").compileFile(__dirname+"/source/templates/features.jade"),
	examplespage = require("jade").compileFile(__dirname+"/source/templates/examples.jade"),
	startpage = require("jade").compileFile(__dirname+"/source/templates/getStarted.jade"),
	downloadspage = require("jade").compileFile(__dirname+"/source/templates/downloads.jade"),
	examplesDescpage = require("jade").compileFile(__dirname+"/source/templates/examplesDesc.jade"),
    fs=require("fs");

fs.writeFile(__dirname+"/docs/index.html",homepage({title:'Home'}),function(err,data){
	if (err) throw err;
	console.log('The home file has been saved!');
	
});	

fs.writeFile(__dirname+"/docs/about/index.html",aboutpage({title:'About Simplity'}),function(err,data){
	if (err) throw err;
	console.log('The about file has been saved!');
	
});	

fs.writeFile(__dirname+"/docs/features/index.html",featurespage({title:'Features'}),function(err,data){
	if (err) throw err;
	console.log('The features file has been saved!');
	
});	

fs.writeFile(__dirname+"/docs/examples/index.html",examplespage({title:'examples'}),function(err,data){
	if (err) throw err;
	console.log('The examples file has been saved!');
	
});	
fs.writeFile(__dirname+"/docs/downloads/index.html",downloadspage({title:'downloads'}),function(err,data){
	if (err) throw err;
	console.log('The downloads file has been saved!');
	
});	
fs.writeFile(__dirname+"/docs/getStarted/index.html",startpage({title:'getStarted'}),function(err,data){
	if (err) throw err;
	console.log('The getStarted file has been saved!');
	
});	
fs.writeFile(__dirname+"/docs/examplesDesc/index.html",examplesDescpage({title:'examplesDescpage'}),function(err,data){
	if (err) throw err;
	console.log('The examplesDesc file has been saved!');
	
});	
