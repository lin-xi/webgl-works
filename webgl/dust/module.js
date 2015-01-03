(function(window){
	var _modCache = {};
	var _exportCache = {};
	var _fileCache = {};

	function module(){
		var args = arguments;
		var name, dependentes, func;

		if(args.length == 2){
			name = args[1];
			func = args[1];
		}else if(args.length == 3){
			name = args[1];
			dependentes = args[1];
			func = args[2];
		}

		if(!_modCache[name]){
			_modCache[name] = {
				depes: dependentes,
				func: func
			}
		}
		loadModule(_modCache[name]);
	}

	function loadModule(mod){
		 mod.depes.foreach(function(name){
		 	if(!_modCache[name])
		 });
	}


	function import(path){
		if(!path) return;

		if(!_fileCache[path]){
			ajax.get(path).then(function(data){
				_fileCache[path] = data;
				_exportCache[path] = {};
				execute();
			});
		}else{
			execute();
		}
		function execute(){
			var jsData = _fileCache[path];
			window.export = _exportCache[path];
			eval(jsData)
		}
	}

	var ajax = {
        send: function(url, method, params, cb) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    var data = xhr.responseText;
                    cb && cb(data);
                }
            }
            var body;
            if (params) {
                var bodies = [];
                for (var name in params) {
                    bodies.push(name + '=' + encodeURIComponent(params[name]));
                }
                body = bodies.join('&');
                if (body.length) {
                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
                }        
            }
            xhr.send(body);
        },
        get: function(url, params) {
        	var defer = new Deferred();
            ajax.send(url, 'GET', params, function(data){
            	defer.resolve(data);
            });
            return defer;
        },
        post: function(url, params) {
        	var defer = new Deferred();
            ajax.send(url, 'POST', params, function(data){
            	defer.resolve(data);
            });
            return defer;
        }
    };

    var Deferred = function(){
        var fn = null;
        return {
            then: function(func){
                fn = func;
            },
            resolve: function(){
                fn && fn.apply(null, arguments);
            }
        }
    };


	window.module = module;
	window.export = {};
	window.from = from;
})(window)