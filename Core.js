/*
 * Filename: djsex/Core.js
 * Source  :
 * Author  :
 * Version :
 * Summary :
 * Abstract:
 */

/* Original Simple 'Class' style JavaScript Inheritance From and
 * Based upon (MIT Licensed) code by John Resig http://ejohn.org/
 */
var djsex = {
    init: function(){
    	var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

        // Check if we are missing the 'bind' object on the Function prototype,
        // if so, add it.
        if (!(typeof Function.prototype.bind == 'function')) {
            Function.prototype.bind = function (bind) {
                var self = this;
                return function () {
                    var args = Array.prototype.slice.call(arguments);
                    return self.apply(bind || null, args);
                };
            };
        }

    	// Create a new Class that inherits from this class
    	djsex.Class.extend = function(prop) {
    		var _super = this.prototype;

    		// Instantiate a base class (but only create the instance,
    		// don't run the init constructor)
		    initializing = true;
	    	var prototype = new this();
    		initializing = false;

    		// Copy the properties over onto the new prototype
		    for (var name in prop) {
	    		// Check if we're overwriting an existing function
    			prototype[name] = typeof prop[name] == "function" &&
				    typeof _super[name] == "function" && fnTest.test(prop[name]) ?
			    	(function(name, fn){
		    			return function() {
	    					var tmp = this._super;
    
			    			// Add a new ._super() method that is the same method
		    				// but on the super-class
	    					this._super = _super[name];
    
			    			// The method only need to be bound temporarily, so we
		    				// remove it when we're done executing
	    					var ret = fn.apply(this, arguments);
    						this._super = tmp;

						    return ret;
					    };
				    })(name, prop[name]) :
			    	prop[name];
		    }

	    	// The dummy class constructor
    		djsex.Class = function() {
	    		// All construction is actually done in the init method
    			if ( !initializing && this.init )
			    	this.init.apply(this, arguments);
		    }

	    	// Populate our constructed prototype object
    		djsex.Class.prototype = prototype;

	    	// Enforce the constructor to be what we expect
    		djsex.Class.prototype.constructor = djsex.Class;

	    	// And make this class extendable
    		djsex.Class.extend = arguments.callee;

	    	return djsex.Class;
    	};
    },
    
    debug: function(msg){
        console.debug(msg);
    },

    log: function(msg){
        console.log(new Date()+": "+msg);
    },

	// The base Class implementation (does nothing)
    Class: function(){
    },

    onDOMReady: function(fn, ctx){
        alert("domedone");
        var ready, timer;
        var onChange = function(e){
            if(e && e.type == "DOMContentLoaded"){
                fireDOMReady();
            }else if(e && e.type == "load"){
                fireDOMReady();
            }else if(document.readyState){
                if((/loaded|complete/).test(document.readyState)){
                    fireDOMReady();
                }else if(!!document.documentElement.doScroll){
                    try{
                        ready || document.documentElement.doScroll('left');
                    }catch(e){
                        return;
                    }
                    fireDOMReady();
                }
            }
        };
 
        var fireDOMReady = function(){
            if(!ready){
                ready = true;
                fn.call(ctx || window);
                if(document.removeEventListener)
                    document.removeEventListener("DOMContentLoaded", onChange, false);
                document.onreadystatechange = null;
                window.onload = null;
                clearInterval(timer);
                timer = null;
            }
        };
 
        if(document.addEventListener)
            document.addEventListener("DOMContentLoaded", onChange, false);
        document.onreadystatechange = onChange;
        timer = setInterval(onChange, 5);
        window.onload = onChange;
    },
};
djsex.init();
