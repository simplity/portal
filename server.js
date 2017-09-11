var express=require("express"),
	logger=require("morgan"),
	app = express(),
	template = require("jade").compileFile(__dirname+'/source/templates/homepage.jade')
	
app.use(logger('dev'))
app.use(express.static(__dirname+'/docs'))	

app.listen(process.env.PORT || 3000,function(){
	console.log('Listening on http://localhost ' + (process.env.PORT || 3000))
})
