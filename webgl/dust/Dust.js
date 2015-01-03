(function(){

	import Engine from "engine";

	function Dust(dom){
		this.dom = dom;
		this.initialise();
	}

	Dust.prototype.initialise = function() {
		var w = this.dom.offsetWidth,
			h = this.dom.offsetHeight;

		var canvas = this.canvas = document.createElement('canvas');
		this.dom.appendChild(canvas);
		canvas.style.width = w + 'px';
		canvas.style.height = h + 'px';
		canvas.width = w;
		canvas.height = h;

		this.engine = new Engine(canvas);
	};

	window.Dust = Dust;

})(window)
