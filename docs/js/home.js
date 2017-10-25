var left = 0;
var step = 3;

function moveRight(){
    var size = document.getElementsByClassName("componentPartition").length;	
	if(left+step>=size-1){
		return;
	}
	document.getElementsByClassName("componentPartition")[left].className="componentPartition hidden";
	if(left>=size)
		left = 0;
	else
	   left++;

	document.getElementsByClassName("componentPartition")[left+step].className="componentPartition";  
}
function moveLeft(){
	var size = document.getElementsByClassName("componentPartition").length;	
	if(left==0){
		return;
	}
    document.getElementsByClassName("componentPartition")[left+step].className="componentPartition hidden";
    if(left<=0)
		left = 0;
	else
	   left--;
    document.getElementsByClassName("componentPartition hidden")[left].className="componentPartition";	
}