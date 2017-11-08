var homepage = require("jade").compileFile(__dirname+"/source/templates/homepage.jade"),
    aboutpage = require("jade").compileFile(__dirname+"/source/templates/about.jade"),
	guidepage = require("jade").compileFile(__dirname+"/source/templates/guide.jade"),
	docspage = require("jade").compileFile(__dirname+"/source/templates/docs.jade"),
	examplespage = require("jade").compileFile(__dirname+"/source/templates/examples/examples.jade"),
	startpage = require("jade").compileFile(__dirname+"/source/templates/getStarted.jade"),
	gettingstartpage = require("jade").compileFile(__dirname+"/source/templates/gettingStarted.jade"),
	plainwebservicepage = require("jade").compileFile(__dirname+"/source/templates/getStarted/plainWebService.jade"),
	webservicesopenapipage = require("jade").compileFile(__dirname+"/source/templates/getStarted/webServicesOpenApi.jade"),
	simplityservicewithjavapage = require("jade").compileFile(__dirname+"/source/templates/getStarted/simplityServiceWithJava.jade"),
	simplityspringmvcpage = require("jade").compileFile(__dirname+"/source/templates/getStarted/simplitySpringMvc.jade"),
	simplityspringbootpage = require("jade").compileFile(__dirname+"/source/templates/getStarted/simplitySpringBoot.jade"),
	simplitygrizzlyjettypage = require("jade").compileFile(__dirname+"/source/templates/getStarted/simplityGrizzlyJetty.jade"),
	simplitybatchpage = require("jade").compileFile(__dirname+"/source/templates/getStarted/simplityBatch.jade"),
	webappwithdbpage = require("jade").compileFile(__dirname+"/source/templates/getStarted/webappwithDb.jade"),
	recordgenerationpage = require("jade").compileFile(__dirname+"/source/templates/getStarted/recordGeneration.jade"),
	downloadspage = require("jade").compileFile(__dirname+"/source/templates/downloads.jade"),
	examplesDescpage2 = require("jade").compileFile(__dirname+"/source/templates/examples/petClinic.jade"),
	examplesDescpage3 = require("jade").compileFile(__dirname+"/source/templates/examples/todos.jade"),
	examplesDescpage4 = require("jade").compileFile(__dirname+"/source/templates/examples/contract.jade"),
	examplesDescpage5 = require("jade").compileFile(__dirname+"/source/templates/examples/springInt.jade"),
	examplesDescpage6 = require("jade").compileFile(__dirname+"/source/templates/examples/batch.jade"),
	compoServicepage = require("jade").compileFile(__dirname+"/source/templates/components/services.jade"),	
	compoDTpage= require("jade").compileFile(__dirname+"/source/templates/components/datatypes.jade"),	
	compoRecpage= require("jade").compileFile(__dirname+"/source/templates/components/records.jade"),
	compoMsgpage= require("jade").compileFile(__dirname+"/source/templates/components/messages.jade"),
	compoSqlpage= require("jade").compileFile(__dirname+"/source/templates/components/sql.jade"),
	compoTestspage= require("jade").compileFile(__dirname+"/source/templates/components/tests.jade"),
	compoBatchspage= require("jade").compileFile(__dirname+"/source/templates/components/batch.jade"),
	compoSppage= require("jade").compileFile(__dirname+"/source/templates/components/sp.jade"),
	ontheflypage=require("jade").compileFile(__dirname+"/source/templates/on-the-fly.jade"),
	batchProcessorpage=require("jade").compileFile(__dirname+"/source/templates/features/batchProcessor.jade"),
	executeSqlpage=require("jade").compileFile(__dirname+"/source/templates/features/executeSql.jade"),
    executeSppage=require("jade").compileFile(__dirname+"/source/templates/features/executeSp.jade"),
	filterpage=require("jade").compileFile(__dirname+"/source/templates/features/filter.jade"),
	keyValueListpage=require("jade").compileFile(__dirname+"/source/templates/features/keyValueList.jade"),
	readpage=require("jade").compileFile(__dirname+"/source/templates/features/read.jade"),
	readChildrenpage=require("jade").compileFile(__dirname+"/source/templates/features/readChildren.jade"),
	readWithSqlpage=require("jade").compileFile(__dirname+"/source/templates/features/readWithSql.jade"),
	savepage=require("jade").compileFile(__dirname+"/source/templates/features/save.jade"),
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

fs.writeFile(__dirname+"/docs/getStarted/plainWebService/index.html",plainwebservicepage({title:'plainWebService'}),function(err,data){
	if (err) throw err;
	console.log('The plainWebService file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/getStarted/webServicesOpenApi/index.html",webservicesopenapipage({title:'webServicesOpenApi'}),function(err,data){
	if (err) throw err;
	console.log('The webServicesOpenApi file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/getStarted/simplityServiceWithJava/index.html",simplityservicewithjavapage({title:'simplityServiceWithJava'}),function(err,data){
	if (err) throw err;
	console.log('The simplityServiceWithJava file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/getStarted/simplitySpringMvc/index.html",simplityspringmvcpage({title:'simplitySpringMvc'}),function(err,data){
	if (err) throw err;
	console.log('The simplitySpringMvc file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/getStarted/simplitySpringBoot/index.html",simplityspringbootpage({title:'simplitySpringBoot'}),function(err,data){
	if (err) throw err;
	console.log('The simplitySpringBoot file has been saved!');	
});
fs.writeFile(__dirname+"/docs/getStarted/simplityGrizzlyJetty/index.html",simplitygrizzlyjettypage({title:'simplityGrizzlyJetty'}),function(err,data){
	if (err) throw err;
	console.log('The simplityGrizzlyJetty file has been saved!');	
});
fs.writeFile(__dirname+"/docs/getStarted/simplityBatch/index.html",simplitybatchpage({title:'simplityBatch'}),function(err,data){
	if (err) throw err;
	console.log('The simplityBatch file has been saved!');	
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
fs.writeFile(__dirname+"/docs/examples/springInt/index.html",examplesDescpage5({title:'Spring Integration'}),function(err,data){
	if (err) throw err;
	console.log('The contract file has been saved!');
});
fs.writeFile(__dirname+"/docs/examples/batch/index.html",examplesDescpage6({title:'Batch'}),function(err,data){
	if (err) throw err;
	console.log('The contract file has been saved!');
});
fs.writeFile(__dirname+"/docs/gettingStarted/index.html",gettingstartpage({title:'Get Started'}),function(err,data){
	if (err) throw err;
	console.log('The Web App with Database file has been saved!');
});	
fs.writeFile(__dirname+"/docs/getStarted/webappwithDb/index.html",webappwithdbpage({title:'Web App with Database'}),function(err,data){
	if (err) throw err;
	console.log('The Web App with Database file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/components/services/index.html",compoServicepage({title:'Services'}),function(err,data){
	if (err) throw err;
	console.log('The home file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/components/datatypes/index.html",compoDTpage({title:'Data Types'}),function(err,data){
	if (err) throw err;
	console.log('The home file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/components/batch/index.html",compoBatchspage({title:'Batch'}),function(err,data){
	if (err) throw err;
	console.log('The home file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/components/messages/index.html",compoMsgpage({title:'Messages'}),function(err,data){
	if (err) throw err;
	console.log('The home file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/components/records/index.html",compoRecpage({title:'Records'}),function(err,data){
	if (err) throw err;
	console.log('The home file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/components/sql/index.html",compoSqlpage({title:'Sql'}),function(err,data){
	if (err) throw err;
	console.log('The home file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/components/tests/index.html",compoTestspage({title:'Tests'}),function(err,data){
	if (err) throw err;
	console.log('The home file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/components/sp/index.html",compoSppage({title:'Stored Procedure'}),function(err,data){
	if (err) throw err;
	console.log('The home file has been saved!');	
});
fs.writeFile(__dirname+"/docs/on-the-fly/index.html",ontheflypage({title:'On the fly services'}),function(err,data){
	if (err) throw err;
	console.log('The home file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/getStarted/recordGeneration/index.html",recordgenerationpage({title:'Simplity Record Generation'}),function(err,data){	if (err) throw err;
	console.log('The Simplity Record Generation file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/docs/features/batchProcessor/index.html",batchProcessorpage({title:'Batch Processor action'}),function(err,data){	if (err) throw err;
	console.log('The Simplity Record Generation file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/docs/features/executeSql/index.html",executeSqlpage({title:'Execute SQL action'}),function(err,data){	if (err) throw err;
	console.log('The Simplity Record Generation file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/docs/features/executeSp/index.html",executeSppage({title:'Execute SP action'}),function(err,data){	if (err) throw err;
	console.log('The Simplity Record Generation file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/docs/features/filter/index.html",filterpage({title:'Filter Action'}),function(err,data){	if (err) throw err;
	console.log('The Simplity Record Generation file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/docs/features/keyValueList/index.html",keyValueListpage({title:'SKey value List action'}),function(err,data){	if (err) throw err;
	console.log('The Simplity Record Generation file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/docs/features/read/index.html",readpage({title:'Read Action'}),function(err,data){	if (err) throw err;
	console.log('The Simplity Record Generation file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/docs/features/readChildren/index.html",readChildrenpage({title:'Read Children Action'}),function(err,data){	if (err) throw err;
	console.log('The Simplity Record Generation file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/docs/features/readWithSql/index.html",readWithSqlpage({title:'Read with SQL Action'}),function(err,data){	if (err) throw err;
	console.log('The Simplity Record Generation file has been saved!');	
});	
fs.writeFile(__dirname+"/docs/docs/features/save/index.html",savepage({title:'Save Action'}),function(err,data){	if (err) throw err;
	console.log('The Simplity Record Generation file has been saved!');	
});	


