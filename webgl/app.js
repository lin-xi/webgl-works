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
	var demo = $('#dust-demo');
	var dust = new Dust(demo);
	
	
}