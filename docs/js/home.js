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

function toClipboard(copyContentClassName) {
	var contentToCopyElement = document.getElementById(copyContentClassName);
	
	var copyTarget = document.createElement("textarea");
	copyTarget.style.position = "absolute";
	copyTarget.style.left = "-9999px";
	copyTarget.style.top = "0";
	copyTarget.id = "_hiddenCopyText_";
	document.body.appendChild(copyTarget);
	
	copyTarget.textContent = contentToCopyElement.textContent;
	
	var currentElement = document.activeElement;
	copyTarget.focus();
	copyTarget.setSelectionRange(0, copyTarget.value.length);
	
	var copySelectedElement;
	try {
		copySelectedElement = document.execCommand("copy");
	} catch (e) {
		copySelectedElement = false;
	}
	
	if (currentElement && typeof currentElement.focus === "function") {
		currentElement.focus();
	}
	copyTarget.textContent = "";
	return copySelectedElement;
}