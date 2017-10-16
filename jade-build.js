var homepage = require("jade").compileFile(__dirname+"/source/templates/homepage.jade"),
    aboutpage = require("jade").compileFile(__dirname+"/source/templates/about.jade"),
	featurespage = require("jade").compileFile(__dirname+"/source/templates/features.jade"),
	examplespage = require("jade").compileFile(__dirname+"/source/templates/examples.jade"),
	startpage = require("jade").compileFile(__dirname+"/source/templates/getStarted.jade"),
	webappwithdbpage = require("jade").compileFile(__dirname+"/source/templates/getStarted/webappwithDb.jade"),
	recordgenerationpage = require("jade").compileFile(__dirname+"/source/templates/getStarted/recordGeneration.jade"),
	downloadspage = require("jade").compileFile(__dirname+"/source/templates/downloads.jade"),
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
fs.writeFile(__dirname+"/docs/getStarted/webappwithDb/index.html",webappwithdbpage({title:'Web App with Database'}),function(err,data){
	if (err) throw err;
	console.log('The Web App with Database file has been saved!');
	
});	
fs.writeFile(__dirname+"/docs/getStarted/recordGeneration/index.html",recordgenerationpage({title:'Simplity Record Generation'}),function(err,data){
	if (err) throw err;
	console.log('The Simplity Record Generation file has been saved!');
	
});	