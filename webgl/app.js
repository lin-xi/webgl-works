document.body.onload = load;

function $(selector){
	var elems = document.querySelectorAll(selector);
	if(elems.length == 1){
		return elems[0];
	}else{
		return elems;
	}
}

function load(){
	var canvas = $('#webgl-canvas');
	canvas.style.width = document.body.offsetWidth + 'px';
	canvas.style.height = document.body.offsetHeight + 'px';
	
	canvas.width = document.body.offsetWidth;
	canvas.height = document.body.offsetHeight;
	

}