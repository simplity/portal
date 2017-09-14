var express=require("express"),
	logger=require("morgan"),
	app = express();
	
	
app.use(logger('dev'))
app.use('/portal',express.static(__dirname+'/docs'))	

app.listen(process.env.PORT || 3000,function(){
	console.log('Listening on http://localhost ' + (process.env.PORT || 3000))
})
