var homepage = require("jade").compileFile(__dirname+"/source/templates/homepage.jade"),
    aboutpage = require("jade").compileFile(__dirname+"/source/templates/about.jade"),
	guidepage = require("jade").compileFile(__dirname+"/source/templates/guide.jade"),
	docspage = require("jade").compileFile(__dirname+"/source/templates/docs.jade"),
	examplespage = require("jade").compileFile(__dirname+"/source/templates/examples/examples.jade"),
	startpage = require("jade").compileFile(__dirname+"/source/templates/getStarted.jade"),
	webappwithdbpage = require("jade").compileFile(__dirname+"/source/templates/getStarted/webappwithDb.jade"),
	recordgenerationpage = require("jade").compileFile(__dirname+"/source/templates/getStarted/recordGeneration.jade"),
	downloadspage = require("jade").compileFile(__dirname+"/source/templates/downloads.jade"),
	examplesDescpage1 = require("jade").compileFile(__dirname+"/source/templates/examples/mcHelloWorld/mcHelloWorld.jade"),
	examplesDescpage2 = require("jade").compileFile(__dirname+"/source/templates/examples/petstore/petClinic.jade"),
	examplesDescpage3 = require("jade").compileFile(__dirname+"/source/templates/examples/todos/todos.jade"),
	examplesDescpage4 = require("jade").compileFile(__dirname+"/source/templates/examples/contract/contract.jade"),
	compoServicepage = require("jade").compileFile(__dirname+"/source/templates/components/services.jade"),	
    fs=require("fs");

fs.writeFile(__dirname+"/docs/index.html",homepage({title:'Home'}),function(err,data){
	if (err) throw err;
	console.log('The home file has been saved!');
	
});	

fs.writeFile(__dirname+"/docs/about/index.html",aboutpage({title:'About Simplity'}),function(err,data){
	if (err) throw err;
	console.log('The about file has been saved!');
	
});	

fs.writeFile(__dirname+"/docs/guide/index.html",guidepage({title:'Guide'}),function(err,data){
	if (err) throw err;
	console.log('The features file has been saved!');
	
});	

fs.writeFile(__dirname+"/docs/docs/index.html",docspage({title:'Docs'}),function(err,data){
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
fs.writeFile(__dirname+"/docs/examples/mcHelloWorld/index.html",examplesDescpage1({title:'helloworld'}),function(err,data){
	if (err) throw err;
	console.log('The mcHelloWorld file has been saved!');
	
});	
fs.writeFile(__dirname+"/docs/examples/petstore/index.html",examplesDescpage2({title:'Pet Store'}),function(err,data){
	if (err) throw err;
	console.log('The petClinic file has been saved!');
	
});	
fs.writeFile(__dirname+"/docs/examples/todos/index.html",examplesDescpage3({title:'To do'}),function(err,data){
	if (err) throw err;
	console.log('The todos file has been saved!');
	
});	
fs.writeFile(__dirname+"/docs/examples/contract/index.html",examplesDescpage4({title:'Contract'}),function(err,data){
	if (err) throw err;
	console.log('The contract file has been saved!');
	
});	
fs.writeFile(__dirname+"/docs/getStarted/webappwithDb/index.html",webappwithdbpage({title:'Web App with Database'}),function(err,data){
	if (err) throw err;
	console.log('The Web App with Database file has been saved!');
	
});	
fs.writeFile(__dirname+"/docs/components/services/index.html",compoServicepage({title:'Services'}),function(err,data){
	if (err) throw err;
	console.log('The home file has been saved!');
	
});	
fs.writeFile(__dirname+"/docs/getStarted/recordGeneration/index.html",recordgenerationpage({title:'Simplity Record Generation'}),function(err,data){
	if (err) throw err;
	console.log('The Simplity Record Generation file has been saved!');
	
});	

